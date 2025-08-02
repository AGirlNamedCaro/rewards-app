import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import {toast} from "react-toastify";
import {useUser} from "./UserContext";

const RewardsContext = createContext(null)

export const RewardsProvider = ({children}) => {
    const [rewards, setRewards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {setUser} = useUser()

    useEffect(() => {
        axios.get("/api/rewards")
            .then((res) => {
                setRewards(res.data.rewards)
                setIsLoading(false)
            })
            .catch((e) => console.log(e))
    }, [])


    const redeemReward = async (rewardId) => {
        try {
            const response = await axios.post("/api/redemptions", {reward_id: rewardId});
            setRewards((prev) => {
                return (prev ?? []).filter((reward) => reward.id !== rewardId);
            });

            const res = await axios.get("/api/current_user");
            setUser(res.data);
            toast.success("Reward redeemed successfully!");

        } catch (err) {
            toast.error("Redemption failed", err);
        }
    };


    const value = {
        rewards,
        isLoading,
        redeemReward
    }

    return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export const useRewards = () => useContext(RewardsContext)