<?php
declare(strict_types=1);

namespace App\Service\Project\Factory;

use App\Service\Project\Contract\ProjectFactoryInterface;
use App\Service\Project\Contract\ProjectInterface;
use App\Service\Project\Dto\PhpProject;
use Symplify\ComposerJsonManipulator\ComposerJsonFactory;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PhpProjectFactory implements ProjectFactoryInterface
{
    private ComposerJsonFactory $composerJsonFactory;

    public function __construct(ComposerJsonFactory $composerJsonFactory)
    {
        $this->composerJsonFactory = $composerJsonFactory;
        $this->projectsDirPath = null;
    }

    public function createFromFileInfo(SmartFileInfo $fileInfo): ?ProjectInterface
    {
        $composerJson = $this->composerJsonFactory->createFromFileInfo($fileInfo);
        $extra = $composerJson->getExtra();

        $finderDepth = isset($extra['eonx_docs']['finder_depth'])
            ? (string)$extra['eonx_docs']['finder_depth']
            : null;

        $finderPattern = isset($extra['eonx_docs']['finder_pattern'])
            ? (string)$extra['eonx_docs']['finder_pattern']
            : null;

        return new PhpProject(
            $composerJson->getName(),
            $composerJson->getDescription(),
            $fileInfo->getPath(),
            $finderDepth,
            $finderPattern
        );
    }
}
