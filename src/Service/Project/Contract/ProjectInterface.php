<?php
declare(strict_types=1);

namespace App\Service\Project\Contract;

interface ProjectInterface
{
    public function getDescription(): string;

    public function getFinderDepth(): ?string;

    public function getFinderPattern(): ?string;

    public function getLocalPath(): string;

    public function getName(): string;

    public function getSlug(): string;
}
