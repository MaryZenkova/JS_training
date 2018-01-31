var createArr = require("../ArrayHandler").createArr;

describe("createArr", function() {

    describe("Should return array ", function() {

        function makeTest(x) {
            var assert = require('chai').assert;
            var expectedLength = x;

            var actualArray = createArr(x);

            it("with length " + expectedLength, function() {
                assert.equal(actualArray.length, expectedLength);
            });

            for (var i = 0; i < expectedLength; i++) {
                var index = i;
                var expectedValue = i * i;

                it("with " + index + " element " + expectedValue, function() {
                    assert.equal(actualArray[index], expectedValue);
                });
            };
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("Should return error ", function() {
        var assert = require('chai').assert;

        var expectedLength = 0;

        var actualArray = createArr(-2);
        var actualValue = actualArray[0];

        it("array length is 0" + expectedLength, function() {
            assert.equal(actualArray.length, expectedLength);
        });

        it("first element is undefined", function() {
            assert.equal(actualValue, undefined);
        });
    });
});