<?php
declare(strict_types=1);

namespace App\Service\Git;

use Nette\Utils\Strings;
use Symfony\Component\Process\Process;

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
        $token = \getenv('GITHUB_ACCESS_TOKEN');

        // Do nothing if it is null or an empty string.
        if ($token === false) {
            return $remoteRepository;
        }

        [
            ,
            $partAfterAt,
        ] = \explode('@', $remoteRepository, 2);
        $partAfterAt = Strings::replace($partAfterAt, '#:#', '/');

        return \sprintf('https://%s@%s', $token, $partAfterAt);
    }

    /**
     * @param mixed[] $command
     */
    private function exec(array $command, ?string $cwd = null): string
    {
        return $this->execProcess(new Process($command, $cwd));
    }

    private function execProcess(Process $process): string
    {
        $process->run();

        return \trim($process->getOutput());
    }
}
