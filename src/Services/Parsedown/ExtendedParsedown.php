<?php
declare(strict_types=1);

namespace App\Services\Parsedown;

use Nette\Utils\Strings;

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

    public function __construct()
    {
        parent::__construct();

        $this->BlockTypes['{'][] = 'Callout';
        $this->BlockTypes['{'][] = 'CalloutTitle';
    }

    /**
     * @param mixed[] $line
     *
     * @return void|mixed[]
     */
    protected function blockCallout(array $line)
    {
        $matches = Strings::match($line['text'], '#{callout:(.+)}#');

        if ($matches) {
            return [
                'char' => $line['text'][0],
                'element' => [
                    'name' => 'div',
                    'attributes' => [
                        'class' => \sprintf('callout-block callout-block-%s', $matches[1]),
                    ],
                    'handler' => 'element',
                    'text' => [
                        'name' => 'div',
                        'attributes' => [
                            'class' => 'content',
                        ],
                        'text' => '',
                    ]
                ]
            ];
        }
    }

    /**
     * @param mixed $line
     * @param mixed $block
     *
     * @return void|mixed[]
     */
    protected function blockCalloutContinue(array $line, array $block)
    {
        if (isset($block['completed'])) {
            return;
        }

        if (isset($block['interrupted'])) {
            $block['element']['text']['text'] .= "\n";

            unset($block['interrupted']);
        }

        $matches = Strings::match($line['text'], '#{\/callout}#');

        if ($matches) {
            $text = Strings::substring($block['element']['text']['text'], 1);

            unset($block['element']['text']['text']);

            $block['element']['text']['rawHtml'] = $this->parse($text);
            $block['completed'] = true;

            return $block;
        }

        $block['element']['text']['text'] .= "\n" . $line['body'];

        return $block;
    }

    /**
     * @param mixed[] $line
     *
     * @return void|mixed[]
     */
    protected function blockCalloutTitle(array $line)
    {
        $matches = Strings::match($line['text'], '#{calloutTitle(:.+)}#');

        if ($matches) {
            $elements = [];

            if (isset($matches[1])) {
                $icon = Strings::substring($matches[1], 1);

                $elements[] = [
                    'name' => 'span',
                    'attributes' => [
                        'class' => 'callout-icon-holder mr-1',
                    ],
                    'handler' => 'element',
                    'text' => [
                        'name' => 'i',
                        'attributes' => [
                            'class' => static::$calloutTitleIcons[$icon] ?? $icon,
                        ],
                        'text' => ''
                    ],
                ];
            }

            $elements[] = ['name' => 'span', 'text' => ''];

            return [
                'char' => $line['text'][0],
                'element' => [
                    'name' => 'h4',
                    'attributes' => [
                        'class' => 'callout-title',
                    ],
                    'handler' => 'elements',
                    'text' => $elements,
                ],
            ];
        }
    }

    /**
     * @param mixed $line
     * @param mixed $block
     *
     * @return void|mixed[]
     */
    protected function blockCalloutTitleContinue(array $line, array $block)
    {
        if (isset($block['completed'])) {
            return;
        }

        if (isset($block['interrupted'])) {
            $block['element']['text'][1]['text'] .= "\n";

            unset($block['interrupted']);
        }

        $matches = Strings::match($line['text'], '#{\/calloutTitle}#');

        if ($matches) {
            $text = Strings::substring($block['element']['text'][1]['text'], 1);

            $block['element']['text'][1]['text'] = $text;
            $block['completed'] = true;

            return $block;
        }

        $block['element']['text'][1]['text'] .= "\n" . $line['body'];

        return $block;
    }
}
