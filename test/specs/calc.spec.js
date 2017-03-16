(function() {
    'use strict';

    //allows us to shorten this throughtout, chai.expect is a global namespace, handles assertions
    let expect = chai.expect;

    // TODO: Your tests go here!
    //"describe" contains a collection of tests
    describe('calc', function() {
      describe('sum function', function() {

        it('should be a function', function() {
          //sanity check
          expect( window.calc.sum ).to.be.a('function');
        });

        //"it" is a single test
        it('should return the sum of one plus one', function() {
          //allows us to capture the result
          let result = window.calc.sum([1, 1]);

          //"expect" means you're handling an assertion
          expect( result ).to.be.a('number');
          expect( result ).to.equal(2);
        });

        it('should handle empty argument', function() {
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

      describe('factorial function', function() {

        it('should be a function', function() {
          //sanity test
          expect( window.calc.factorial ).to.be.a.function
        });

      });
    });

})();
