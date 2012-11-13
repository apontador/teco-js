/*global define, navigator*/
define(function () {
    "use strict";
    var Detector = function (agent) {
        this.agent = agent || navigator.userAgent || "";
    };

    Detector.prototype.isMobile = function () {
        return ((/mobi|mini|blackberry9000/i).test(this.agent)
            && !(/ipad/i).test(this.agent));
    };

    return Detector;
});
