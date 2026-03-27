// src/routes/items.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '../app';
import prisma from '../prisma/client';

describe('Items API Endpoints', () => {
    let authToken: string;

    beforeAll(async () => {
        await prisma.item.deleteMany();

        // Create a test user and get token
        const loginRes = await request(app)
            .post('/auth/login')
            .send({ email: 'newuser@test.com', password: 'password123' });

        authToken = loginRes.body.token;
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it('should create a new item', async () => {
        const res = await request(app)
            .post('/items')
            .set('Authorization', `Bearer ${authToken}`)
            .send({
                name: 'Test Laptop',
                description: 'Test description',
                isInStore: true,
                amountInStore: 10
            });

        expect(res.status).toBe(201);
        expect(res.body.data.name).toBe('Test Laptop');
    });

    it('should get all items', async () => {
        const res = await request(app).get('/items');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('should return 401 when creating item without token', async () => {
        const res = await request(app)
            .post('/items')
            .send({ name: 'No Token Item' });

        expect(res.status).toBe(401);
    });
});