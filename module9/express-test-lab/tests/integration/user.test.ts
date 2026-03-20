// 
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../../src/app";

describe("User API", () => {

  it("GET /users should return list", async () => {
    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); // safer check
  });

  it("POST /users success", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Alice" });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Alice");
  });

  it("POST /users error case", async () => {
    const res = await request(app)
      .post("/users")
      .send({}); // missing name

    expect(res.status).toBe(400);
  });

});