<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsFilesystemInterface;
use App\Service\Project\Contract\PageFinderInterface;

final class FolderStructureWorker extends AbstractDocsWorker
{
    private DocsFilesystemInterface $filesystem;

    private PageFinderInterface $pageFinder;

    public function __construct(DocsFilesystemInterface $filesystem, PageFinderInterface $pageFinder)
    {
        $this->filesystem = $filesystem;
        $this->pageFinder = $pageFinder;

        parent::__construct();
    }

    /**
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     */
    public function work(array $projects): void
    {
        foreach ($projects as $project) {
            $pages = $this->pageFinder->findPagesForProject($project);

            foreach ($pages as $page) {
                $this->filesystem->dumpFile(
                    \sprintf('packages/%s/%s', $project->getSlug(), $page->getFilenameInProject()),
                    $page->getMarkdown()
                );
            }
        }
    }
}
