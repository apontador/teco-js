define(
    function () {
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

                    elm.onclick = function(){
                        if(this.value == this.getAttribute("placeholder")){
                            this.value = '';
                            this.className = this.className.replace('/\bplaceholder\-on\b/','');
                        }
                    }

                    elm.onblur = function(){
                        if(this.value == ''){
                            this.value = this.getAttribute("placeholder");
                            this.className += 'placeholder-on';
                        }
                    }
                }
            }
        };

        return placeholderPolyfill;

    }
);
