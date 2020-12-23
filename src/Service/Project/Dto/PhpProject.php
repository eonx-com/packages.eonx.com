<?php
declare(strict_types=1);

namespace App\Service\Project\Dto;

use App\Service\Project\Contract\ProjectInterface;

final class PhpProject implements ProjectInterface
{
    private string $description;

    private ?string $finderDepth;

    private ?string $finderPattern;

    private string $localPath;

    private string $name;

    public function __construct(
        string $name,
        string $description,
        string $localPath,
        ?string $finderDepth = null,
        ?string $finderPattern = null
    ) {
        $this->name = $name;
        $this->description = $description;
        $this->localPath = $localPath;
        $this->finderDepth = $finderDepth;
        $this->finderPattern = $finderPattern;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getFinderDepth(): ?string
    {
        return $this->finderDepth;
    }

    public function getFinderPattern(): ?string
    {
        return $this->finderPattern;
    }

    public function getLocalPath(): string
    {
        return $this->localPath;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getSlug(): string
    {
        return \str_replace('eonx-com/', '', $this->getName());
    }
}
