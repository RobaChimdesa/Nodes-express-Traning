// src/routes/auth.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app';
import prisma from '../prisma/client';
describe('Auth API Endpoints', () => {
    beforeAll(async () => {
        await prisma.user.deleteMany(); // Clean before tests
    });
    afterAll(async () => {
        await prisma.$disconnect();
    });
    it('should register a new user successfully', async () => {
        const res = await request(app)
            .post('/auth/register')
            .send({
            email: 'newuser@test.com',
            password: 'password123',
            name: 'New User'
        });
        expect(res.status).toBe(201);
        expect(res.body.status).toBe('success');
        expect(res.body.data.email).toBe('newuser@test.com');
    });
    it('should not register duplicate email', async () => {
        const res = await request(app)
            .post('/auth/register')
            .send({
            email: 'newuser@test.com',
            password: 'password123'
        });
        expect(res.status).toBe(400);
        expect(res.body.message).toContain('Email already exists');
    });
    it('should login successfully and return tokens', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
            email: 'newuser@test.com',
            password: 'password123'
        });
        expect(res.status).toBe(200);
        expect(res.body.token).toBeDefined();
        expect(res.body.refreshToken).toBeDefined(); // if you added refresh token
        expect(res.body.user.email).toBe('newuser@test.com');
    });
    it('should return 401 for wrong password', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
            email: 'newuser@test.com',
            password: 'wrongpass'
        });
        expect(res.status).toBe(401);
    });
});
