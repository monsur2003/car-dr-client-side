import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logoutUser = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unUnsubscribed = onAuthStateChanged(auth, (currentUser) => {
         console.log("current-user", currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         return unUnsubscribed();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      logoutUser,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
