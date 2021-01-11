<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Finder\Finder;
use Symplify\SmartFileSystem\Finder\FinderSanitizer;
use Symplify\SmartFileSystem\SmartFileInfo;

final class FetchProjectsLocallyCommand extends AbstractFetchProjectsCommand
{
    /**
     * @var string
     */
    protected static $defaultName = 'projects:fetch-locally';

    /**
     * @param mixed[] $config
     *
     * @throws \Symplify\SmartFileSystem\Exception\FileNotFoundException
     */
    protected function doFetchProjects(array $config, SymfonyStyle $style): void
    {
        foreach ($config['projects'] as $name => $path) {
            $cleanPath = (new SmartFileInfo($path))->getRealPath();
            $files = $this->getFilesToCopy($path);
            $filesCount = \count($files);

            $style->title(\sprintf('Copying %d files for project "%s"', $filesCount, $name));
            $style->progressStart($filesCount);

            foreach ($files as $file) {
                $filename = \sprintf(
                    '%s/%s%s/%s',
                    ProjectFinderInterface::PROJECTS_DIR,
                    $name,
                    \str_replace($cleanPath, '', $file->getPath()),
                    $file->getFilename()
                );

                $this->filesystem->dumpFile($filename, $file->getContents());
                $style->progressAdvance();
            }

            $style->progressFinish();
        }
    }

    protected function getConfigFilename(): string
    {
        return __DIR__ . '/../../docs_config_local.yaml';
    }

    /**
     * @return \Symplify\SmartFileSystem\SmartFileInfo[]
     */
    protected function getFilesToCopy(string $path): array
    {
        $finder = (new Finder())
            ->in([$path])
            ->exclude(['vendor'])
            ->files();

        return (new FinderSanitizer())->sanitize($finder);
    }
}
