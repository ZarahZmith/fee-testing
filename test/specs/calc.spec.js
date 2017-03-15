(function() {
    'use strict';

    let expect = chai.expect;

    // TODO: Your tests go here!
    describe('calc', function() {
      describe('sum function', function() {
        it('should return the sum of one plus one', function() {
          let result = window.calc.sum([1, 1]);

          expect( result ).to.be.a('number');
          expect( result ).to.equal(2);

        });
      });
    });





})();
