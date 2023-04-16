export const LoginStart = () => ({
  type: "Login_Start",
});
export const LoginSuccess = (user) => ({
  type: "Login_Success",
  payload:user
});
export const LoginFailure = () => ({
  type: "Login_Failure",
});
