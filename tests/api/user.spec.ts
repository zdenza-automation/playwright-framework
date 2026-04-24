import { test, expect } from '../../fixtures/testFixture';

test.describe('User API', () => {
  test('should fetch users @api', async ({ services }) => {
    const response = await services.reqres.getUsers();

    expect(response.status).toBe(200);

    // FIX HERE
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('should create user @api', async ({ services }) => {
    const response = await services.reqres.createUser({
      name: 'Denis',
      job: 'QA Engineer',
    });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Denis');
  });
});