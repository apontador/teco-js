define(['apontador/polyfill/trim'],
    function () {
        'use strict';
        var poi, isPoiPathname;
        poi = function (pathname) {
            var poiProperties, name = '', city = '', state = '';
            poiProperties = pathname.match(
                /* http://rubular.com/r/8DbITZaScI */
                /\/local\/(\w{2})\/(\w+)\/\w*?\/\w*?\/(\w+)\.html/
            );

            if (isPoiPathname(pathname)) {
                /* http://rubular.com/r/vC6tWpm1yW */
                name = poiProperties[3].replace(/(_+)/g, ' ').trim();
                city = poiProperties[2].replace('_', ' ');
                state = poiProperties[1];
            }

            return {
                name: name,
                city: city,
                state: state
            };
        };
        isPoiPathname = function (pathname) {
            /* http://rubular.com/r/Ad2jwnQbgz */
            return pathname.match(
                (/\/local\/\w{2}\/\w+\/\w*?\/\w*?\/\w+\.html/)
            );
        };
        return {
            poi: poi
        };
    }
);
