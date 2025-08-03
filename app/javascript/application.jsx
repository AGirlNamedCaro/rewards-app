import React from 'react'
import {createRoot} from 'react-dom/client'
import Welcome from './components/Welcome'
import {UserProvider, useUser} from "./contexts/UserContext";
import {RewardsProvider} from "./contexts/RewardsContext";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter} from "react-router-dom";
import UserDashboard from "./components/UserDashboard";
import {RedemptionProvider} from "./contexts/RedemptionContext";

const App = () => {
    const {user} = useUser()
    return user ? <UserDashboard/> : <Welcome/>
}
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('react-root')
    if (!container) return;
    const root = createRoot(container)
    root.render(
        <UserProvider>
            <RedemptionProvider>
                <RewardsProvider>
                    <BrowserRouter>
                        <ToastContainer/>
                        <App/>
                    </BrowserRouter>
                </RewardsProvider>
            </RedemptionProvider>
        </UserProvider>
    )
})