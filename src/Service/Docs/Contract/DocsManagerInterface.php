<?php
declare(strict_types=1);

namespace App\Service\Docs\Contract;

interface DocsManagerInterface
{
    public function generateDocs(): void;
}
