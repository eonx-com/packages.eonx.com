<?php
declare(strict_types=1);

namespace App\Command;

use App\Filesystem\Interfaces\ProjectFinderInterface;
use App\Services\Git\GitManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Yaml\Yaml;

final class FetchProjectsCommand extends Command
{
    /**
     * @var \Symfony\Component\Filesystem\Filesystem
     */
    private $filesystem;

    /**
     * @var \App\Services\Git\GitManagerInterface
     */
    private $gitManager;

    public function __construct(Filesystem $filesystem, GitManagerInterface $gitManager)
    {
        $this->filesystem = $filesystem;
        $this->gitManager = $gitManager;

        parent::__construct(null);
    }

    protected function configure(): void
    {
        $this
            ->setName('projects:fetch')
            ->setDescription('Fetch projects listed in docs_config.yaml')
            ->addOption('show-config', null, InputOption::VALUE_NONE);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln(''); // Blank line at the start not to look squishy

        $style = new SymfonyStyle($input, $output);
        $config = Yaml::parseFile(__DIR__ . '/../../docs_config.yaml');

        if ($input->hasOption('show-config')) {
            $this->displayConfig($config, $style);
        }

        $this->createProjectsDirIfDoesntExist($style);

        foreach ($config['projects'] as $name => $remote) {
            $this->cloneProject($name, $remote, $style);
        }

        return 0;
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

    private function createProjectsDirIfDoesntExist(SymfonyStyle $style): void
    {
        if ($this->filesystem->exists(ProjectFinderInterface::PROJECTS_DIR)) {
            return;
        }

        $style->note(\sprintf(
            'Directory "%s" does not exist, creating it...',
            ProjectFinderInterface::PROJECTS_DIR
        ));

        $this->filesystem->mkdir(ProjectFinderInterface::PROJECTS_DIR);
    }

    private function displayConfig(array $config, SymfonyStyle $style): void
    {
        $rows = [];

        foreach ($config['projects'] ?? [] as $name => $repo) {
            $rows[] = [$name, $repo];
        }

        $style->table(['Project Name', 'Repository'], $rows);
    }
}
