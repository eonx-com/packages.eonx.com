<?php
declare(strict_types=1);

namespace App\Service\Docs;

use App\Service\Docs\Contract\DocsFilesystemInterface;
use Symfony\Component\Filesystem\Filesystem;

final class DocsFilesystem implements DocsFilesystemInterface
{
    private Filesystem $filesystem;

    private string $folder;

    public function __construct(?string $folder = null)
    {
        $this->filesystem = new Filesystem();
        $this->folder = $folder ?? self::DEFAULT_DOCS_FOLDER;
    }

    public function dumpFile(string $filename, string $contents): void
    {
        $this->filesystem->dumpFile(\sprintf('%s/%s', $this->folder, $filename), $contents);
    }
}
