<?php
declare(strict_types=1);

namespace App\Services\Git;

use Carbon\CarbonInterface;
use Symplify\SmartFileSystem\SmartFileInfo;

interface GitManagerInterface
{
    public function cloneRemoteToPath(string $remote, string $path, ?string $name = null): string;

    public function completeRemoteRepositoryWithGithubToken(string $remoteRepository): string;

    public function getCurrentBranchFromFileInfo(SmartFileInfo $fileInfo): string;

    public function getOriginPath(string $path, string $branch): string;

    public function getOriginUrlFromFileInfo(SmartFileInfo $fileInfo): string;

    public function getLastModifiedDate(SmartFileInfo $fileInfo): CarbonInterface;
}
