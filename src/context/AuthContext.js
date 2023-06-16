import { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    userObserver();
  }, []);

  // REGİSTER İŞLEMİ
  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Registered successfully!");
      navigate("/");
      
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // LOGİN İŞLEMİ
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Logged in successfully!");
      navigate("/");
      
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  // ÇIKIŞ İŞLEMİ
  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!")

  };

  // GİRİŞ_CIKIŞ KONTROL
  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });

        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        setCurrentUser(false);
        sessionStorage.clear();
      }
    });
  };

  const values = { createUser, signIn, logOut, currentUser, userObserver };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
