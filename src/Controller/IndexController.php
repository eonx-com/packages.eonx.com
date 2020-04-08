<?php
declare(strict_types=1);

namespace App\Controller;

use App\Repository\Interfaces\ProjectRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/", name="index")
 */
final class IndexController extends AbstractController
{
    /**
     * @var \App\Repository\Interfaces\ProjectRepositoryInterface
     */
    private $projectRepository;

    public function __construct(ProjectRepositoryInterface $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function __invoke()
    {
        return $this->render('index.html.twig', ['projects' => $this->projectRepository->all()]);
    }
}
