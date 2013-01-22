define(['../browser/event'], function (eventEmitter) {
        'use strict';

        var placeholderPolyfill = function () {
            var inputs = document.getElementsByTagName('input'),
                elm;

            for (var i=0, count = inputs.length; i<count; i++) {
                elm = inputs[i];

                if ( elm.getAttribute('placeholder') ) {

                    if(elm.value === '') {
                        elm.className += 'placeholder-on';
                        elm.value = elm.getAttribute("placeholder");
                    }

                    eventEmitter.add('click', elm, function(){
                        if(elm.value === elm.getAttribute("placeholder")){
                            elm.value = '';
                            elm.className = elm.className.replace('/\bplaceholder\-on\b/','');
                        }
                    });

                    eventEmitter.add('blur', elm, function(){
                        if(elm.value === ''){
                            elm.value = elm.getAttribute("placeholder");
                            elm.className += ' placeholder-on';
                        }
                    });

                }
            }
        };

        return placeholderPolyfill;

    }
);
