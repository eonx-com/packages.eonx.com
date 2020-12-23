<?php
declare(strict_types=1);

namespace App\Service\Project\Contract;

interface ProjectFinderInterface
{
    /**
     * @var string
     */
    public const PROJECTS_DIR = __DIR__ . '/../../../../projects';

    /**
     * @return \App\Service\Project\Contract\ProjectInterface[]
     */
    public function findAllProjects(): array;
}
