export type Persona = {
  name: string;
  role: 'guest' | 'user' | 'admin';
  email?: string;
  password?: string;
  acceptanceGoal: string;
};

export const personas: Record<string, Persona> = {
  homeDiyer: {
    name: 'Home DIYer',
    role: 'guest',
    acceptanceGoal: 'Browse tools and complete core shopping journeys with confidence.',
  },
  professionalContractor: {
    name: 'Professional Contractor',
    role: 'user',
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
    acceptanceGoal: 'Verify business-critical purchasing and account workflows.',
  },
  shopAdmin: {
    name: 'Shop Admin',
    role: 'admin',
    email: 'admin@practicesoftwaretesting.com',
    password: 'welcome01',
    acceptanceGoal: 'Validate administrative visibility and operational confidence.',
  },
};
