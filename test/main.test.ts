// test.test.ts
import { saayHello } from "../src/main"; // Ganti 'yourModule' dengan nama file Anda

describe("saayHello function", () => {
  it("should return the correct greeting message", () => {
    expect(saayHello("World")).toBe("Hello World");
  });
});
