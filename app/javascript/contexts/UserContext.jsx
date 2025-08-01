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

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)