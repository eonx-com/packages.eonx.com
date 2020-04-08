<?php
declare(strict_types=1);

namespace App\DtoFactory\Interfaces;

use App\Dto\Documentation;
use App\Dto\Project;
use Symplify\SmartFileSystem\SmartFileInfo;

interface DocumentationFactoryInterface
{
    public function createFromFileInfo(Project $project, SmartFileInfo $fileInfo): Documentation;
}
