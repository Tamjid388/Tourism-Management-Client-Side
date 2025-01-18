import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from 'firebase/auth';
import React, {
    createContext,
    useEffect, useState
} from 'react'


import { GoogleAuthProvider } from "firebase/auth"
import { app } from '../Firebase/firebase.config'




export const Authcontext = createContext(null)

const auth = getAuth(app);



export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const info = {
        user,signIn, loginWithGoogle, signOutUser, createUser,updateUserProfile
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    )
}
