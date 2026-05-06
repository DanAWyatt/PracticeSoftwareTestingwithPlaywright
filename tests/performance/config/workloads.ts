export type WorkloadProfile = {
  name: string;
  iterations: number;
  warmupIterations: number;
  cooldownIterations: number;
};

export const workloadProfiles: Record<string, WorkloadProfile> = {
  baseline: {
    name: 'Baseline',
    iterations: 15,
    warmupIterations: 3,
    cooldownIterations: 2,
  },
  load: {
    name: 'Load',
    iterations: 100,
    warmupIterations: 10,
    cooldownIterations: 5,
  },
  stress: {
    name: 'Stress',
    iterations: 200,
    warmupIterations: 10,
    cooldownIterations: 5,
  },
  soak: {
    name: 'Soak',
    iterations: 400,
    warmupIterations: 20,
    cooldownIterations: 10,
  },
};
