import { APIRequestContext } from '@playwright/test';
import { ReqResService } from './UserApiService';

export class ServiceManager {
  public reqres: ReqResService;

  constructor(request: APIRequestContext) {
    this.reqres = new ReqResService(request);
  }
}