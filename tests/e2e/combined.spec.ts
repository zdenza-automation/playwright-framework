import { test, expect } from '../../fixtures/testFixture';
import { ReqResService } from '../../services/UserApiService';

test('UI + API integration flow @regression', async ({ loginPage, request }) => {
  const api = new ReqResService(request);

  const createResponse = await api.createUser({
    name: 'Denis',
    job: 'QA Engineer',
  });

  expect(createResponse.status).toBe(201);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoggedIn();

  const usersResponse = await api.getUsers();

  expect(usersResponse.status).toBe(200);
  expect(usersResponse.body.length).toBeGreaterThan(0);
});