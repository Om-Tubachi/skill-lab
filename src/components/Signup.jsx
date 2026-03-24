import React, {useState} from 'react'
import {useAuth} from "../context/AuthContext.jsx";

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signupUser, error, response, user} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser(email, password, username)
    }

    return (
        <>
            {!user && <div className='signup-container'>
                {error && <p>{error}</p> || response && <p>{response}</p>}
                <form id='form' onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
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
                    <button type="submit">Sign-up</button>
                </form>


            </div>}
        </>

    )
}
export default Signup
