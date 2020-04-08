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
     * See https://gist.github.com/willprice/e07efd73fb7f13f917ea#file-push-sh-L15
     * see https://stackoverflow.com/a/18936804/1348344
     *
     * Before:
     * git@github.com:vendor/name.git
     *
     * After:
     * https://GITHUB_USER_NAME:SECRET_TOKEN@github.com/vendor/package-name.git
     * https://SECRET_TOKEN@github.com/vendor/package-name.git
     */
    public function completeRemoteRepositoryWithGithubToken(string $remoteRepository): string
    {
        $token = \getenv('ACCESS_TOKEN');

        // Do nothing if it is null or an empty string.
        if ($token === false) {
            return $remoteRepository;
        }

        [, $partAfterAt,
        ] = explode('@', $remoteRepository, 2);
        $partAfterAt = Strings::replace($partAfterAt, '#:#', '/');

        return sprintf('https://%s@%s', $token, $partAfterAt);
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
