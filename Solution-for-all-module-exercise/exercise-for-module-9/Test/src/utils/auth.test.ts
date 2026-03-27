import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "./auth";

describe("Auth Utilities", () => {
    it("hashes password correctly", async () => {
        const password = "13456";
        const hashed = await hashPassword(password);

        expect(hashed).not.toBe(password);
        expect(hashed.length).toBeGreaterThan(10);
    });

    it("compares password correctly", async () => {
        const password = "123456";
        const hashed = await hashPassword(password);

        const isMatch = await comparePassword(password, hashed);
        expect(isMatch).toBe(true);

        const wrongMatch = await comparePassword("wrongpass", hashed);
        expect(wrongMatch).toBe(false);
    });
});