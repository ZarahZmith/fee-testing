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

        it('should handle only one argument', function() {
          let result = window.calc.sum([3]);

          expect( result ).to.be.a('number');
          expect( result ).to.equal(3);
        });

        it('should handle anything other than an array as the argument', function() {
          let result = window.calc.sum({});

          expect( result ).to.be.NaN;
        });

        it('should handle a string containing a number', function() {
          let result = window.calc.sum(['3', '8']);

          expect( result ).to.be.a('number').and.to.equal(11);
        });


      });

      // describe('factorial function', function() {
      //
      // });
    });

})();
