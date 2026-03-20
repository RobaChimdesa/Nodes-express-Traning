import { describe, it, expect } from "vitest";
import { sum } from "../../src/utils/sum";

describe("sum function", () => {

  it("summation of positive numbers", () => {
    const result = sum(12, 12);
    expect(result).toBe(24);
  });

  it("handles negative numbers", () => {
    const result = sum(-12, -12);
    expect(result).toBe(-24);
  });

});

