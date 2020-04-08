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
            ->setDescription('Fetch projects listed in docs_config.yaml')
            ->addOption('show-config', null, InputOption::VALUE_OPTIONAL | InputOption::VALUE_NONE);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $style = new SymfonyStyle($input, $output);

        $config = Yaml::parseFile(__DIR__ . '/../../docs_config.yaml');

        if ($input->hasOption('show-config')) {
            $output->writeln(\print_r($config, true));
        }

        if ($this->filesystem->exists(ProjectFinderInterface::PROJECTS_DIR) === false) {
            $style->comment(\sprintf(
                'Directory "%s" does not exist, creating it...',
                ProjectFinderInterface::PROJECTS_DIR
            ));

            $this->filesystem->mkdir(ProjectFinderInterface::PROJECTS_DIR);
        }

        foreach ($config['projects'] as $name => $remote) {
            $remote = $this->gitManager->completeRemoteRepositoryWithGithubToken($remote);

            $output->writeln(sprintf('Cloning %s in %s/%s', $remote, ProjectFinderInterface::PROJECTS_DIR, $name));
            $output->writeln($this->gitManager->cloneRemoteToPath(
                $remote,
                ProjectFinderInterface::PROJECTS_DIR,
                $name
            ));
        }

        return 0;
    }
}
