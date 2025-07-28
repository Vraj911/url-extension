import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const saveToken = (tk) => {
    localStorage.setItem("token", tk);
    setToken(tk);
  };
  const clearToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <AppContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
