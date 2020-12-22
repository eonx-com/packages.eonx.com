<?php
declare(strict_types=1);

namespace App\Repository\Interfaces;

use App\Dto\Project;

interface ProjectRepositoryInterface
{
    /**
     * @return \App\Dto\Project[]
     */
    public function all(): array;

    public function findOneBySlug(string $slug): ?Project;
}
