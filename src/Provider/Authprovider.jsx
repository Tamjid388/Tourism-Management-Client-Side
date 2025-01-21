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
import { useAxiosPublic } from '../Hooks/useAxiosPublic';




export const Authcontext = createContext(null)

const auth = getAuth(app);



export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic=useAxiosPublic()
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
            if(currentUser){
                const userInfo={email:currentUser.email}
              axiosPublic.post('/jwt',userInfo)
              .then(res=>{
                if(res.data.token){
                  localStorage.setItem('access-token',res.data.token)  
                }
              })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const info = {
        user,signIn, loginWithGoogle, signOutUser, createUser,updateUserProfile,loading
    }

    return (
        <Authcontext.Provider value={info}>
            {children}
        </Authcontext.Provider>
    )
}
