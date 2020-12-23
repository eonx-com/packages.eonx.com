<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsWorkerInterface;
use EonX\EasyUtils\Traits\HasPriorityTrait;

abstract class AbstractDocsWorker implements DocsWorkerInterface
{
    use HasPriorityTrait;

    public function __construct(?int $priority = null)
    {
        if ($priority !== null) {
            $this->priority = $priority;
        }
    }
}
