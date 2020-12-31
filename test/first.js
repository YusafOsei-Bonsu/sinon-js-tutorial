const assert = require("assert");
const { greet } = require("../greeter.js");
const { useFakeTimers } = require("sinon");

describe("Testing the greeter", () => {
    it("Checks the greet function", () => {
        let clock = useFakeTimers(new Date(2021, 0, 15));
        assert.strictEqual(greet("Alice"), "Hello, Alice! Today is Friday, January 15, 2021");

        // Time goes back to normal
        clock.restore();
    }); 
});
