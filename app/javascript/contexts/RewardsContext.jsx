import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import {toast} from "react-toastify";
import {useUser} from "./UserContext";
import {useRedemption} from "./RedemptionContext";

const RewardsContext = createContext(null)

export const RewardsProvider = ({children}) => {
    const [rewards, setRewards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)
    const {setUser} = useUser()
    const {setRedemptions} = useRedemption()

    const fetchRewards = () => {
        axios.get(`/api/rewards?page=${page}`)
            .then((res) => {
                setRewards(res.data.rewards)
                setPagination(res.data.pagy)
                setIsLoading(false)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        fetchRewards(page)
    }, [page])


    const redeemReward = async (rewardId) => {
        try {
            const response = await axios.post("/api/redemptions", {reward_id: rewardId});
            fetchRewards()
            const res = await axios.get("/api/current_user");
            setUser(res.data);
            const redemptionResponse = await axios.get("/api/redemptions");
            setRedemptions(redemptionResponse.data.redemptions);
            toast.success("Reward redeemed successfully!");

        } catch (err) {
            toast.error("Redemption failed", err);
        }
    };


    const value = {
        rewards,
        isLoading,
        redeemReward,
        pagination,
        setPagination,
        setPage
    }

    return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export const useRewards = () => useContext(RewardsContext)