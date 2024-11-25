"use strict";
// union = mengizinkan sebuah variable merubah type data tapi untuk type data yang sudah di deskripsikan
let sample = "Danang";
sample = 19;
sample = true;
console.info(sample);
// union type = pengecekan terhadap type data
function testUnion(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value + 2;
    }
    else {
        return !value;
    }
}
expect(testUnion(100)).toBe(102);
expect(testUnion("Danang")).toBe("DANANG");
expect(testUnion(true)).toBe(false);
