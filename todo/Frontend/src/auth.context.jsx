import { createContext } from "react";
import { useState } from "react";
import { login, register, getMe } from "./auth/api/authApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async ({username, email, password}) => {
    setLoading(true);
    try {
      const response = await register({username, email, password});
      setUser(response);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async ({email, password}) => {
    setLoading(true);
    try {
      const response = await login({email, password});
      setUser(response);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading, handleRegister,handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
