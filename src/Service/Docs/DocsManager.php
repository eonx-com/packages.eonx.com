<?php
declare(strict_types=1);

namespace App\Service\Docs;

use App\Service\Docs\Contract\DocsManagerInterface;
use App\Service\Docs\Contract\DocsWorkerInterface;
use App\Service\Project\Contract\ProjectFinderInterface;
use EonX\EasyUtils\CollectorHelper;
use Psr\Log\LoggerInterface;

final class DocsManager implements DocsManagerInterface
{
    private LoggerInterface $logger;

    private ProjectFinderInterface $projectFinder;

    /**
     * @var \App\Service\Docs\Contract\DocsWorkerInterface[]
     */
    private iterable $workers;

    /**
     * @param iterable<mixed> $workers
     */
    public function __construct(LoggerInterface $logger, ProjectFinderInterface $projectFinder, iterable $workers)
    {
        $this->logger = $logger;
        $this->projectFinder = $projectFinder;

        $this->workers = CollectorHelper::orderLowerPriorityFirst(
            CollectorHelper::filterByClass($workers, DocsWorkerInterface::class)
        );
    }

    public function generateDocs(): void
    {
        $projects = $this->projectFinder->findAllProjects();

        foreach ($this->workers as $worker) {
            $this->logger->info(\sprintf('Running %s', \get_class($worker)));

            $worker->work($projects);
        }
    }
}
