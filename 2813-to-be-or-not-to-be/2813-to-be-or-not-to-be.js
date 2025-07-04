/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe(otherVal) {
            if (otherVal === val) return true;
            else throw new Error("Not Equal");
        },
        notToBe(otherVal) {
            if (otherVal !== val) return true;
            else throw new Error("Equal");
        }
    }
};


expect(5).toBe(5); // true
expect(5).notToBe(6); // throws "Equal"
