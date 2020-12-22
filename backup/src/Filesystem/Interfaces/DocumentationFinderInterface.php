<?php
declare(strict_types=1);

namespace App\Filesystem\Interfaces;

use App\Dto\Project;

interface DocumentationFinderInterface
{
    /**
     * @return \App\Dto\Documentation[]
     */
    public function findDocumentations(Project $project): array;
}
