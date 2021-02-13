<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class NavbarConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $projectItems = [];

        foreach ($projects as $project) {
            $projectItems[] = [
                'text' => $project->getSlug(),
                'link' => $project->getDocsPath('/'),
            ];
        }

        $config['themeConfig']['nav'] = [
            [
                'text' => 'Packages',
                'items' => $projectItems,
            ],
        ];

        $config['themeConfig']['logo'] = '/eonx_logo.png';

        return $config;
    }
}
