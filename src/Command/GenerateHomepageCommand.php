<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Docs\Worker\HomepageWorker;
use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class GenerateHomepageCommand extends Command
{
    /**
     * @var string
     */
    protected static $defaultName = 'docs:generate-homepage';

    private HomepageWorker $homepageWorker;

    private ProjectFinderInterface $projectFinder;

    public function __construct(HomepageWorker $homepageWorker, ProjectFinderInterface $projectFinder)
    {
        $this->homepageWorker = $homepageWorker;
        $this->projectFinder = $projectFinder;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->homepageWorker->work($this->projectFinder->findAllProjects());

        return self::SUCCESS;
    }
}
