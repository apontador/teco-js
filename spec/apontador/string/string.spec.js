require(['apontador/string/string'], function (String) {
    describe('String Manipulation', function () {
        describe('Latinize', function () {
            it('should replace latin characters', function () {
                var latinWords = 'São André Óbviu Avô';
                expect(String.Latinize(latinWords)).to.eql('Sao Andre Obviu Avo');
                expect(String.Latinise(latinWords)).to.eql('Sao Andre Obviu Avo');
            });
            it('should validate latinize string', function () {
                expect(String.isLatin('São Paulo')).to.eql(false);
                expect(String.isLatin('Sao Paulo')).to.eql(true);
            });
        });
    });
    describe('String dependency', function () {
        describe('Dependency mask', function () {
            it('Mask dependecy should be loaded', function () {
                expect(String).to.have.property('Mask');
                expect(String.Mask).to.be.an('object');
            });
        });
    });
});