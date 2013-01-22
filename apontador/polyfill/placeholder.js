define(['../browser/event'], function (eventEmitter) {
        'use strict';

        var placeholderPolyfill = function () {
            var inputs = document.getElementsByTagName('input'),
                clsPrefix = ' placeholder-on',
                elm;

            for (var i=0, count = inputs.length; i<count; i++) {
                elm = inputs[i];

                if ( elm.getAttribute('placeholder') ) {

                    if(elm.value === '') {
                        elm.className += clsPrefix;
                        elm.value = elm.getAttribute("placeholder");
                    }

                    eventEmitter.add('click', elm, function (e) {

                        //ie8 and ie7 doesn't support this
                        var current = e.target;

                        if (current.value === current.getAttribute('placeholder')) {
                            current.value = '';
                            current.className = current.className.replace('placeholder-on','');
                        }

                    });

                    eventEmitter.add('blur', elm, function (e) {

                        var current = e.target;

                        if (current.value === '') {
                            current.value = current.getAttribute("placeholder");

                            if (!current.className.match('placeholder')) {
                                current.className += clsPrefix;
                            }
                        }

                    });

                }
            }
        };

        return placeholderPolyfill;

    }
);
