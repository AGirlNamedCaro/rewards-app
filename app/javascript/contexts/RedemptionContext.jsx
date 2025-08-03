import React, {createContext, useContext, useEffect, useState} from "react"
import axios from "axios";

const RedemptionContext = createContext(null)

export const RedemptionProvider = ({children}) => {
    const [redemptions, setRedemptions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [pagination, setPagination] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchRedemptions(page)
    }, [page])

    const fetchRedemptions = (page) => {
        axios.get(`/api/redemptions?page=${page}`)
            .then((res) => {
                setRedemptions(res.data.redemptions)
                setPagination(res.data.pagy)
                setIsLoading(false)
            })
            .catch((e) => console.log(e))
    }

    const value = {
        redemptions,
        isLoading,
        setRedemptions,
        pagination,
        setPage
    }

    return <RedemptionContext.Provider value={value}>{children}</RedemptionContext.Provider>
}

export const useRedemption = () => useContext(RedemptionContext)