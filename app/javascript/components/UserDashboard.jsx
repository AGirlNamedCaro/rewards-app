import React from 'react'
import Logo from "./shared/Logo";
import {useUser} from "../contexts/UserContext";
import Rewards from "./Rewards";
import PointsBalanceCard from "./PointsBalanceCard";

const UserDashboard = () => {
    const {logout, user} = useUser();

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="border-b border-gray-200 bg-white">
                    <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex shrink-0 items-center">
                                    <Logo/>
                                </div>
                            </div>
                            <button
                                onClick={logout}
                                className="primary-button">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 px-8">
                    <div className="max-w-sm">
                        <PointsBalanceCard points={user.points}/>
                    </div>
                    <Rewards/>
                </div>
            </div>
        </>
    )
}

export default UserDashboard