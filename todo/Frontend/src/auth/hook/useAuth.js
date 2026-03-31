import { useContext } from "react";
import { AuthContext } from "../../auth.context";

export function useAuth() {
  const context = useContext(AuthContext);

  return {
    handleRegister: context.handleRegister,
    handleLogin: context.handleLogin,
    user: context.user,
    loading: context.loading,
  };
}
