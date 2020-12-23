<?php
declare(strict_types=1);

namespace App\Service\Docs\Contract;

use EonX\EasyUtils\Interfaces\HasPriorityInterface;

interface DocsWorkerInterface extends HasPriorityInterface
{
    /**
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     */
    public function work(array $projects): void;
}
