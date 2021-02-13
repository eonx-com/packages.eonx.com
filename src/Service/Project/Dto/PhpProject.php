<?php
declare(strict_types=1);

namespace App\Service\Project\Dto;

use App\Service\Project\Contract\ProjectInterface;

final class PhpProject implements ProjectInterface
{
    private string $description;

    private ?string $finderDepth;

    private ?string $finderPattern;

    private string $githubUrl;

    private string $localPath;

    private string $name;

    public function __construct(
        string $name,
        string $description,
        string $localPath,
        string $githubUrl,
        ?string $finderDepth = null,
        ?string $finderPattern = null
    ) {
        $this->name = $name;
        $this->description = $description;
        $this->localPath = $localPath;
        $this->githubUrl = $githubUrl;
        $this->finderDepth = $finderDepth;
        $this->finderPattern = $finderPattern;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getDocsPath(?string $path = null): string
    {
        return \sprintf('/packages/%s%s', $this->getSlug(), $path);
    }

    public function getFinderDepth(): ?string
    {
        return $this->finderDepth;
    }

    public function getFinderPattern(): ?string
    {
        return $this->finderPattern;
    }

    public function getGithubUrl(): string
    {
        return $this->githubUrl;
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

    /**
     * @return mixed[]
     */
    public function toArray(): array
    {
        return [
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'docsPath' => $this->getDocsPath(),
            'slug' => $this->getSlug(),
            'githubUrl' => $this->getGithubUrl(),
        ];
    }
}
