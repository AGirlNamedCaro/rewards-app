import React from 'react'
import Image from "./shared/Image";
import {useRewards} from "../contexts/RewardsContext";

const RewardCard = ({reward}) => {
    const {redeemReward} = useRewards()

    return (
        <div>
            <div className="relative">
                <div className="relative h-[17.5rem] w-full overflow-hidden rounded-lg">
                    <Image src={reward.image_url} alt={`Image for ${reward.title}`}/>
                </div>
                <div className="relative pt-4">
                    <div className="flex item-start justify-between">
                        <div>
                            <h2 className="text-sm font-medium text-gray-900">{reward.title}</h2>
                            <p>{reward.description}</p>
                        </div>
                        <p className="text-sm font-semibold text-orange-500">{reward.points_required}pts</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <button
                    onClick={() => redeemReward(reward.id)}
                    className="tertiary-button"
                >
                    Redeem
                </button>
            </div>
        </div>
    )
}

export default RewardCard