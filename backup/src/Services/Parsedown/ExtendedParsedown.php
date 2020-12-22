<?php
declare(strict_types=1);

namespace App\Services\Parsedown;

final class ExtendedParsedown extends \ParsedownExtra
{
    /**
     * @var mixed[]
     */
    private static $calloutTitleIcons = [
        'danger' => 'fas fa-exclamation-triangle',
        'info' => 'fas fa-info-circle',
        'tip' => 'fas fa-thumbs-up',
        'warning' => 'fas fa-bullhorn',
    ];

    /**
     * @var \App\Services\Parsedown\Interfaces\ParsedownParserInterface[]
     */
    private $parsers;

    /**
     * ExtendedParsedown constructor.
     *
     * @param \App\Services\Parsedown\Interfaces\ParsedownParserInterface[] $parsers
     *
     * @throws \Exception
     */
    public function __construct(array $parsers)
    {
        parent::__construct();

        $this->parsers = $parsers;

        foreach ($parsers as $parser) {
            $parser->setBaseParser($this);

            if (isset($this->BlockTypes[$parser->getBlockType()]) === false) {
                $this->BlockTypes[$parser->getBlockType()] = [];
            }

            $this->BlockTypes[$parser->getBlockType()][] = 'Chain';
        }
    }

    /**
     * @param mixed[] $line
     *
     * @return void|mixed[]
     */
    protected function blockChain(array $line)
    {
        foreach ($this->parsers as $parser) {
            $output = $parser->begin($line);

            if (\is_array($output)) {
                return $output;
            }
        }
    }

    /**
     * @param mixed[] $line
     * @param mixed[] $block
     *
     * @return void|mixed[]
     */
    protected function blockChainContinue(array $line, array $block)
    {
        foreach ($this->parsers as $parser) {
            $output = $parser->continue($line, $block);

            if (\is_array($output)) {
                return $output;
            }
        }
    }
}
