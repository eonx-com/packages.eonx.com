<?php
declare(strict_types=1);

namespace App\Command;

use App\Filesystem\Interfaces\ProjectFinderInterface;
use App\Services\Git\GitManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Yaml\Yaml;
use function sprintf;

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
            ->setDescription('Fetch projects listed in docs_config.yaml');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $config = Yaml::parseFile(__DIR__ . '/../../docs_config.yaml');

        if ($this->filesystem->exists(ProjectFinderInterface::PROJECTS_DIR) === false) {
            $this->filesystem->mkdir(ProjectFinderInterface::PROJECTS_DIR);
        }

        foreach ($config['projects'] as $name => $remote) {
            $output->writeln(sprintf('Cloning %s in %s/%s', $remote, ProjectFinderInterface::PROJECTS_DIR, $name));

            $this->gitManager->cloneRemoteToPath($remote, ProjectFinderInterface::PROJECTS_DIR, $name);
        }

        return 0;
    }
}
