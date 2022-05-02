import { createContext, useState } from "react";

const ContextAuth = createContext();
const initialAuth = null;
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };
  const data = { auth, handleAuth };
  return <ContextAuth.Provider value={data}>{children}</ContextAuth.Provider>;
};
export { AuthProvider };
export default ContextAuth;
