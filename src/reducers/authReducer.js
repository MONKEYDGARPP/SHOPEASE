export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { isLoggedIn: true };
    case "LOG_OUT":
      return { isLoggedIn: false };
    default:
      return state;
  }
};
