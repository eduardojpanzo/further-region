import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";


type User = {
    name:string;
    email:string;
    avatar_url:string;
}

type SignInData = {
    email:string;
    password:string;
}

type AuthContextType = {
    user:User | null;
    isAuthenticated: boolean;
    singIn:(data:SignInData)=> Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}:{children:JSX.Element}) {
    const [user, setUser] = useState<User | null>(null)
    
    const isAuthenticated = !!user;

    useEffect(()=>{
        const {'FR_token':token} = parseCookies();

        if (token) {
            recoverUserInformation().then(response=>{
                setUser(response.user)
            });
        }
    },[])

    async function singIn({email,password}:SignInData) {
        const {token, user} = await signInRequest({email,password})

        setCookie(undefined,'FR_token',token,{
            maxAge:60*60*1, //1 hour
        })

        //api.defaults.headers[`Authorization`] = `Bearer ${token}`

        setUser(user);

        Router.push('/dashboard');

    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, singIn}}>
            {children}
        </AuthContext.Provider>
    )
}