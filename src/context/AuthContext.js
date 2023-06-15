import { createContext } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const values = {createUser};

  return (
    <AuthContext.AuthContextProvider value={values}>
      {children}
    </AuthContext.AuthContextProvider>
  );
};

export default AuthContextProvider;
