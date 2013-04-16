define(
    function () {
        'use strict';
        return {
            "getDefinedMask": function (phonenumber) {
                // Reference http://en.wikipedia.org/wiki/Toll-free_telephone_number
                if (/^0[\d]00/.test(phonenumber)) {
                    return '9999 99999999';
                }

                if (/^\d{11}/.test(phonenumber)) {
                    return '(99) 99999-9999';
                }

                if (/^\d{10}/.test(phonenumber)) {
                    return '(99) 9999-9999';
                }

                return '(99) 999999999';
            }
        };
    }
);