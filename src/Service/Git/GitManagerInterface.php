<?php
declare(strict_types=1);

namespace App\Service\Git;

interface GitManagerInterface
{
    public function cloneRemoteToPath(string $remote, string $path, ?string $name = null): string;

    public function completeRemoteRepositoryWithGithubToken(string $remoteRepository): string;
}
