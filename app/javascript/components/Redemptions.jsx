import React from 'react'
import {useRedemption} from "../contexts/RedemptionContext";

const Redemptions = () => {
    const {redemptions} = useRedemption();

    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
            <tr className="divide-x divide-gray-200">
                <th scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Description
                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Points Spent
                </th>
                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date Redeemed
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {
                redemptions.map((redemption) => (
                    <tr key={redemption.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900">
                            {redemption.description}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{redemption.points_spent}</td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{redemption.redeemed_at}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Redemptions;