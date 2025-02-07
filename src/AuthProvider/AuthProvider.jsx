import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../ContextApi";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const shareInfo = {
    name: "shrabon",
    registerUser,
    user,
  };

  useEffect(() => {
    const onChangeRemove = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      onChangeRemove();
    };
  }, []);

  return (
    <AuthContext.Provider value={shareInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
