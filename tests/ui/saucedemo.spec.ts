import { test, expect } from '../../fixtures/testFixture';

test('user can login and add item to cart @smoke @ui', async ({
  loginPage,
  inventoryPage,
  mockUsersApi,
}) => {
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoggedIn();

  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();
});