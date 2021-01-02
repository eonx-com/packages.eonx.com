<?php
declare(strict_types=1);

namespace App\Service\Docs\Worker;

use App\Service\Docs\Contract\DocsFilesystemInterface;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class CopyPublicAssetsWorker extends AbstractDocsWorker
{
    /**
     * @var string
     */
    private const PATH_FROM = __DIR__ . '/../../../../public/.vuepress';

    private DocsFilesystemInterface $filesystem;

    public function __construct(DocsFilesystemInterface $filesystem)
    {
        $this->filesystem = $filesystem;

        parent::__construct();
    }

    /**
     * @param \App\Service\Project\Contract\ProjectInterface[] $projects
     *
     * @throws \Symplify\SmartFileSystem\Exception\FileNotFoundException
     */
    public function work(array $projects): void
    {
        $cleanPathFrom = $this->getCleanPath(self::PATH_FROM);

        foreach ($this->getFilesToMove() as $file) {
            $filename = \sprintf(
                '.vuepress%s/%s',
                \str_replace($cleanPathFrom, '', $file->getPath()),
                $file->getFilename()
            );

            $this->filesystem->dumpFile($filename, $file->getContents());
        }
    }

    /**
     * @throws \Symplify\SmartFileSystem\Exception\FileNotFoundException
     */
    private function getCleanPath(string $path): string
    {
        return (new SmartFileInfo($path))->getRealPath();
    }

    /**
     * @return \Symplify\SmartFileSystem\SmartFileInfo[]
     */
    private function getFilesToMove(): array
    {
        $finder = (new Finder())
            ->in([self::PATH_FROM])
            ->files();

        return (new FinderSanitizer())->sanitize($finder);
    }
}
