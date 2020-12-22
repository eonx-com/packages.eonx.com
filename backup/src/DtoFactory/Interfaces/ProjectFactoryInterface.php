<?php
declare(strict_types=1);

namespace App\DtoFactory\Interfaces;

use App\Dto\Project;
use Symplify\SmartFileSystem\SmartFileInfo;

interface ProjectFactoryInterface
{
    public function createFromFileInfo(SmartFileInfo $fileInfo): ?Project;
}
