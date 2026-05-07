export const integrationTargets = {
  uiBaseUrl: 'https://practicesoftwaretesting.com/',
  apiBaseUrl: 'https://api.practicesoftwaretesting.com',
  endpoints: {
    products: '/products?limit=9',
    productById: '/products/1',
    login: '/users/login',
    cart: '/carts',
  },
};

export const integrationProfiles = {
  defaultTimeoutMs: 15000,
  expectedApiLatencyMs: 2000,
};
