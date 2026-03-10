const request = require('supertest');

const BASE_URL = "http://localhost:5000";

describe("Dog API tests", () => {

  test("GET /api/dogs/random returns dog image", async () => {

    const response = await request(BASE_URL)
      .get("/api/dogs/random");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.imageUrl).toBeDefined();
    expect(typeof response.body.data.imageUrl).toBe("string");

  });

});

test("GET invalid route returns 404", async () => {

  const response = await request(BASE_URL)
    .get("/api/dogs/invalid");

  expect(response.statusCode).toBe(404);
  expect(response.body.error).toBeDefined();

});


test('GET invalid route returns 404', async () => {

  const response = await request(BASE_URL).get('/api/dogs/invalid');

  expect(response.statusCode).toBe(404);
  expect(response.body.error).toBeDefined();
});