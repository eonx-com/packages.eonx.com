<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker\Config;

use App\Service\Docs\Contract\DocsConfigWorkerInterface;
use EonX\EasyUtils\Traits\HasPriorityTrait;

abstract class AbstractDocsConfigWorker implements DocsConfigWorkerInterface
{
    use HasPriorityTrait;

    public function __construct(?int $priority = null)
    {
        if ($priority !== null) {
            $this->priority = $priority;
        }
    }
}
