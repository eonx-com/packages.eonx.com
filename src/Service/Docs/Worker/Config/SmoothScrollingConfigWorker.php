<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class SmoothScrollingConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $config['themeConfig']['smoothScroll'] = true;

        return $config;
    }
}
