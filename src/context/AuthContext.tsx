import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

interface ContextTypes {
  createUser: (email: string, password: string) => Promise<any>;
  userLogin: (email: string, password: string) => Promise<any>;
  user: User | undefined | null;
}

interface PropTypes {
  children: JSX.Element;
}

const UserContext = createContext<ContextTypes>({
  user: null,
  createUser: async () => {},
  userLogin: async () => {},
});

export const AuthContextProvider = ({ children }: PropTypes) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  // create the user on firebase
  const createUser = (email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const userLogin = (email:string, password:string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser, userLogin, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
