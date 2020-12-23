<?php
declare(strict_types=1);

namespace App\Service\Project\Finder;

use App\Service\Project\Contract\ProjectFactoryInterface;
use App\Service\Project\Contract\ProjectFinderInterface;
use App\Service\Project\Contract\ProjectInterface;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PhpProjectFinder implements ProjectFinderInterface
{
    private ProjectFactoryInterface $projectFactory;

    public function __construct(ProjectFactoryInterface $projectFactory)
    {
        $this->projectFactory = $projectFactory;
    }

    /**
     * @return \App\Service\Project\Contract\ProjectInterface[]
     */
    public function findAllProjects(): array
    {
        $map = function (SmartFileInfo $fileInfo): ?ProjectInterface {
            return $this->projectFactory->createFromFileInfo($fileInfo);
        };

        $filter = static function (?ProjectInterface $project = null): bool {
            return $project instanceof ProjectInterface;
        };

        return \array_filter(\array_map($map, $this->getComposerJsonFiles()), $filter);
    }

    /**
     * @return \Symplify\SmartFileSystem\SmartFileInfo[]
     */
    private function getComposerJsonFiles(): array
    {
        $finder = (new Finder())
            ->in([self::PROJECTS_DIR])
            ->name('composer.json')
            ->sortByName();

        return (new FinderSanitizer())->sanitize($finder);
    }
}
