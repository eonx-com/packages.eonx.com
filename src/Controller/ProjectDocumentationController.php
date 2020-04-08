<?php
declare(strict_types=1);

namespace App\Controller;

use App\Repository\Interfaces\DocumentationRepositoryInterface;
use App\Repository\Interfaces\ProjectRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="projects/{slug}", name="projects_index", requirements={"slug": ".+"})
 */
final class ProjectDocumentationController extends AbstractController
{
    /**
     * @var \App\Repository\Interfaces\DocumentationRepositoryInterface
     */
    private $documentationRepository;

    /**
     * @var \App\Repository\Interfaces\ProjectRepositoryInterface
     */
    private $projectRepository;

    public function __construct(
        DocumentationRepositoryInterface $documentationRepository,
        ProjectRepositoryInterface $projectRepository
    ) {
        $this->documentationRepository = $documentationRepository;
        $this->projectRepository = $projectRepository;
    }

    public function __invoke(string $slug): Response
    {
        $project = $this->projectRepository->findOneBySlug($slug);

        // TODO - Handle not found

        $docs = $this->documentationRepository->allForProject($project);

        return $this->render('projects/index.html.twig', ['project' => $project, 'docs' => $docs]);
    }
}
