<?php
declare(strict_types=1);

namespace App\Service\Project\Contract;

interface PageInterface
{
    /**
     * @var int
     */
    public const DEFAULT_WEIGHT = 0;

    public function getFilename(): string;

    public function getFilenameInProject(): string;

    public function getFilenameInProjectWithoutExtension(): string;

    public function getMarkdown(): string;

    public function getPathInProject(): string;

    public function getTitle(): ?string;

    public function getWeight(): int;
}
