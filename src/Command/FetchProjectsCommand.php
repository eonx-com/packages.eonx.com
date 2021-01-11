<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Git\GitManagerInterface;
use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Filesystem\Filesystem;

final class FetchProjectsCommand extends AbstractFetchProjectsCommand
{
    private GitManagerInterface $gitManager;

    public function __construct(Filesystem $filesystem, GitManagerInterface $gitManager)
    {
        $this->gitManager = $gitManager;

        parent::__construct($filesystem);
    }

    protected function configure(): void
    {
        $this
            ->setName('projects:fetch')
            ->setDescription('Fetch projects listed in docs_config.yaml')
            ->addOption('show-config', null, InputOption::VALUE_NONE);
    }

    /**
     * @param mixed[] $config
     */
    protected function doFetchProjects(array $config, SymfonyStyle $style): void
    {
        foreach ($config['projects'] as $name => $remote) {
            $this->cloneProject($name, $remote, $style);
        }
    }

    protected function getConfigFilename(): string
    {
        return __DIR__ . '/../../docs_config.yaml';
    }

    private function cloneProject(string $name, string $remote, SymfonyStyle $style): void
    {
        $remote = $this->gitManager->completeRemoteRepositoryWithGithubToken($remote);

        $this->gitManager->cloneRemoteToPath($remote, ProjectFinderInterface::PROJECTS_DIR, $name);

        $message = \sprintf(
            '- Cloning <info>%s</info> (<comment>%s</comment>): %s/%s',
            $name,
            $remote,
            ProjectFinderInterface::PROJECTS_DIR,
            $name
        );

        $style->writeln($message);
    }
}
