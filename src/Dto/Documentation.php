<?php
declare(strict_types=1);

namespace App\Dto;

final class Documentation
{
    /**
     * @var string
     */
    private $githubEditUrl;

    /**
     * @var string
     */
    private $htmlContent;

    /**
     * @var string
     */
    private $localPath;

    /**
     * @var string
     */
    private $name;

    /**
     * @var \App\Dto\Project
     */
    private $project;

    /**
     * @var string
     */
    private $slug;

    /**
     * @var string
     */
    private $title;

    /**
     * @var int
     */
    private $weight;

    public function __construct(
        string $name,
        string $slug,
        string $localPath,
        string $htmlContent,
        string $githubEditUrl,
        Project $project,
        ?string $title = null,
        ?int $weight = null
    ) {
        $this->name = $name;
        $this->slug = $slug;
        $this->localPath = $localPath;
        $this->htmlContent = $htmlContent;
        $this->githubEditUrl = $githubEditUrl;
        $this->project = $project;
        $this->title = $title ?? $name;
        $this->weight = $weight ?? 0;
    }

    public function getGithubEditUrl(): string
    {
        return $this->githubEditUrl;
    }

    public function getHtmlContent(): string
    {
        return $this->htmlContent;
    }

    public function getLocalPath(): string
    {
        return $this->localPath;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getProject(): Project
    {
        return $this->project;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getWeight(): int
    {
        return $this->weight;
    }
}
