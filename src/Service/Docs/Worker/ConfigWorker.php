<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsConfigWorkerInterface;
use App\Service\Docs\Contract\DocsFilesystemInterface;
use EonX\EasyUtils\CollectorHelper;
use Psr\Log\LoggerInterface;
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

    private LoggerInterface $logger;

    /**
     * @var \App\Service\Docs\Contract\DocsConfigWorkerInterface[]
     */
    private array $workers;

    /**
     * @param iterable<mixed> $workers
     */
    public function __construct(DocsFilesystemInterface $filesystem, LoggerInterface $logger,  iterable $workers)
    {
        $this->filesystem = $filesystem;
        $this->logger = $logger;

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
            $this->logger->info(\sprintf('[Config] Running %s...', \get_class($worker)));

            $config = $worker->work($config, $projects);
        }

        $this->filesystem->dumpFile('.vuepress/config.yml', Yaml::dump($config, \PHP_INT_MAX));
    }
}
