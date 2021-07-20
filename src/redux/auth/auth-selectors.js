const getIsAuth = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;

export default {
  getIsAuth,
  getUserName,
};
