<?php
declare(strict_types=1);

namespace App\Services\Parsedown\Interfaces;

interface ParsedownParserInterface
{
    /**
     * @param mixed[] $line
     *
     * @return void|mixed[]
     */
    public function begin(array $line);

    /**
     * @param mixed[] $line
     * @param mixed[] $block
     *
     * @return void|mixed[]
     */
    public function continue(array $line, array $block);

    public function getBlockType(): string;

    public function setBaseParser(\ParsedownExtra $parser): self;
}
