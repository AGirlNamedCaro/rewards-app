import React from 'react';
import {useRedemption} from "../contexts/RedemptionContext";
import Redemptions from "./Redemptions";
import Loading from "./Loading";

const RedeemHistoryPage = () => {
    const {isLoading} = useRedemption();

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto py-4">
                    <h1 className="text-base font-semibold text-gray-900">Redemption History</h1>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        { isLoading ? <Loading text="Redemptions" /> : <Redemptions/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedeemHistoryPage;
