<?php
declare(strict_types=1);

namespace App\Repository;

use App\Dto\Documentation;
use App\Dto\Project;
use App\Filesystem\Interfaces\DocumentationFinderInterface;
use App\Repository\Interfaces\DocumentationRepositoryInterface;
use App\Repository\Interfaces\ProjectRepositoryInterface;

final class DocumentationRepository implements DocumentationRepositoryInterface
{
    /**
     * @var \App\Dto\Documentation[]
     */
    private $cache;

    /**
     * @var \App\Filesystem\Interfaces\DocumentationFinderInterface
     */
    private $documentationFinder;

    /**
     * @var \App\Repository\Interfaces\ProjectRepositoryInterface
     */
    private $projectRepository;

    public function __construct(
        DocumentationFinderInterface $documentationFinder,
        ProjectRepositoryInterface $projectRepository
    ) {
        $this->documentationFinder = $documentationFinder;
        $this->projectRepository = $projectRepository;
    }

    /**
     * @return \App\Dto\Documentation[]
     */
    public function all(): array
    {
        if ($this->cache !== null) {
            return $this->cache;
        }

        $docs = [];

        foreach ($this->projectRepository->all() as $project) {
            foreach ($this->allForProject($project) as $documentation) {
                $docs[] = $documentation;
            }
        }

        return $this->cache = $docs;
    }

    /**
     * @return \App\Dto\Documentation[]
     */
    public function allForProject(Project $project): array
    {
        return $this->documentationFinder->findDocumentations($project);
    }

    public function findOneForSlug(string $slug): ?Documentation
    {
        foreach ($this->projectRepository->all() as $project) {
            foreach ($this->allForProject($project) as $documentation) {
                if ($documentation->getSlug() === $slug) {
                    return $documentation;
                }
            }
        }

        return null;
    }
}
