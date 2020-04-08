<?php
declare(strict_types=1);

namespace App\DtoFactory;

use App\Dto\Documentation;
use App\Dto\Project;
use App\DtoFactory\Interfaces\DocumentationFactoryInterface;
use App\Services\Parsedown\ExtendedParsedown;
use Nette\Utils\Strings;
use Symfony\Component\Yaml\Yaml;
use Symplify\SmartFileSystem\SmartFileInfo;

final class DocumentationFactory implements DocumentationFactoryInterface
{
    /**
     * @var string
     */
    private const CONFIG_CONTENT_PATTERN = '#^\s*' . self::SLASHES_WITH_SPACES_PATTERN . '?(?<config>.*?)' . self::SLASHES_WITH_SPACES_PATTERN . '(?<content>.*?)$#s';

    /**
     * @var string
     */
    private const SLASHES_WITH_SPACES_PATTERN = '(?:---eonx_docs---[\s]*[\r\n]+)';

    /**
     * @var \App\Services\Parsedown\ExtendedParsedown
     */
    private $markdown;

    public function __construct(ExtendedParsedown $markdown)
    {
        $this->markdown = $markdown;
    }

    public function createFromFileInfo(Project $project, SmartFileInfo $fileInfo): Documentation
    {
        $matches = Strings::match($fileInfo->getContents(), self::CONFIG_CONTENT_PATTERN);
        $config = isset($matches['config']) ? Yaml::parse($matches['config']) : [];
        $contents = $matches['content'] ?? $fileInfo->getContents();

        return new Documentation(
            $fileInfo->getFilename(),
            $this->getSlug($project, $fileInfo),
            $fileInfo->getPath(),
            $this->markdown->parse($contents),
            $this->getGithubEditUrl($project, $fileInfo),
            $project,
            $config['title'] ?? null,
            $config['weight'] ?? null,
            isset($config['is_section']),
            $config['section_icon'] ?? null
        );
    }

    private function getGithubEditUrl(Project $project, SmartFileInfo $fileInfo): string
    {
        $inProjectPath = Strings::replace($fileInfo->getPath(), \sprintf('#%s#', $project->getLocalBasePath()), '');
        $remote = $project->getGitOriginUrl();
        $branch = $project->getGitBranch();

        return \sprintf('%s/edit/%s%s/%s', $remote, $branch, $inProjectPath, $fileInfo->getFilename());
    }

    private function getSlug(Project $project, SmartFileInfo $fileInfo): string
    {
        $slug = Strings::replace($fileInfo->getFilename(), '#.md#', '');
        $localPath = Strings::replace($fileInfo->getPath(), \sprintf('#%s#', $project->getLocalPath()), '');

        return \sprintf('%s%s/%s', $project->getSlug(), $localPath, $slug);
    }
}
