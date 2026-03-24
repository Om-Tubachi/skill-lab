import {useState} from 'react'
import './App.css'
import Auth from "./components/Auth.jsx";
import {useAuth} from "./context/AuthContext.jsx";
import Hello from "./components/Hello.jsx";

function App() {
    const {user} = useAuth()
    return (<>
        {!user ? <div>
                <Auth/>
            </div> :
            <div>
                <Hello/>
            </div>}

    </>)
}

export default App
