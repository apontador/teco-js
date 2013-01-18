/*global describe:true, it:true, expect:true, beforeEach:true*/
require(['apontador/tracker/gm'], function (gmTracker) {
    'use strict';
    describe('GM Tracker', function () {
        var element;

        beforeEach(function () {
            element = document.createElement('div');
        });

        it('should create an image tracker', function () {
            var url, imageTracker;

            url = 'http://www.apontador.com.br/local/sp/sao_paulo/restaurantes/7E23C242/arabia___jardins.html';

            gmTracker.track(url, element);

            imageTracker = element.getElementsByTagName('img');
            expect(imageTracker.length).to.eql(1);
        });

        it('should create an image tracker with src url', function () {
            var url, imageTracker;

            url = 'http://www.apontador.com.br/local/sp/sao_paulo/restaurantes/7E23C242/arabia___jardins.html';

            gmTracker.track(url, element);

            imageTracker = element.getElementsByTagName('img');
            expect(
                imageTracker[0].getAttribute('src')
            ).to.eql(
                'http://gmlabr.112.2o7.net/b/ss/gmbr-apontadorchevrolet'
                    + ',gmbr-geral/1/H.25.2--NS/0?AQB=1&pccr=true&g=none'
                    + '&&cdp=3&AQE=1&pageName=Apontador:Chevrolet:'
                    + 'arabia%20jardins:sao%20paulo:sp&ch=Apontador'
                    + ':Chevrolet:Concessionaria'
            );
        });

        it('should not create an image tracker with a wrong url', function () {
            var url, imageTracker;

            url = 'http://www.apontador.com.br/em/sp_sao-paulo/restaurantes/em_jardim-paulista';

            gmTracker.track(url, element);

            imageTracker = element.getElementsByTagName('img');
            expect(imageTracker.length).to.eql(0);
        });
    });
});
