define(
    function () {
        'use strict';
        return {
            "getDefinedMask": function (phonenumber) {
                if (phonenumber.match(/^0[1-9]00/) != null) {
                    return '(9999) 999-9999';
                }
                if (phonenumber.length == 10) {
                    return '(99) 9999-9999';
                }
                return '(99) 99999-9999';
            }
        };
    }
);