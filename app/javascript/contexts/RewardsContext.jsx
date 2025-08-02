import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";

const RewardsContext = createContext(null)

export const RewardsProvider = ({children}) => {
    const [rewards, setRewards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("/api/rewards")
            .then((res) => {
                setRewards(res.data.rewards)
                setIsLoading(false)
            })
            .catch((e) => console.log(e))
    }, [])


    const value = {
        rewards,
        isLoading
    }

    return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export const useRewards = () => useContext(RewardsContext)