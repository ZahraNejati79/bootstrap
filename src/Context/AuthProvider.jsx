import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Authcontext = createContext();
const AuthDispatcherContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  return (
    <Authcontext.Provider value={userData}>
      <AuthDispatcherContext.Provider value={setUserData}>
        {children}
      </AuthDispatcherContext.Provider>
    </Authcontext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(Authcontext);
export const useAuthAction = () => useContext(AuthDispatcherContext);
