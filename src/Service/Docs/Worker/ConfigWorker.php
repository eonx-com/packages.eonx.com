<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsConfigWorkerInterface;
use App\Service\Docs\Contract\DocsFilesystemInterface;
use EonX\EasyUtils\CollectorHelper;
use Symfony\Component\Yaml\Yaml;

final class ConfigWorker extends AbstractDocsWorker
{
    /**
     * @var mixed[]
     */
    private const DEFAULT_CONFIGS = [
        'title' => 'EonX Packages',
        'description' => 'EonX Packages documentation',
    ];

    private DocsFilesystemInterface $filesystem;
    
    /**
     * @var \App\Service\Docs\Contract\DocsConfigWorkerInterface[]
     */
    private array $workers;

    /**
     * @param iterable<mixed> $workers
     */
    public function __construct(DocsFilesystemInterface $filesystem, iterable $workers)
    {
        $this->filesystem = $filesystem;

        $this->workers = CollectorHelper::orderLowerPriorityFirst(
            CollectorHelper::filterByClass($workers, DocsConfigWorkerInterface::class)
        );

        parent::__construct();
    }

    /**
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     */
    public function work(array $projects): void
    {
        $config = self::DEFAULT_CONFIGS;

        foreach ($this->workers as $worker) {
            $config = $worker->work($config, $projects);
        }

        $this->filesystem->dumpFile('.vuepress/config.yml', Yaml::dump($config, \PHP_INT_MAX));
    }
}
