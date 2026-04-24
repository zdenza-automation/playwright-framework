import { APIRequestContext } from '@playwright/test';

export class ReqResService {
  constructor(private request: APIRequestContext) {}

  async getUsers() {
    const response = await this.request.get('https://jsonplaceholder.typicode.com/users');

    return {
      status: response.status(),
      body: await response.json(),
    };
  }

  async createUser(data: { name: string; job: string }) {
    const response = await this.request.post('https://jsonplaceholder.typicode.com/users', {
      data,
    });

    return {
      status: response.status(),
      body: await response.json(),
    };
  }
}