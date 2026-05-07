export type SystemPersona = {
  name: string;
  role: 'guest' | 'user' | 'admin';
  email?: string;
  password?: string;
  objective: string;
};

export const systemPersonas: Record<string, SystemPersona> = {
  guestUser: {
    name: 'Guest User',
    role: 'guest',
    objective: 'Browse, search, and build a cart without authentication barriers.',
  },
  registeredProfessional: {
    name: 'Registered Professional',
    role: 'user',
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
    objective: 'Complete authenticated shopping and account actions.',
  },
  administrator: {
    name: 'Administrator',
    role: 'admin',
    email: 'admin@practicesoftwaretesting.com',
    password: 'welcome01',
    objective: 'Access operational controls and confirm system governance.',
  },
};
