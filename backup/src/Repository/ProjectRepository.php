<?php
declare(strict_types=1);

namespace App\Repository;

use App\Dto\Project;
use App\Filesystem\Interfaces\ProjectFinderInterface;
use App\Repository\Interfaces\ProjectRepositoryInterface;

final class ProjectRepository implements ProjectRepositoryInterface
{
    /**
     * @var \App\Dto\Project[]
     */
    private $cache;

    /**
     * @var \App\Filesystem\Interfaces\ProjectFinderInterface
     */
    private $projectFinder;

    public function __construct(ProjectFinderInterface $projectFinder)
    {
        $this->projectFinder = $projectFinder;
    }

    /**
     * @return \App\Dto\Project[]
     */
    public function all(): array
    {
        if ($this->cache !== null) {
            return $this->cache;
        }

        return $this->cache = $this->projectFinder->findProjects();
    }

    public function findOneBySlug(string $slug): ?Project
    {
        foreach ($this->all() as $project) {
            if ($project->getSlug() === $slug) {
                return $project;
            }
        }

        return null;
    }
}
