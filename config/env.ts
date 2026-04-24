type Env = {
  baseURL: string;
};

const ENV = process.env.ENV || 'dev';

const config: Record<string, Env> = {
  dev: {
    baseURL: 'https://example.com',
  },
  staging: {
    baseURL: 'https://denisosmanovic.com',
  },
  prod: {
    baseURL: 'https://example.com',
  },
};

export const env = config[ENV];