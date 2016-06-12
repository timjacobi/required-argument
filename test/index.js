const { expect } = require('chai');

const req = require('../');

describe('required-argument:', function(){
    context('named function', function(){
        it('should include the function name in the error message', function(){
            function myfunc(a = req()){};
            function test() { myfunc() };

            expect(test).to.throw(Error);
            expect(test).to.throw(/myfunc/);
        });

        context('with 1 argument', function(){
            it('should throw an error when argument is not passed', function(){
                function myfunc(a = req()){};
                function test() { myfunc() };

                expect(test).to.throw(Error);
                expect(test).to.throw(/Missing argument in function "myfunc"/);
            });

            it('should not throw an error when argument is passed', function(){
                function myfunc(a = req()){};
                function test() { myfunc(0) };

                expect(test).not.to.throw(Error);
            });
        });

        context("with 2 arguments", function(){
            context("where the first argument is required", function(){
                function myfunc(a = req(), b){};

                it('should throw an error when no arguments are passed', function(){
                    function test() { myfunc() };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should throw an error when the first argument is undefined', function(){
                    function test() { myfunc(undefined, 0) };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should not throw an error when the first argument is passed', function(){
                    function test() { myfunc(0) };

                    expect(test).not.to.throw(Error);
                });

                it('should not throw an error when the both arguments are passed', function(){
                    function test() { myfunc(0,0) };

                    expect(test).not.to.throw(Error);
                });
            });

            context("where the second argument is required", function(){
                function myfunc(a, b = req()){};

                it('should throw an error when no arguments are passed', function(){
                    function test() { myfunc() };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should throw an error when the second argument is not passed', function(){
                    function test() { myfunc(0) };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should not throw an error when the second argument is passed', function(){
                    function test() { myfunc(undefined,0) };

                    expect(test).not.to.throw(Error);
                });

                it('should not throw an error when the both arguments are passed', function(){
                    function test() { myfunc(0,0) };

                    expect(test).not.to.throw(Error);
                });
            });

            context("where the both arguments are required", function(){
                function myfunc(a = req(), b = req()){};

                it('should throw an error when no arguments are passed', function(){
                    function test() { myfunc() };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should throw an error when only the first argument is passed', function(){
                    function test() { myfunc(0) };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should throw an error when the first argument is undefined', function(){
                    function test() { myfunc(undefined,0) };

                    expect(test).to.throw(Error);
                    expect(test).to.throw(/Missing argument in function "myfunc"/);
                });

                it('should not throw an error when both arguments are passed', function(){
                    function test() { myfunc(0,0) };

                    expect(test).not.to.throw(Error);
                });
            });
        });
    });

    context("anonymous function", function(){
        it("should state that the function is anonymous in the error message", function(){
            const myfunc = function(a = req()){};
            function test() { myfunc() };

            expect(test).to.throw(Error);
            expect(test).to.throw(/<anonymous function>/);
        });
    });
});