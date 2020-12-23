<?php
declare(strict_types=1);

namespace App\Service\Project\Factory;

use App\Service\Project\Contract\PageFactoryInterface;
use App\Service\Project\Contract\PageInterface;
use App\Service\Project\Contract\ProjectInterface;
use App\Service\Project\Dto\Page;
use Nette\Utils\Strings;
use Symfony\Component\Yaml\Yaml;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PageFactory implements PageFactoryInterface
{
    /**
     * @var string
     */
    private const CONFIG_CONTENT_PATTERN = '#^\s*' . self::SLASHES_WITH_SPACES_PATTERN . '?(?<config>.*?)' . self::SLASHES_WITH_SPACES_PATTERN . '(?<content>.*?)$#s';

    /**
     * @var string
     */
    private const SLASHES_WITH_SPACES_PATTERN = '(?:---eonx_docs---[\s]*[\r\n]+)';

    public function createFromFileInfo(SmartFileInfo $fileInfo, ProjectInterface $project): ?PageInterface
    {
        $matches = Strings::match($fileInfo->getContents(), self::CONFIG_CONTENT_PATTERN);
        $config = isset($matches['config']) ? Yaml::parse($matches['config']) : [];
        $contents = $matches['content'] ?? $fileInfo->getContents();

        if (isset($config['ignore'])) {
            return null;
        }

        return new Page(
            $fileInfo->getFilename(),
            $fileInfo->getExtension(),
            $contents,
            $this->getPathInProject($fileInfo, $project),
            $config['weight'] ?? null,
            $config['title'] ?? null
        );
    }

    private function getPathInProject(SmartFileInfo $fileInfo, ProjectInterface $project): string
    {
        return \str_replace($project->getLocalPath(), '', $fileInfo->getPath());
    }
}
