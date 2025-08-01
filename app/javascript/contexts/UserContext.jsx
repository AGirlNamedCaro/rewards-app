import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";

const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        axios.get("/api/current_user")
            .then((res) => {
                setUser(res.data)
                isLoading(false)
            })
            .catch((e) => console.log(e))
    }, [])

    const getCsrfToken = () => {
        const el = document.querySelector('meta[name="csrf-token"]');
        return el ? el.getAttribute("content") : "";
    };

    const logout = async () => {
        try {
            await axios.delete("/users/sign_out", {
                headers: {
                    "X-CSRF-Token": getCsrfToken(),
                    "Accept": "application/json",
                },
                withCredentials: true
            })
            setUser(null)
            window.location.href = "/";
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    const value = {
        user,
        loading,
        logout
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)