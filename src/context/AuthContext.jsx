import React, {useState} from "react";
import {useContext, useEffect} from "react";


const UserContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const Users = {
        'john@gmail.com': {
            password: 'password1',
            username: 'user1',
        },
        'harry@gmail.com': {
            password: 'password1',
            username: 'user2',
        },
    }
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const loginUser = (email, password) => {
        console.log(Object.keys(Users))
        if(!(email || !password)){
            setError("Email or password cannot be empty");
            return null
        }
        console.log(email, password);

        if(Users[email] === undefined){
            setResponse("sign up before login");
            return null
        }

        if(password !== Users[email].password){
            setResponse("Incorrect password")
            return null
        }

        setUser({
            email,
            username: Users[email].username,
        })
        setResponse('Login completed')
    }

    const signupUser = (email, password, username) => {
        if(!email || !password || !username){
            setError("Email or password or username cannot be empty");
            return null
        }

        if(Users[email] !== undefined){
            setResponse('Login, already registered')
            return null
        }

        Users[email] = {
            password,
            username,
        }
        setUser({
            email,
            username
        })

        setResponse('Signup completed')
        loginUser({email, password})

    }

    return (
        <UserContext.Provider value={{
            user,
            error,
            response,
            loginUser,
            signupUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(UserContext);
    if(!context){
        return <div>Auth context can only be used inside provider</div>
    }
    return context;
}
