import { createContext, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    

    //google auth provider
    const googleProvider = new GoogleAuthProvider();


     // google login or signup
     const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

     // Signup user with email, password
     const signUp = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
      }


    const authInfo = {
        user,
        loading,
        handleGoogleLogin,
        signUp
    } 
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider