<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Yaml\Yaml;

abstract class AbstractFetchProjectsCommand extends Command
{
    protected Filesystem $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        $this->filesystem = $filesystem;

        parent::__construct();
    }

    /**
     * @param mixed[] $config
     */
    abstract protected function doFetchProjects(array $config, SymfonyStyle $style): void;

    abstract protected function getConfigFilename(): string;

    protected function createProjectsDirIfDoesntExist(SymfonyStyle $style): void
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

    /**
     * @param mixed[] $config
     */
    protected function displayConfig(array $config, SymfonyStyle $style): void
    {
        $rows = [];

        foreach ($config['projects'] ?? [] as $name => $repo) {
            $rows[] = [$name, $repo];
        }

        $style->table(['Project Name', 'Repository'], $rows);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln(''); // Blank line at the start not to look squishy

        $style = new SymfonyStyle($input, $output);
        $config = Yaml::parseFile($this->getConfigFilename());

        if ($input->hasOption('show-config') && (bool)$input->getOption('show-config') === true) {
            $this->displayConfig($config, $style);
        }

        $this->createProjectsDirIfDoesntExist($style);
        $this->doFetchProjects($config, $style);

        return self::SUCCESS;
    }
}
