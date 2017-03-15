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

        it('should handle no arguments', function() {
          let result = window.calc.sum();

          expect( result ).to.equal(0);
        });

        it('should handle an empty array', function() {
          let result = window.calc.sum([]);

          expect( result ).to.equal(0);
        });

        // it('should handle an object as the argument', function() {
        //   let result =
        // });






      });
    });





})();
