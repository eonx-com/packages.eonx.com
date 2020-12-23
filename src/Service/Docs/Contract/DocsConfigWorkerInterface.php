<?php
declare(strict_types=1);

namespace App\Service\Docs\Contract;

use EonX\EasyUtils\Interfaces\HasPriorityInterface;

interface DocsConfigWorkerInterface extends HasPriorityInterface
{
    /**
     * @param mixed[] $config
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @return mixed[]
     */
    public function work(array $config, array $projects): array;
}
