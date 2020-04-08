<?php
declare(strict_types=1);

namespace App\Services\Git;

use Nette\Utils\Strings;
use Symfony\Component\Process\Process;
use Symplify\SmartFileSystem\SmartFileInfo;

final class GitManager implements GitManagerInterface
{
    public function cloneRemoteToPath(string $remote, string $path, ?string $name = null): string
    {
        $command = ['git', 'clone', $remote];

        if ($name) {
            $command[] = $name;
        }

        return $this->exec($command, $path);
    }

    public function getCurrentBranchFromFileInfo(SmartFileInfo $fileInfo): string
    {
        $command = ['git', 'rev-parse', '--abbrev-ref', 'HEAD'];
        $currentBranch = $this->exec($command, $fileInfo->getPath());

        if ($currentBranch === 'HEAD') {
            $currentBranch = 'master';
        }

        return $currentBranch;
    }

    public function getOriginPath(string $path, string $branch): string
    {
        if (Strings::startsWith($path, '/')) {
            $path = Strings::substring($path, 1);
        }

        return \sprintf('/tree/%s/%s', $branch, $path);
    }

    public function getOriginUrlFromFileInfo(SmartFileInfo $fileInfo): string
    {
        $command = ['git', 'config', '--get', 'remote.origin.url'];
        $output = $this->exec($command, $fileInfo->getPath());

        [, $partAfterAt] = \explode('@', $output, 2);

        $partAfterAt = Strings::replace($partAfterAt, '#:#', '/');
        $partAfterAt = Strings::replace($partAfterAt, '#.git#', '');

        return \sprintf('https://%s', $partAfterAt);
    }

    /**
     * @param mixed[] $command
     */
    private function exec(array $command, ?string $cwd = null): string
    {
        $process = new Process($command, $cwd);
        $process->run();

        return \trim($process->getOutput());
    }
}
