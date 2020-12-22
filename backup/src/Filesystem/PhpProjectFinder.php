<?php
declare(strict_types=1);

namespace App\Filesystem;

use App\Dto\Project;
use App\DtoFactory\PhpProjectFactory;
use App\Filesystem\Interfaces\ProjectFinderInterface;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PhpProjectFinder implements ProjectFinderInterface
{
    /**
     * @var \Symplify\SmartFileSystem\Finder\FinderSanitizer
     */
    private $finderSanitizer;

    /**
     * @var \App\DtoFactory\PhpProjectFactory
     */
    private $phpProjectFactory;

    public function __construct(FinderSanitizer $finderSanitizer, PhpProjectFactory $phpProjectFactory)
    {
        $this->finderSanitizer = $finderSanitizer;
        $this->phpProjectFactory = $phpProjectFactory;
    }

    /**
     * @return \App\Dto\Project[]
     */
    public function findProjects(): array
    {
        $map = function (SmartFileInfo $fileInfo): ?Project {
            return $this->phpProjectFactory->createFromFileInfo($fileInfo);
        };

        $filter = static function (?Project $project = null): bool {
            return $project instanceof Project;
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

        return $this->finderSanitizer->sanitize($finder);
    }
}
