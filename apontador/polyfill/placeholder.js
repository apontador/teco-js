define(['../browser/event'], function (eventEmitter) {
        'use strict';

        var placeholderPolyfill = function () {
            var inputs = document.getElementsByTagName('input'),
                inputsCount = inputs.length,
                clsPrefix = ' placeholder-on',
                elm, i;

            function _createFocusEvent(elm) {

                eventEmitter.add('focus', elm, function (e) {

                    //ie8 and ie7 doesn't support this
                    var current = e.target;

                    if (current.value === current.attributes.placeholder.value) {
                        current.value = '';
                        current.className = current.className.replace('placeholder-on', '');
                    }

                });

            }

            function _createBlurEvent(elm) {
                eventEmitter.add('blur', elm, function (e) {

                    var current = e.target;

                    if (current.value === '') {
                        current.value = current.attributes.placeholder.value;

                        if (!current.className.match('placeholder')) {
                            current.className += clsPrefix;
                        }
                    }

                });
            }

            for (i = 0; i < inputsCount; i++) {
                elm = inputs[i];

                if (elm.attributes.placeholder.value) {

                    if (elm.value === '') {
                        elm.className += clsPrefix;
                        elm.value = elm.attributes.placeholder.value;
                    }

                    _createFocusEvent(elm);
                    _createBlurEvent(elm);

                }
            }
        };

        return placeholderPolyfill;

    }
);
