import { createContext, useContext, useState,useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user,setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
    })
  
    return () => {
      unsubscribe();
    }
  })
  

  // create the user on firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser,user, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
