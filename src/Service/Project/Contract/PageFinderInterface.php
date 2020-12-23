<?php
declare(strict_types=1);

namespace App\Service\Project\Contract;

interface PageFinderInterface
{
    /**
     * @return \App\Service\Project\Contract\PageInterface[]
     */
    public function findPagesForProject(ProjectInterface $project): array;
}
