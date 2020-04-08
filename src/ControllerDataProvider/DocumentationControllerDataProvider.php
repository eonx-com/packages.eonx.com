<?php
declare(strict_types=1);

namespace App\ControllerDataProvider;

use App\Controller\DocumentationController;
use App\Dto\Documentation;
use App\Repository\Interfaces\DocumentationRepositoryInterface;

final class DocumentationControllerDataProvider extends AbstractControllerWithDataProvider
{
    /**
     * @var \App\Repository\Interfaces\DocumentationRepositoryInterface
     */
    private $documentationRepository;

    public function __construct(DocumentationRepositoryInterface $documentationRepository)
    {
        $this->documentationRepository = $documentationRepository;
    }

    public function getArguments(): array
    {
        $map = static function (Documentation $documentation): string {
            return $documentation->getSlug();
        };

        return \array_map($map, $this->documentationRepository->all());
    }

    public function getControllerClass(): string
    {
        return DocumentationController::class;
    }
}
