export const apiErrorMocks = {
  unprocessableEntity422: {
    status: 422,
    contentType: 'application/json',
    body: {
      message: 'Validation failed for one or more fields.',
      errors: {
        email: ['The email field is required.'],
      },
    },
  },
  unauthorized401: {
    status: 401,
    contentType: 'application/json',
    body: {
      message: 'Unauthorized',
    },
  },
  serverError500: {
    status: 500,
    contentType: 'application/json',
    body: {
      message: 'Unexpected server error',
    },
  },
};
