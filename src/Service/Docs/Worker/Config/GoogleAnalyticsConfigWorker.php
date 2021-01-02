<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class GoogleAnalyticsConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $head = $config['head'] ?? [];

        $head[] = [
            'script',
            [
                'async' => true,
                'src' => 'https://www.googletagmanager.com/gtag/js?id=UA-147626313-4',
            ],
        ];

        $head[] = [
            'script',
            [],
            $this->getGaScriptContent(),
        ];

        $config['head'] = $head;

        return $config;
    }

    private function getGaScriptContent(): string
    {
        return \implode(\PHP_EOL, [
            'window.dataLayer = window.dataLayer || [];',
            'function gtag(){dataLayer.push(arguments);}',
            'gtag("js", new Date());',
            'gtag("config", "UA-147626313-4");',
        ]);
    }
}
