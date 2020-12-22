<?php
declare(strict_types=1);

namespace App\Services\Parsedown\Parsers;

use Nette\Utils\Strings;

final class CalloutParser extends AbstractMultilineParser
{
    private static $classes = [
        'tip' => 'success',
        'info' => 'info',
        'warning' => 'warning',
        'danger' => 'danger',
    ];

    private static $icons = [
        'tip' => 'fa fa-thumbs-up',
        'info' => 'fa fa-info-circle',
        'warning' => 'fa fa-exclamation-triangle',
        'danger' => 'fa fa-ban',
    ];

    protected function doBegin(array $line, array $matches): array
    {
        $parts = \explode('|', $matches[1] ?? '');
        $type = \trim($parts[0] ?? 'info');
        $title = isset($parts[1]) ? \trim($parts[1]) : null;
        $hasTitle = $title !== null;

        $content = [
            'name' => 'div',
            'attributes' => [
                'class' => 'content',
            ],
            'text' => '',
        ];

        if ($hasTitle) {
            $content['handler'] = 'elements';
            $content['text'] = [
                [
                    'name' => 'h4',
                    'attributes' => ['class' => 'callout-title'],
                    'handler' => 'element',
                    'text' => [
                        'name' => 'span',
                        'attributes' => ['class' => 'callout-icon-holder mr-1'],
                        'handler' => 'elements',
                        'text' => [
                            [
                                'name' => 'i',
                                'attributes' => ['class' => static::$icons[$type] ?? static::$icons['info']],
                                'text' => ''
                            ],
                            [
                                'name' => 'span',
                                'text' => $title,
                            ],
                        ]
                    ]
                ],
                [
                    'name' => 'div',
                    'text' => ''
                ]
            ];
        }

        $element = [
            'name' => 'div',
            'attributes' => [
                'class' => \sprintf(
                    'callout-block callout-block-%s',
                    static::$classes[$type] ?? static::$classes['info']
                ),
                'hasTitle' => $hasTitle,
            ],
            'handler' => 'element',
            'text' => $content,
        ];

        return [
            'char' => $line['text'][0],
            'element' => $element,
        ];
    }

    protected function doComplete(array $line, array $block, array $matches): array
    {
        $block['completed'] = true;

        $hasTitle = $block['element']['attributes']['hasTitle'] ?? false;
        unset($block['element']['attributes']['hasTitle']);

        if ($hasTitle === false) {
            $text = Strings::substring($block['element']['text']['text'], 1);
            $block['element']['text']['rawHtml'] = $this->parser->parse($text);

            unset($block['element']['text']['text']);

            return $block;
        }

        $text = Strings::substring($block['element']['text']['text'][1]['text'], 1);
        $block['element']['text']['text'][1]['rawHtml'] = $this->parser->parse($text);

        unset($block['element']['text']['text'][1]['text']);

        return $block;
    }

    protected function doContinue(array $line, array $block): array
    {
        if (($block['element']['attributes']['hasTitle'] ?? false) === false) {
            $block['element']['text']['text'] .= "\n" . $line['body'];

            return $block;
        }

        $block['element']['text']['text'][1]['text'] .= "\n" . $line['body'];

        return $block;
    }

    protected function doInterrupted(array $block): array
    {
        if (($block['element']['attributes']['hasTitle'] ?? false) === false) {
            $block['element']['text']['text'] .= "\n";

            return $block;
        }

        $block['element']['text']['text'][1]['text'] .= "\n";

        return $block;
    }

    protected function getBeginPattern(): string
    {
        return '::: (.+)';
    }

    protected function getCompletePattern(): string
    {
        return ':::';
    }
}
