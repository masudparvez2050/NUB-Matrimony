import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/URL";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    axios
      .get(BASE_URL)
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          localStorage.setItem("token", "your-auth-token");
        } else {
          setAuth(false);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};
