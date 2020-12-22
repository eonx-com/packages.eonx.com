<?php
declare(strict_types=1);

namespace App\ControllerDataProvider;

use Symplify\SymfonyStaticDumper\Contract\ControllerWithDataProviderInterface;

abstract class AbstractControllerWithDataProvider implements ControllerWithDataProviderInterface
{
    public function getControllerMethod(): string
    {
        return '__invoke';
    }
}
