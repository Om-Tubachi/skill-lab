import React, {useState} from 'react'
import {useAuth} from "../context/AuthContext.jsx";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loginUser,   user} = useAuth()


    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password)
    }

    return (
        <>
            {!user && <div className='login-container'>

                <form id='form' onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>


            </div>}
        </>


    )
}
export default Login
