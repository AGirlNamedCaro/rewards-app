import React from 'react'
import Logo from "./shared/Logo";
import {useUser} from "../contexts/UserContext";

const UserDashboard = () => {
    const {logout} = useUser();
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
            </div>
        </>
    )
}

export default UserDashboard