<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Docs\Worker\FolderStructureWorker;
use App\Service\Project\Contract\ProjectFinderInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class GenerateDocsFolderStructureCommand extends Command
{
    /**
     * @var string
     */
    protected static $defaultName = 'docs:generate-folder-structure';

    private FolderStructureWorker $folderStructureWorker;

    private ProjectFinderInterface $projectFinder;

    public function __construct(
        FolderStructureWorker $folderStructureWorker,
        ProjectFinderInterface $projectFinder
    ) {
        $this->folderStructureWorker = $folderStructureWorker;
        $this->projectFinder = $projectFinder;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->folderStructureWorker->work($this->projectFinder->findAllProjects());

        return self::SUCCESS;
    }
}
