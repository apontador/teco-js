/*global define, navigator*/
define(function () {
    "use strict";
    var Detector = function (agent) {
        this.agent = agent || navigator.userAgent || "";
    };
    Detector.prototype.isMobile = function () {
        return this.agent.match(/(iPhone|iPod|Android|BlackBerry|Windows Phone (OS )?[1-9])/) !== null;
    };

    return Detector;
});
