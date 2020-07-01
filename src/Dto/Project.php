<?php
declare(strict_types=1);

namespace App\Dto;

final class Project implements \JsonSerializable
{
    /**
     * @var string
     */
    public const TYPE_PACKAGE = 'package';

    /**
     * @var string
     */
    public const TYPE_PROJECT = 'project';

    /**
     * @var bool
     */
    private $deprecated;

    /**
     * @var string
     */
    private $description;

    /**
     * @var string
     */
    private $docsUrl;

    /**
     * @var null|mixed
     */
    private $finderDepth;

    /**
     * @var null|string
     */
    private $finderPattern;

    /**
     * @var string
     */
    private $gitBranch;

    /**
     * @var string
     */
    private $gitOriginUrl;

    /**
     * @var string
     */
    private $language;

    /**
     * @var string
     */
    private $license;

    /**
     * @var string
     */
    private $localBasePath;

    /**
     * @var string
     */
    private $localPath;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $remoteOriginUrl;

    /**
     * @var null|string
     */
    private $remotePath;

    /**
     * @var string
     */
    private $slug;

    /**
     * @var string
     */
    private $type;

    public function __construct(
        string $name,
        string $slug,
        string $description,
        string $language,
        string $type,
        string $license,
        string $remoteOriginUrl,
        string $localPath,
        string $localBasePath,
        string $gitOriginUrl,
        string $gitBranch,
        string $docsUrl,
        ?string $remotePath = null,
        ?string $finderPattern = null,
        $finderDepth = null,
        ?bool $deprecated = null
    ) {
        $this->name = $name;
        $this->slug = $slug;
        $this->description = $description;
        $this->language = $language;
        $this->type = $type;
        $this->license = $license;
        $this->remoteOriginUrl = $remoteOriginUrl;
        $this->localPath = $localPath;
        $this->localBasePath = $localBasePath;
        $this->gitOriginUrl = $gitOriginUrl;
        $this->gitBranch = $gitBranch;
        $this->docsUrl = $docsUrl;
        $this->remotePath = $remotePath;
        $this->finderPattern = $finderPattern;
        $this->finderDepth = $finderDepth;
        $this->deprecated = $deprecated ?? false;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getDocsUrl(): string
    {
        return $this->docsUrl;
    }

    public function getFinderDepth()
    {
        return $this->finderDepth;
    }

    public function getFinderPattern(): ?string
    {
        return $this->finderPattern;
    }

    public function getGitBranch(): string
    {
        return $this->gitBranch;
    }

    public function getGitOriginUrl(): string
    {
        return $this->gitOriginUrl;
    }

    public function getLanguage(): string
    {
        return $this->language;
    }

    public function getLicense(): string
    {
        return $this->license;
    }

    public function getLocalBasePath(): string
    {
        return $this->localBasePath;
    }

    public function getLocalPath(): string
    {
        return $this->localPath;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getRemoteOriginUrl(): string
    {
        return $this->remoteOriginUrl;
    }

    public function getRemotePath(): ?string
    {
        return $this->remotePath;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function getTypeIcon(): string
    {
        return $this->type === self::TYPE_PACKAGE ? 'fas fa-cubes' : 'fas fa-cube';
    }

    public function isDeprecated(): bool
    {
        return $this->deprecated;
    }

    /**
     * @return mixed[]
     */
    public function jsonSerialize(): array
    {
        return [
            'name' => $this->name,
            'slug' => $this->name,
            'deprecated' => $this->deprecated,
            'description' => $this->description,
            'docsUrl' => $this->docsUrl,
            'gitBranch' => $this->gitBranch,
            'gitOriginUrl' => $this->gitOriginUrl,
            'language' => $this->language,
            'license' => $this->license,
            'localBasePath' => $this->localBasePath,
            'localPath' => $this->localPath,
            'remoteOriginUrl' => $this->remoteOriginUrl,
            'remotePath' => $this->remotePath,
            'type' => $this->type,
            'typeIcon' => $this->getTypeIcon(),
            'finderPattern' => $this->finderPattern,
            'finderDepth' => $this->finderDepth,
        ];
    }
}
