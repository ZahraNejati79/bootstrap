import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Authcontext = createContext();
const AuthDispatcherContext = createContext();
const USER_LOCAL_STORAGE_KEY = "authUser";
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY)) || false;
    setState(userData);
  }, []);
  useEffect(() => {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);
  return (
    <Authcontext.Provider value={state}>
      <AuthDispatcherContext.Provider value={setState}>
        {children}
      </AuthDispatcherContext.Provider>
    </Authcontext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(Authcontext);
export const useAuthAction = () => useContext(AuthDispatcherContext);
