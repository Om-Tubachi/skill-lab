import React from 'react'
import {useAuth} from "../context/AuthContext.jsx";

const Hello = () => {
    const { user } = useAuth()
    console.log(JSON.stringify(user))
    if(!user){ return null }
    return (
        <div>
            <h1>Hello! <em>{user.username}</em></h1>
        </div>
    )
}
export default Hello
