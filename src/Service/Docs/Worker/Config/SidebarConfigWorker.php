<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

use App\Service\Project\Contract\PageFinderInterface;
use App\Service\Project\Contract\PageInterface;
use App\Service\Project\Contract\ProjectInterface;

final class SidebarConfigWorker extends AbstractDocsConfigWorker
{
    private PageFinderInterface $pageFinder;

    public function __construct(PageFinderInterface $pageFinder)
    {
        $this->pageFinder = $pageFinder;

        parent::__construct();
    }

    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $config['themeConfig']['sidebar'] = $this->getSidebar($projects);

        return $config;
    }

    private function getChildrenLink(ProjectInterface $project, PageInterface $page): array
    {
        $link = \sprintf('packages/%s%s', $project->getSlug(), $page->getFilenameInProjectWithoutExtension());

        $link = $link !== \sprintf('packages/%s/readme', $project->getSlug())
            ? $link
            : \sprintf('packages/%s/', $project->getSlug());

        return [$link, $page->getTitle()];
    }

    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    private function getSidebar(array $projects): array
    {
        $sidebar = [];

        foreach ($projects as $project) {
            $pages = $this->pageFinder->findPagesForProject($project);
            $collapsable = \count($pages) > 0;
            $element = [
                'title' => $project->getSlug(),
                'collapsable' => false,
            ];

            if ($collapsable) {
                $element['children'] = \array_map(function (PageInterface $page) use ($project): array {
                    return $this->getChildrenLink($project, $page);
                }, $pages);
            }

            $sidebar[] = $element;
        }

        // Default sidebar for now
        return ['/' => $sidebar];
    }
}
