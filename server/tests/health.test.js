const request = require('supertest');
const app = require('../src/app');

describe('GET /api/health', () => {
    test('responde correctamente', async () => {
        const response = await request(app).get('/api/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ 
            ok: true,
            servicio: 'parqueadero-api',
         });
    });
});
