define(
    ['apontador/parser/url'],
    function (urlParser) {
        'use strict';
        var track,
            createImage,
            injectImageIn;

        track = function (url, element) {
            var image;

            image = createImage(url);
            if (image) {
                injectImageIn(image, element);
            }
        };

        createImage = function (url) {
            var poi, image;

            image = document.createElement('img');
            poi = urlParser.poi(url);
            if (poi.name.length > 0 && poi.city.length > 0 && poi.state.length > 0) {
                image.src = 'http://gmlabr.112.2o7.net/b/ss/gmbr-apontadorchevrolet'
                        + ',gmbr-geral/1/H.25.2--NS/0?AQB=1&pccr=true&g=none'
                        + '&&cdp=3&AQE=1&pageName=Apontador:Chevrolet:'
                        + encodeURIComponent(poi.name) + ':'
                        + encodeURIComponent(poi.city) + ':'
                        + encodeURIComponent(poi.state) + '&ch=Apontador'
                        + ':Chevrolet:Concessionaria';
                return image;
            }
        };

        injectImageIn = function (image, element) {
            element.appendChild(image);
        };

        return {
            track: track
        };
    }
);
