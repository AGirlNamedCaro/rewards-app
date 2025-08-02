import React from 'react'

const RewardCard = ({reward}) => {
    return (
        <div key={reward.id}>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    {/*<img alt={reward.imageAlt} src={reward.imageSrc}*/}
                    {/*className="size-full object-cover"/>*/}
                </div>
                <div className="relative mt-4">
                    <h2 className="text-sm font-medium text-gray-900">{reward.title}</h2>
                    <p>{reward.description}</p>
                </div>
                <div
                    className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{reward.points_required}pts</p>
                </div>
            </div>
            <div className="mt-6">
                <a
                    href="#"
                    className="tertiary-button"
                >
                    Redeem
                </a>
            </div>
        </div>
    )
}

export default RewardCard