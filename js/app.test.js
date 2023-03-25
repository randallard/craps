const doTest = require('./app');
describe('doTest', () => {
    it( 'should be Ryan', () => {
        expect('Ryan').toEqual('Ryan');
    });
    it( 'should be Ryan', () => {
        expect(getRyan()).toEqual('Ryan');
    });
});