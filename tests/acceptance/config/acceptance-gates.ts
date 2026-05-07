export type AcceptanceGate = {
  id: string;
  description: string;
  severity: 'critical' | 'major' | 'minor';
};

export const acceptanceGates: AcceptanceGate[] = [
  {
    id: 'ACCEPTANCE-GATE-001',
    description: 'Golden Path remains operational for priority personas.',
    severity: 'critical',
  },
  {
    id: 'ACCEPTANCE-GATE-002',
    description: 'Privacy policy is visible and accessible to end users.',
    severity: 'major',
  },
  {
    id: 'ACCEPTANCE-GATE-003',
    description: 'Application remains available through operational checks.',
    severity: 'major',
  },
];
