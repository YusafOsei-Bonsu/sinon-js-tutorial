const assert = require("assert");
const { greet } = require("../greeter.js");

describe("Testing the greeter", () => {
    it("Checks the greet function", () => assert.strictEqual(greet("Alice"), "Hello, Alice! Today is Thursday, December 31, 2020")); 
});
