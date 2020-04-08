<?php
declare(strict_types=1);

namespace App\DtoFactory;

use App\Dto\Project;
use App\DtoFactory\Interfaces\ProjectFactoryInterface;
use App\Filesystem\Interfaces\ProjectFinderInterface;
use App\Services\Git\GitManagerInterface;
use Nette\Utils\Json;
use Nette\Utils\Strings;
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

    public function __construct(GitManagerInterface $gitManager)
    {
        $this->gitManager = $gitManager;
        $this->projectsDirPath = (string)(new SmartFileInfo(ProjectFinderInterface::PROJECTS_DIR))->getRealPath();
    }

    public function createFromFileInfo(SmartFileInfo $fileInfo): ?Project
    {
        $json = Json::decode($fileInfo->getContents(), Json::FORCE_ARRAY);

        if ($json['extra']['eonx_docs']['ignore'] ?? false) {
            return null;
        }

        return new Project(
            $json['name'],
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
            $this->gitManager->getOriginPath(
                $composerJson['extra']['eonx_docs']['remote_path'] ?? '',
                $this->gitManager->getCurrentBranchFromFileInfo($fileInfo)
            )
        );
    }

    private function getLocalBasePath(SmartFileInfo $fileInfo): string
    {
        $basePath = Strings::replace($fileInfo->getPath(), \sprintf('#%s/#', $this->projectsDirPath), '');

        return \sprintf('%s/%s', $this->projectsDirPath, \explode('/', $basePath)[0]);
    }

    private function getType(string $type): string
    {
        return $type === 'library' ? Project::TYPE_PACKAGE : Project::TYPE_PROJECT;
    }
}
