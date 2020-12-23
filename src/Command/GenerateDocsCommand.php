<?php
declare(strict_types=1);

namespace App\Command;

use App\Service\Docs\Contract\DocsManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class GenerateDocsCommand extends Command
{
    /**
     * @var string
     */
    protected static $defaultName = 'docs:generate';

    private DocsManagerInterface $docsManager;

    public function __construct(DocsManagerInterface $docsManager)
    {
        $this->docsManager = $docsManager;

        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->docsManager->generateDocs();

        return self::SUCCESS;
    }
}
