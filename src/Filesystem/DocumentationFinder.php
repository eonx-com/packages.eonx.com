<?php
declare(strict_types=1);

namespace App\Filesystem;

use App\Dto\Documentation;
use App\Dto\Project;
use App\DtoFactory\Interfaces\DocumentationFactoryInterface;
use App\Filesystem\Interfaces\DocumentationFinderInterface;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class DocumentationFinder implements DocumentationFinderInterface
{
    /**
     * @var \App\DtoFactory\Interfaces\DocumentationFactoryInterface
     */
    private $documentationFactory;

    /**
     * @var \Symplify\SmartFileSystem\Finder\FinderSanitizer
     */
    private $finderSanitizer;

    public function __construct(FinderSanitizer $finderSanitizer, DocumentationFactoryInterface $documentationFactory)
    {
        $this->finderSanitizer = $finderSanitizer;
        $this->documentationFactory = $documentationFactory;
    }

    /**
     * @return \App\Dto\Documentation[]
     */
    public function findDocumentations(Project $project): array
    {
        $filter = static function (?Documentation $documentation = null): bool {
            return $documentation !== null;
        };

        $map = function (SmartFileInfo $fileInfo) use ($project): ?Documentation {
            return $this->documentationFactory->createFromFileInfo($project, $fileInfo);
        };

        $docs = \array_filter(\array_map($map, $this->getMarkdownFiles($project)), $filter);

        \usort($docs, static function (Documentation $first, Documentation $second): int {
            return $first->getWeight() <=> $second->getWeight();
        });

        return $docs;
    }

    /**
     * @param string[] $paths
     *
     * @return \Symplify\SmartFileSystem\SmartFileInfo[]
     */
    private function getMarkdownFiles(Project $project): array
    {
        $finder = (new Finder())
            ->in([$project->getLocalPath()])
            ->name($project->getFinderPattern() ?? '*.md')
            ->sortByName();

        if ($project->getFinderDepth() !== null) {
            $finder->depth($project->getFinderDepth());
        }

        return $this->finderSanitizer->sanitize($finder);
    }
}
