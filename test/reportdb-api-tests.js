'use strict';

require('should');

//var lastConsoleInfo = null;
//var lastError = null;
//var mockConsole = {
//    log: function (payload) {
//        lastConsoleInfo = payload;
//    },
//    error: function (payload) {
//        lastError = payload;
//    }
//};

describe('The ReportDB API', function() {
//    beforeEach(function (done) {
//        if (require.cache[require.resolve('../lib/throttler')]) {
//            delete require.cache[require.resolve('../lib/throttler')];
//        }
//        done();
//    });

    it('should have expected result when something is executed synchronously', function() {
        //Arrange
        var a =1;

        //Act

        //Assert
        a.should.equal(1);
    });

    it('should have expected result when something is executed asynchronously', function(done) {
        //Arrange
        var a =1;

        //Act

        //Assert
        a.should.equal(1);
        done();
    });

});