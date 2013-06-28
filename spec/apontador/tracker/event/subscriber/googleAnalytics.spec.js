/*global require, describe, it, beforeEach, afterEach, sinon, expect, window*/
require(
    ['apontador/tracker/event/subscriber/googleAnalytics'],
    function (googleAnalyticsSub) {
        'use strict';

        describe('Tracker Event subscriber: Google Analytics', function () {
            /*jshint nomen:false*/

            beforeEach(function () {
                window.pageTracker = {
                    '_trackPageview': sinon.spy()
                };
            });
            afterEach(function () {
                delete window.pageTracker;
            });

            it('should track a phone click', function () {
                googleAnalyticsSub(
                    'click',
                    'place_phone',
                    {
                        'place_id': 'LBSID',
                        'name': 'Foo Pub'
                    }
                );

                expect(window.pageTracker._trackPageview.calledOnce)
                    .to.be.ok();
                expect(window.pageTracker._trackPageview.firstCall.args)
                    .to.eql([
                        '/contabilizacao/poi/LBSID/Foo Pub/vertelefone.html'
                    ]);
            });

            it('should track a click on the place website link', function () {
                googleAnalyticsSub(
                    'click',
                    'place_website_link',
                    {
                        'place_id': 'LBSID'
                    }
                );

                expect(window.pageTracker._trackPageview.calledOnce)
                    .to.be.ok();
                expect(window.pageTracker._trackPageview.firstCall.args)
                    .to.eql([
                        '/contabilizacao/poi/LBSID/Mais_informacoes.html'
                    ]);
            });

            it('should not track an unknown event', function () {
                googleAnalyticsSub(
                    'click',
                    'unknown',
                    {
                        'place_id': 'LBSID'
                    }
                );

                expect(window.pageTracker._trackPageview.callCount)
                    .to.eql(0);
            });

            it('should not track unsupported event types', function () {
                googleAnalyticsSub(
                    'view',
                    'place_phone',
                    {
                        'place_id': 'LBSID'
                    }
                );

                expect(window.pageTracker._trackPageview.callCount)
                    .to.eql(0);
            });
        });
    }
);
