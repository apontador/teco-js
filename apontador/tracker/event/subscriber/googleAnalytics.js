define(function () {
    'use strict';

    return function (type, name, attributes) {
        /*global pageTracker*/
        /*jshint nomen:false, camelcase:false*/
        if (type !== 'click') {
            return;
        }

        switch (name) {
        case 'place_phone':
            pageTracker._trackPageview(
                '/contabilizacao/poi/' + attributes.place_id +
                    '/' + attributes.name + '/vertelefone.html'
            );
            break;
        case 'place_website_link':
            pageTracker._trackPageview(
                '/contabilizacao/poi/' + attributes.place_id +
                    '/Mais_informacoes.html'
            );
            break;
        }
    };
});
