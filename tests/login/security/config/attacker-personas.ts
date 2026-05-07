export type AttackerPersona = {
  name: string;
  role: 'unauthenticated' | 'standard-user';
  email?: string;
  password?: string;
};

export const attackerPersonas: Record<string, AttackerPersona> = {
  unauthenticatedVisitor: {
    name: 'Unauthenticated Visitor',
    role: 'unauthenticated',
  },
  standardUser: {
    name: 'Standard User',
    role: 'standard-user',
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
  },
};
