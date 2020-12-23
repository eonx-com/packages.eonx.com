<?php
declare(strict_types=1);

namespace App\Service\Project\Dto;

use App\Service\Project\Contract\PageInterface;

final class Page implements PageInterface
{
    private string $extension;

    private string $filename;

    private string $markDown;

    private string $pathInProject;

    private ?string $title;

    private int $weight;

    public function __construct(
        string $filename,
        string $extension,
        string $markDown,
        string $pathInProject,
        ?int $weight = null,
        ?string $title = null
    ) {
        $this->filename = $filename;
        $this->extension = $extension;
        $this->markDown = $markDown;
        $this->pathInProject = $pathInProject;
        $this->weight = $weight ?? self::DEFAULT_WEIGHT;
        $this->title = $title;
    }

    public function getFilename(): string
    {
        return $this->filename;
    }

    public function getFilenameInProject(): string
    {
        $filename = \sprintf('%s/%s', $this->getPathInProject(), $this->getFilename());

        return \str_replace('docs/', '', $filename);
    }

    public function getFilenameInProjectWithoutExtension(): string
    {
        return \str_replace(\sprintf('.%s', $this->extension), '', $this->getFilenameInProject());
    }

    public function getMarkdown(): string
    {
        return $this->markDown;
    }

    public function getPathInProject(): string
    {
        return $this->pathInProject;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function getWeight(): int
    {
        return $this->weight;
    }
}
