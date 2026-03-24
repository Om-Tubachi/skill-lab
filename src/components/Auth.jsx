import React from 'react'
import {useState} from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import {useAuth} from "../context/AuthContext.jsx";


const Auth = () => {
    const [login, setLogin] = useState(true)
    const {error, response} = useAuth()

    return (
        <div className="auth">
            {error && <p className="error">{error}</p>}
            {response && <p className="success">{response}</p>}
            <div className='buttons'>
                <button
                    className={`btn ${login ? 'active' : ''}`}
                    onClick={() => setLogin(true)}
                >
                    login
                </button>
                <button
                    className={`btn ${!login ? 'active' : ''}`}
                    onClick={() => setLogin(false)}
                >
                    sign up
                </button>
            </div>
            {login ? <Login/> : <Signup/>}
        </div>
    )
}
export default Auth
