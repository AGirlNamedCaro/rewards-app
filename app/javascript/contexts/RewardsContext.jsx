import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import {toast} from "react-toastify";
import {useUser} from "./UserContext";
import {useRedemption} from "./RedemptionContext";

const RewardsContext = createContext(null)

export const RewardsProvider = ({children}) => {
    const [rewards, setRewards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isRedeeming, setIsRedeeming] = useState(false)
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)
    const {setUser} = useUser()
    const {setRedemptions} = useRedemption()

    const fetchRewards = async () => {
        try {
            const res = await axios.get(`/api/rewards?page=${page}`)
            setRewards(res.data.rewards)
            setPagination(res.data.pagy)
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching rewards:', error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRewards()
    }, [page])

    const refreshAllData = async () => {
        try {
            const [rewardsRes, userRes, redemptionsRes] = await Promise.all([
                axios.get(`/api/rewards?page=${page}`),
                axios.get("/api/current_user"),
                axios.get("/api/redemptions")
            ])

            setRewards(rewardsRes.data.rewards)
            setPagination(rewardsRes.data.pagy)
            setUser(userRes.data)
            setRedemptions(redemptionsRes.data.redemptions)
        } catch (error) {
            console.error('Error refreshing data:', error)
            toast.error("Failed to refresh data")
        }
    }

    const redeemReward = async (rewardId) => {
        if (isRedeeming) return

        setIsRedeeming(true)

        try {
            const response = await axios.post("/api/redemptions", {reward_id: rewardId})

            setRewards(prevRewards =>
                prevRewards?.filter(reward => reward.id !== rewardId) || []
            )

            await refreshAllData()

            toast.success("Reward redeemed successfully!")

        } catch (err) {
            console.error('Redemption error:', err)

            const errorMessage = err.response?.data?.error || "Redemption failed"
            toast.error(errorMessage)

            await refreshAllData()
        } finally {
            setIsRedeeming(false)
        }
    }

    const value = {
        rewards,
        isLoading,
        isRedeeming,
        redeemReward,
        pagination,
        setPagination,
        setPage,
        refreshAllData
    }

    return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export const useRewards = () => useContext(RewardsContext)