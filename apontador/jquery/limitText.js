define([
    'jquery',
    'apontador/text/limit'
], function ($, limitText) {
    'use strict';

    $.fn.limitText = function (config) {
        var parameters = $.extend(
            {
                'summary_class': 'summary',
                'ellipsis_link_class': ''
            },
            config
        );
        this.each(function (key, element) {
            var $element = $(element),
                limit,
                label,
                text,
                limitedText,
                $summary,
                $expandHandler;

            limit = $element.data('limit');
            label = $element.data('label');
            text = $element.html() || '';

            if (text.length > limit) {
                limitedText = limitText(text, limit, '...');
                $summary = $('<span class="' + parameters.summary_class + '">' + limitedText + '</span>');
                $expandHandler = [];

                if (label) {
                    $expandHandler = $(
                        '<a class="' + parameters.ellipsis_link_class + '" href="#" title="' + label + '">' + label + ' <small>▼</small></a>'
                    );

                    $expandHandler.on('click', function (e) {
                        e.preventDefault();
                        $element.html(text);
                    });
                }
                $element.html('').append($summary, '&nbsp;', $expandHandler);
            }
        });
    };
});
