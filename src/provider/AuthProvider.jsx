import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {auth} from '../firebase/firebase.config'
import axios from "axios";
import usePublicAxios from "../hooks/usePublicAxios";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const axiosPublic = usePublicAxios()
    

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

    //   signin user with email and password
      const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

    //   when a user sign up with email and password 
      const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
          displayName: name,
          photoURL: photo
        })
      }

    //   logout user
    const logoutUser = (email,password) =>{
        setLoading(true)
        return signOut(auth)
      }

    //   user 
    useEffect(() =>{

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                // setLoading(false)
                setUser(currentUser)
                console.log("current user",currentUser)

                // jwt
              const loggedUser = currentUser?.email || user.email;
              const userEmail = { email: loggedUser}

              if(currentUser){
                axiosPublic.post("/jwt", userEmail) 
                .then(res =>{
                  // console.log(res.data)
                  if(res?.data?.token){
                    localStorage.setItem("token", res?.data?.token)
                    setLoading(false)
                  }
                })
                
              }else{
                // remove token
                localStorage.removeItem("token")
                setLoading(false)
              }


            })
        
        return () =>{
            return unSubscribe()
        }
    },[axiosPublic])


    const authInfo = {
        user,
        loading,
        handleGoogleLogin,
        signUp,
        signInUser,
        updateUserProfile,
        logoutUser
    } 
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider