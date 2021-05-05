<?php
declare(strict_types=1);

namespace App\Service\Project\Factory;

use App\Service\Project\Contract\ProjectFactoryInterface;
use App\Service\Project\Contract\ProjectInterface;
use App\Service\Project\Dto\PhpProject;
use Symplify\ComposerJsonManipulator\ComposerJsonFactory;
use Symplify\SmartFileSystem\SmartFileInfo;

final class PhpProjectFactory implements ProjectFactoryInterface
{
    /**
     * @var string
     */
    private const GITHUB_URL = 'https://github.com';

    private ComposerJsonFactory $composerJsonFactory;

    public function __construct(ComposerJsonFactory $composerJsonFactory)
    {
        $this->composerJsonFactory = $composerJsonFactory;
    }

    public function createFromFileInfo(SmartFileInfo $fileInfo): ?ProjectInterface
    {
        $composerJson = $this->composerJsonFactory->createFromFileInfo($fileInfo);
        $extra = $composerJson->getExtra();
        $ignore = $this->getEonxDocsBool($extra, 'ignore');

        if ($ignore) {
            return null;
        }

        return new PhpProject(
            $composerJson->getName(),
            $composerJson->getDescription(),
            $fileInfo->getPath(),
            \sprintf('%s/%s', self::GITHUB_URL, $composerJson->getName()),
            $this->getEonxDocsString($extra, 'finder_depth'),
            $this->getEonxDocsString($extra, 'finder_pattern')
        );
    }

    /**
     * @param mixed[] $extra
     */
    private function getEonxDocsBool(array $extra, string $name): bool
    {
        $value = $extra['eonx_docs'][$name] ?? null;

        if ($value === null) {
            return false;
        }

        return $value !== 'false'
            && $value !== false
            && $value !== '0'
            && $value !== 0;
    }

    /**
     * @param mixed[] $extra
     */
    private function getEonxDocsString(array $extra, string $name): ?string
    {
        return isset($extra['eonx_docs'][$name]) ? (string)$extra['eonx_docs'][$name] : null;
    }
}
