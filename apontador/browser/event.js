define(
    function () {
        return (function (doc) {

            return {
                emit: function (type, element) {

                    var e = null;
                    if (doc.createEventObject && !doc.createEvent) {
                        e = doc.createEventObject();
                        element.fireEvent('on' + type, e);
                    } else {
                        e = doc.createEvent('HTMLEvents');
                        e.initEvent(type, true, true);
                        element.dispatchEvent(e);
                    }

                },
                add: function (type, element, callback) {

                    if (doc.attachEvent && !('addEventListener' in element)) {
                        element.attachEvent('on' + type, function () {
                            callback({
                                target: element
                            });
                        });
                    } else {
                        element.addEventListener(type, callback, false);
                    }
                }
            };

        })(document);
    }
);
