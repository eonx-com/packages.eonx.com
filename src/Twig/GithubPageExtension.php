<?php
declare(strict_types=1);

namespace App\Twig;

use Nette\Utils\Strings;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

final class GithubPageExtension extends AbstractExtension
{
    /**
     * @return \Twig\TwigFilter
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('githubPage', $this->getClosure()),
        ];
    }

    /**
     * @return \Twig\TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('githubPage', $this->getClosure()),
        ];
    }

    private function getClosure(): \Closure
    {
        return function (string $path): string {
            if (Strings::startsWith($path, '/')) {
                $path = Strings::substring($path, 1);
            }

            return \sprintf('http://eonx-com.github.io/packages.eonx.com/%s', $path);
        };
    }
}
