type Env = 'dev' | 'staging';

type TestData = {
  expectedTitle: string;
};

const data: Record<Env, TestData> = {
  dev: {
    expectedTitle: 'Example Domain',
  },
  staging: {
    expectedTitle: 'Denis Osmanović - Quality Engineering | Automation & AI Workflows',
  },
};

const ENV = (process.env.ENV || 'dev') as Env;

if (ENV !== 'dev' && ENV !== 'staging') {
  throw new Error(`Invalid ENV: ${ENV}`);
}

export const testData = data[ENV];