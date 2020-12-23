<?php
declare(strict_types=1);

namespace App\Service\Docs\Contract;

interface DocsFilesystemInterface
{
    /**
     * @var string
     */
    public const DEFAULT_DOCS_FOLDER = __DIR__ . '/../../../../output';

    public function dumpFile(string $filename, string $contents): void;
}
