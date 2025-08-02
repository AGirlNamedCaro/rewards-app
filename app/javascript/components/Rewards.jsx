import React from 'react'
import Loading from "./Loading";
import {useRewards} from "../contexts/RewardsContext";
import RewardCard from "./RewardCard";
import NoRewardsAvailable from "./NoRewardsAvailable";
import PatternBackground from "./PatternBackground";

const Rewards = () => {
    const {rewards, isLoading} = useRewards()
    return (
        <div className="py-4">
            {isLoading ? <Loading/> : (
                <div className='py-4'>
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h1 className='text-5xl font-semibold text-gray-700 py-4'>Available rewards</h1>
                        {rewards.length === 0 ? (
                            <NoRewardsAvailable/>
                        ): (
                            <div
                                className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {rewards.map((reward) => {
                                    return <RewardCard reward={reward}/>
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )

}

export default Rewards