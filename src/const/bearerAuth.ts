export const bearerAuth = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};
