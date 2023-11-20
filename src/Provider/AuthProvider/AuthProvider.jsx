import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userSignOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      setUser(currentUser);
      setIsLoading(false);
      const loggedUser = { email: userEmail };
      // console.log(loggedUser);
      if (currentUser) {
        axiosSecure
          .post("/jwt", loggedUser)
          .then((res) => console.log(res.data));
        // axios
        //   .post("http://localhost:5000/jwt", loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then((data) => {
        //     console.log(data.data);
        //   });
      } else {
        axiosSecure
          .post("/logout", loggedUser)
          .then((res) => console.log(res.data));
        // axios
        //   .post("http://localhost:5000/logout", loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then((data) => {
        //     console.log(data.data);
        //   });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [user, axiosSecure]);
  const authInfo = {
    user,
    isLoading,
    userSignIn,
    userSignOut,
    createUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
