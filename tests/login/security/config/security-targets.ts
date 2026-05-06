export const securityTargets = {
  appBaseUrl: 'https://practicesoftwaretesting.com/',
  apiBaseUrl: 'https://api.practicesoftwaretesting.com',
  paths: {
    admin: '/admin',
    orders: '/orders',
  },
  endpoints: {
    orders: '/orders',
  },
};

export const securityProfiles = {
  defaultTimeoutMs: 15000,
  maxAuthEndpointLatencyMs: 2000,
};
