define(
    function () {
        'use strict';
        return {
            "getDefinedMask": function (phonenumber) {
                if (phonenumber.match(/^0[1-9]00/) !== null) {
                    // http://en.wikipedia.org/wiki/Toll-free_telephone_number
                    return '9999 99999999';
                }
                return '(99) 999999999';
            }
        };
    }
);