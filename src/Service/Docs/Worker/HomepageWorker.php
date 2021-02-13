<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsFilesystemInterface;

final class HomepageWorker extends AbstractDocsWorker
{
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
        $contents = [
            '---',
            'home: true',
            '---',
            '<div class="container">',
            '<div class="row">',
        ];

        foreach ($projects as $project) {
            $contents[] = \sprintf(
                "<ProjectCard :project='%s'></ProjectCard>",
                \json_encode($project->toArray())
            );
        }

        $contents[] = '</div>';
        $contents[] = '</div>';

        $this->filesystem->dumpFile('index.md', \implode(\PHP_EOL, $contents));
    }
}
