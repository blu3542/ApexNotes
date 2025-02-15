const request = require('supertest');
const app = require('../app'); 

describe("Express App Tests", () => {
    test("GET / should return 200 and render index page", async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain("<title>Apex Notes</title>"); 
    });

    test("POST /upload should return 500 when no file is uploaded", async () => {
        const response = await request(app).post('/upload');
        expect(response.status).toBe(500);
        expect(response.text).toContain("Error");
    });
});
