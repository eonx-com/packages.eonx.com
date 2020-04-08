<?php
declare(strict_types=1);

namespace App\Filesystem\Interfaces;

interface ProjectFinderInterface
{
    /**
     * @var string
     */
    public const PROJECTS_DIR = __DIR__ . '/../../../projects';

    /**
     * @return \App\Dto\Project[]
     */
    public function findProjects(): array;
}
