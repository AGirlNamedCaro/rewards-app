import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";

const RedemptionContext = createContext(null)

export const RedemptionProvider = ({children}) => {
    const [redemptions, setRedemptions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchRedemptions()
    }, [])

    const fetchRedemptions = () => {
        axios.get("/api/redemptions")
            .then((res) => {
                setRedemptions(res.data.redemptions)
                setIsLoading(false)
            })
            .catch((e) => console.log(e))
    }

    const value = {
        redemptions,
        isLoading,
        setRedemptions
    }

    return <RedemptionContext.Provider value={value}>{children}</RedemptionContext.Provider>
}

export const useRedemption = () => useContext(RedemptionContext)