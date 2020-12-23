<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Docs\Worker\ConfigWorker;
use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class GenerateDocsConfigCommand extends Command
{
    /**
     * @var string
     */
    protected static $defaultName = 'docs:generate-config';

    private ConfigWorker $configWorker;

    private ProjectFinderInterface $projectFinder;

    public function __construct(ConfigWorker $configWorker, ProjectFinderInterface $projectFinder)
    {
        $this->configWorker = $configWorker;
        $this->projectFinder = $projectFinder;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->configWorker->work($this->projectFinder->findAllProjects());

        return self::SUCCESS;
    }
}
