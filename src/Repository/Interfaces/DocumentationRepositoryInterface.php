<?php
declare(strict_types=1);

namespace App\Repository\Interfaces;

use App\Dto\Documentation;
use App\Dto\Project;

interface DocumentationRepositoryInterface
{
    /**
     * @return \App\Dto\Documentation[]
     */
    public function all(): array;

    /**
     * @return \App\Dto\Documentation[]
     */
    public function allForProject(Project $project): array;

    public function findOneForSlug(string $slug): ?Documentation;
}
