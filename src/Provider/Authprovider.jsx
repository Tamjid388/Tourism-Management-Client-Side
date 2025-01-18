import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithPopup, signOut
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
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const loginWithGoogle = () => {
        setLoading(true)
        
        return signInWithPopup(auth, provider)
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
        user, loginWithGoogle, signOutUser, createUser
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    )
}
