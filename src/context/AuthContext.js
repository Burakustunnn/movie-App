import { createContext } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();

  // REGİSTER İŞLEMİ
  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // LOGİN İŞLEMİ
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // ÇIKIŞ İŞLEMİ
  const logOut = () => {
    signOut(auth);
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL })

      } else {
        setCurrentUser(false);
      }
    });
  };

  const values = { createUser, signIn, logOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
