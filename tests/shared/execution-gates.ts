import { TestInfo } from '@playwright/test';
import process from 'node:process';

type SuiteGateConfig = {
  envVar: string;
  runLabel: string;
};

const suiteGates: Record<string, SuiteGateConfig> = {
  acceptance: {
    envVar: 'ACCEPTANCE_ENABLE',
    runLabel: 'acceptance scaffold tests',
  },
  integration: {
    envVar: 'INTEGRATION_ENABLE',
    runLabel: 'integration scaffold tests',
  },
  performance: {
    envVar: 'PERF_ENABLE',
    runLabel: 'performance scaffold tests',
  },
  security: {
    envVar: 'SECURITY_ENABLE',
    runLabel: 'security scaffold tests',
  },
  system: {
    envVar: 'SYSTEM_ENABLE',
    runLabel: 'system scaffold tests',
  },
};

export function requireSuiteExecution(
  testInfo: TestInfo,
  suite: keyof typeof suiteGates
): void {
  const gate = suiteGates[suite];
  if (process.env[gate.envVar] !== 'true') {
    testInfo.skip(true, `Set ${gate.envVar}=true to run ${gate.runLabel} intentionally.`);
  }
}
