<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class SearchConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $config['themeConfig']['algolia'] = [
            'apiKey' => 'cf912c51e4a0861a4fc40d6a2498f6de',
            'indexName' => 'eonx',
        ];

        $config['themeConfig']['searchMaxSuggestions'] = 15;
        $config['themeConfig']['searchPlaceholder'] = 'Search...';

        return $config;
    }
}
