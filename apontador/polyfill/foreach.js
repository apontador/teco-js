define(
    function () {
        'use strict';

        if (typeof Array.prototype.forEach !== 'function') {
            Array.prototype.forEach = function (callback, thisArg) {
                if (typeof(callback) !== 'function') {
                    throw new TypeError(callback + ' is not a function!');
                }

                for (var i = 0, len = this.length; i < len; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }
);
