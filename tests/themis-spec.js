var expect = require('expect.js');
var Themis = require('../index');

describe('themis', function () {
    
    it('normal usage', function () {
        Themis.set('a', 'bb');
        expect(Themis.get('a')).to.be('bb');
        expect(localStorage.getItem('a')).to.be('"bb"');
        expect(sessionStorage.getItem('a')).to.be('bb');
        expect(/a=bb/.test(document.cookie)).to.be(true);
    });

});
