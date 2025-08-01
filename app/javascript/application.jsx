import React from 'react'
import {createRoot} from 'react-dom/client'
import Welcome from './components/Welcome'
import {UserProvider, useUser} from "./contexts/UserContext";
import UserDashboard from "./components/UserDashboard";

const App = () => {
    const user = useUser()
    console.log(user)
    return user ? <UserDashboard/> : <Welcome/>
}
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('react-root')
    const root = createRoot(container)
    root.render(
        <UserProvider>
            <App/>
        </UserProvider>
    )
})