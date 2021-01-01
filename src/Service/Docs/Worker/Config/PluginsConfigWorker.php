<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class PluginsConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $config['plugins'] = [
            '@vuepress/back-to-top' => [],
            '@vuepress/nprogress' => [],
        ];

        return $config;
    }
}
