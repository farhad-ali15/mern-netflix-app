const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Login_Start":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "Login_Success":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "Login_Failure":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    default:
      return { ...state };
  }
};
