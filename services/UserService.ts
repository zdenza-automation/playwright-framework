import { APIRequestContext, expect } from '@playwright/test';

export class UserService {
  constructor(private request: APIRequestContext) {}

  async getUsers() {
    const response = await this.request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.status()).toBe(200);

    const body = await response.json();
    return body;
  }
}