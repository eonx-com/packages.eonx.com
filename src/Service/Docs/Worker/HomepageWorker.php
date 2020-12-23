<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsFilesystemInterface;

final class HomepageWorker extends AbstractDocsWorker
{
    /**
     * @var mixed[]
     */
    private const HOMEPAGE_CONFIG = [
        'heroImage' => 'https://39cszd96rb9jntgd3r2cirij-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/eonx-logo@1x.png',
        'tagLine' => 'EonX Packages documentation',
        'footer' => 'Made by EonX with ❤️',
    ];

    private DocsFilesystemInterface $filesystem;

    public function __construct(DocsFilesystemInterface $filesystem)
    {
        $this->filesystem = $filesystem;

        parent::__construct();
    }

    /**
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     */
    public function work(array $projects): void
    {
        $contents = '---' . \PHP_EOL;
        $contents .= 'home: true' . \PHP_EOL;

        foreach (self::HOMEPAGE_CONFIG as $name => $value) {
            $contents .= \sprintf('%s: %s' . \PHP_EOL, $name, $value);
        }

        if (\count($projects) > 0) {
            $contents .= 'features:' . \PHP_EOL;

            foreach ($projects as $project) {
                $contents .= \sprintf('- title: %s' . \PHP_EOL, $project->getName());
                $contents .= \sprintf('  details: %s' . \PHP_EOL, $project->getDescription());
            }
        }

        $contents .= '---' . \PHP_EOL;

        $this->filesystem->dumpFile('index.md', $contents);
    }
}
