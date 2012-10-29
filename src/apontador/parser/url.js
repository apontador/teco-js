define(
    'urlParser',
    function () {
        'use strict';
        var poi, isPoiPathname;
        poi = function (pathname) {
            var poi_properties, name = "", city = "", state = "";
            poi_properties = pathname.match(
                /* http://rubular.com/r/8DbITZaScI */
                /\/local\/(\w{2})\/(\w+)\/\w*?\/\w*?\/(\w+)\.html/
            );

            if (isPoiPathname(pathname)) {
                /* http://rubular.com/r/vC6tWpm1yW */
                name = poi_properties[3].replace(/(_+)/g, " ").trim();
                city = poi_properties[2].replace("_", " ");
                state = poi_properties[1];
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
