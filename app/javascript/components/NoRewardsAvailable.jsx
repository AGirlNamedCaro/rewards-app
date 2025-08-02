import React from 'react'

const NoRewardsAvailable = () => {
    return (
        <div
            className="flex-1 flex flex-col items-center justify-center relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            <div role="status">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="gray" stroke-width="4"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="28"/>
                    <line x1="16" y1="16" x2="48" y2="48"/>
                </svg>
            </div>
            <span className="pt-2 block text-lg font-lora font-semibold text-gray-900">No available rewards at the moment! Please check back later</span>
        </div>
    )
}

export default NoRewardsAvailable