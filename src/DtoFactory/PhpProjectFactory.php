<?php
declare(strict_types=1);

namespace App\DtoFactory;

use App\Dto\Project;
use App\DtoFactory\Interfaces\ProjectFactoryInterface;
use App\Filesystem\Interfaces\ProjectFinderInterface;
use App\Services\Git\GitManagerInterface;
use Nette\Utils\Json;
use Nette\Utils\Strings;
use Symfony\Component\Routing\RouterInterface;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PhpProjectFactory implements ProjectFactoryInterface
{
    /**
     * @var \App\Services\Git\GitManagerInterface
     */
    private $gitManager;

    /**
     * @var string
     */
    private $projectsDirPath;

    /**
     * @var \Symfony\Component\Routing\RouterInterface
     */
    private $router;

    public function __construct(GitManagerInterface $gitManager, RouterInterface $router)
    {
        $this->gitManager = $gitManager;
        $this->router = $router;
    }

    public function createFromFileInfo(SmartFileInfo $fileInfo): ?Project
    {
        $json = Json::decode($fileInfo->getContents(), Json::FORCE_ARRAY);

        if ($json['extra']['eonx_docs']['ignore'] ?? false) {
            return null;
        }

        $extra = $json['extra']['eonx_docs'] ?? [];
        $name = $extra['name'] ?? $json['name'];
        $deprecated = isset($extra['deprecated']);

        return new Project(
            $name,
            $json['name'],
            $json['description'],
            'php',
            $this->getType($json['type'] ?? 'undefined'),
            $json['license'],
            $this->gitManager->getOriginUrlFromFileInfo($fileInfo),
            $fileInfo->getPath(),
            $this->getLocalBasePath($fileInfo),
            $this->gitManager->getOriginUrlFromFileInfo($fileInfo),
            $this->gitManager->getCurrentBranchFromFileInfo($fileInfo),
            $this->router->generate('projects_index', ['slug' => $json['name']]),
            $this->gitManager->getOriginPath(
                $composerJson['extra']['eonx_docs']['remote_path'] ?? '',
                $this->gitManager->getCurrentBranchFromFileInfo($fileInfo)
            ),
            $json['extra']['eonx_docs']['finder_pattern'] ?? null,
            $json['extra']['eonx_docs']['finder_depth'] ?? null,
            $deprecated
        );
    }

    private function getLocalBasePath(SmartFileInfo $fileInfo): string
    {
        $basePath = Strings::replace($fileInfo->getPath(), \sprintf('#%s/#', $this->getProjectsDirPath()), '');

        return \sprintf('%s/%s', $this->getProjectsDirPath(), \explode('/', $basePath)[0]);
    }

    private function getProjectsDirPath(): string
    {
        if ($this->projectsDirPath !== null) {
            return $this->projectsDirPath;
        }

        return $this->projectsDirPath = (string)(new SmartFileInfo(ProjectFinderInterface::PROJECTS_DIR))->getRealPath();
    }

    private function getType(string $type): string
    {
        return $type === 'library' ? Project::TYPE_PACKAGE : Project::TYPE_PROJECT;
    }
}
