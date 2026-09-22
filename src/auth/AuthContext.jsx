import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const local = localStorage.getItem("saauser");

      if (!local || local === "undefined" || local === "null") {
        return null;
      }

      return JSON.parse(local);
    } catch (error) {
      console.error("Invalid user data in localStorage:", error);

      localStorage.removeItem("saauser");
      return null;
    }
  });
  const logout = () => {
    localStorage.removeItem("saatoken");
    localStorage.removeItem("saauser");
    navigate("/");
  };

  const authStatus = async () => {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data.user);
      localStorage.setItem("saauser", JSON.stringify(response.data.user));
    } catch (error) {
      localStorage.removeItem("saatoken");
      localStorage.removeItem("saauser");
      setUser(null);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("saatoken");
    if (!token) {
      return;
    }
    authStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;