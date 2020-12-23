<?php
declare(strict_types=1);

namespace App\Service\Project\Contract;

use Symplify\SmartFileSystem\SmartFileInfo;

interface PageFactoryInterface
{
    public function createFromFileInfo(SmartFileInfo $fileInfo, ProjectInterface $project): ?PageInterface;
}
