<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class BootstrapConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @param mixed[] $config
     * @param mixed[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $head = $config['head'] ?? [];

        $head[] = [
            'meta',
            [
                'name' => 'viewport',
                'content' => 'width=device-width, initial-scale=1',
            ],
        ];

        $head[] = [
            'link',
            [
                'href' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css',
                'rel' => 'stylesheet',
                'integrity' => 'sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl',
                'crossorigin' => 'anonymous',
            ],
        ];

        $head[] = [
            'script',
            [
                'src' => 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js',
                'integrity' => 'sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0',
                'crossorigin' => 'anonymous',
            ],
        ];

        $head[] = [
            'script',
            [
                'src' => 'https://kit.fontawesome.com/955de18180.js',
                'crossorigin' => 'anonymous',
            ],
        ];

        $config['head'] = $head;

        return $config;
    }
}
