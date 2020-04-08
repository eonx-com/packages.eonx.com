<?php
declare(strict_types=1);

namespace App\Controller;

use App\Repository\Interfaces\DocumentationRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="docs/{slug}", name="docs_show")
 */
final class DocumentationController extends AbstractController
{
    /**
     * @var \App\Repository\Interfaces\DocumentationRepositoryInterface
     */
    private $documentationRepository;

    public function __construct(DocumentationRepositoryInterface $documentationRepository)
    {
        $this->documentationRepository = $documentationRepository;
    }

    public function __invoke(string $slug): Response
    {
        $doc = $this->documentationRepository->findOneForSlug($slug);

        // TODO - Handle not found

        return $this->render('docs/documentation.html.twig', ['documentation' => $doc]);
    }
}
