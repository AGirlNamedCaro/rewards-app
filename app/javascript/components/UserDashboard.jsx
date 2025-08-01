import React from 'react'
import Logo from "./shared/Logo";
import {useUser} from "../contexts/UserContext";
import CountUp from "react-countup";

const UserDashboard = () => {
    const {logout, user} = useUser();
    return (
        <>
            <div className="min-h-full">
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
                                className="secondary-button">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 px-8">
                    <dl className="max-w-sm">
                        <div
                            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 border border-gray-300">
                            <dt className="truncate text-sm font-medium text-gray-500">Current point balance</dt>
                            <dd className="text-5xl font-extrabold tracking-tight text-orange-500"><CountUp
                                end={user.points}/></dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default UserDashboard