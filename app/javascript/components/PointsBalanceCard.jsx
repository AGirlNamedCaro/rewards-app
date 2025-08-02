import React from 'react'
import CountUp from "react-countup";

const PointsBalanceCard = ({points}) => {
    return (
        <div
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-gray-300">
            <dt className="truncate text-sm font-medium text-gray-500">Current point balance</dt>
            <dd className="text-5xl font-extrabold tracking-tight text-orange-500"><CountUp
                end={points}/></dd>
        </div>
    )
}

export default PointsBalanceCard