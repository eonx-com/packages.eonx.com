<?php
declare(strict_types=1);

namespace App\ControllerDataProvider;


use App\Controller\ProjectDocumentationController;
use App\Dto\Project;
use App\Repository\Interfaces\ProjectRepositoryInterface;

final class ProjectDocumentationControllerDataProvider extends AbstractControllerWithDataProvider
{
    /**
     * @var \App\Repository\Interfaces\ProjectRepositoryInterface
     */
    private $projectRepository;

    public function __construct(ProjectRepositoryInterface $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    /**
     * @return string[]
     */
    public function getArguments(): array
    {
        $map = static function (Project $project): string {
            return $project->getSlug();
        };

        return \array_map($map, $this->projectRepository->all());
    }

    public function getControllerClass(): string
    {
        return ProjectDocumentationController::class;
    }
}
