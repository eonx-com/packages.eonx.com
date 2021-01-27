<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

final class FaviconConfigWorker extends AbstractDocsConfigWorker
{
    /**
     * @var string[]
     */
    private const ICONS = [
        '32x32' => 'https://39cszd96rb9jntgd3r2cirij-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/eonx-512-70x70.png',
        '192x192' => 'https://39cszd96rb9jntgd3r2cirij-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/eonx-512.png',
    ];

    /**
     * @param mixed[] $config
     * @param mixed[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array
    {
        $head = $config['head'] ?? [];

        foreach (self::ICONS as $sizes => $href) {
            $head[] = [
                'link',
                [
                    'rel' => 'icon',
                    'href' => $href,
                    'sizes' => $sizes,
                ],
            ];
        }

        $config['head'] = $head;

        return $config;
    }
}
