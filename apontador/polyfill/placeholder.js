define(['../browser/event'], function (eventEmitter) {
        'use strict';

        var placeholderPolyfill = function () {
            var inputs = document.getElementsByTagName('input'),
                clsPrefix = ' placeholder-on',
                elm;

            for (var i=0, count = inputs.length; i<count; i++) {
                elm = inputs[i];

                if ( elm.attributes.placeholder.value ) {

                    if(elm.value === '') {
                        elm.className += clsPrefix;
                        elm.value = elm.attributes.placeholder.value;
                    }

                    eventEmitter.add('focus', elm, function (e) {

                        //ie8 and ie7 doesn't support this
                        var current = e.target;

                        if (current.value === current.attributes.placeholder.value) {
                            current.value = '';
                            current.className = current.className.replace('placeholder-on','');
                        }

                    });

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
            }
        };

        return placeholderPolyfill;

    }
);
