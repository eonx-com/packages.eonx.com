<?php
declare(strict_types=1);

namespace App\Service\Project\Finder;

use App\Service\Project\Contract\PageFactoryInterface;
use App\Service\Project\Contract\PageFinderInterface;
use App\Service\Project\Contract\PageInterface;
use App\Service\Project\Contract\ProjectInterface;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PageFinder implements PageFinderInterface
{
    /**
     * @var \App\Service\Project\Contract\PageInterface[][]
     */
    private array $cache = [];

    private PageFactoryInterface $pageFactory;

    public function __construct(PageFactoryInterface $pageFactory)
    {
        $this->pageFactory = $pageFactory;
    }

    /**
     * @return \App\Service\Project\Contract\PageInterface[]
     */
    public function findPagesForProject(ProjectInterface $project): array
    {
        $projectHash = \spl_object_hash($project);

        if (isset($this->cache[$projectHash])) {
            return $this->cache[$projectHash];
        }

        $map = function (SmartFileInfo $fileInfo) use ($project): ?PageInterface {
            return $this->pageFactory->createFromFileInfo($fileInfo, $project);
        };

        $filter = static function (?PageInterface $project = null): bool {
            return $project instanceof PageInterface;
        };

        $pages = \array_filter(\array_map($map, $this->getMarkdownFilesForProject($project)), $filter);

        \usort($pages, static function (PageInterface $first, PageInterface $second): int {
            return $first->getWeight() <=> $second->getWeight();
        });

        return $this->cache[$projectHash] = $pages;
    }

    /**
     * @return \Symplify\SmartFileSystem\SmartFileInfo[]
     */
    private function getMarkdownFilesForProject(ProjectInterface $project): array
    {
        $finder = (new Finder())
            ->in([$project->getLocalPath()])
            ->name($project->getFinderPattern() ?? '*.md')
            ->sortByName();

        if ($project->getFinderDepth() !== null) {
            $finder->depth($project->getFinderDepth());
        }

        return (new FinderSanitizer())->sanitize($finder);
    }
}
