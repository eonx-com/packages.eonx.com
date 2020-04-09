<?php
declare(strict_types=1);

namespace App\Services\Parsedown\Parsers;

use App\Services\Parsedown\Interfaces\ParsedownParserInterface;
use Nette\Utils\Strings;

abstract class AbstractMultilineParser implements ParsedownParserInterface
{
    /**
     * @var \ParsedownExtra
     */
    protected $parser;

    /**
     * @param mixed[] $line
     *
     * @return void|mixed[]
     */
    public function begin(array $line)
    {
        $matches = Strings::match($line['text'] ?? '', $this->formatPattern($this->getBeginPattern()));

        if (empty($matches)) {
            return;
        }

        return $this->doBegin($line, $matches);
    }

    /**
     * @param mixed[] $line
     * @param mixed[] $block
     *
     * @return void|mixed[]
     */
    public function continue(array $line, array $block)
    {
        if (isset($block['completed'])) {
            return;
        }

        if (isset($block['interrupted'])) {
            $block = $this->doInterrupted($block);

            unset($block['interrupted']);
        }

        $matches = Strings::match($line['text'], $this->formatPattern($this->getCompletePattern()));

        if ($matches) {
            return $this->doComplete($line, $block, $matches);
        }

        return $this->doContinue($line, $block);
    }

    public function getBlockType(): string
    {
        return Strings::substring($this->getBeginPattern(), 0, 1);
    }

    public function setBaseParser(\ParsedownExtra $parser): ParsedownParserInterface
    {
        $this->parser = $parser;

        return $this;
    }

    abstract protected function doBegin(array $line, array $matches): array;

    abstract protected function doComplete(array $line, array $block, array $matches): array;

    abstract protected function doContinue(array $line, array $block): array;

    abstract protected function doInterrupted(array $block): array;

    abstract protected function getBeginPattern(): string;

    abstract protected function getCompletePattern(): string;

    private function formatPattern(string $pattern): string
    {
        return \sprintf('#%s#', $pattern);
    }
}
