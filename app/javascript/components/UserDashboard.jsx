import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDashboardLayout from './UserDashboardLayout';
import RewardsPage from './RewardsPage';
import RedeemHistoryPage from './RedeemHistoryPage';

const UserDashboard = () => {
    return (
        <Routes>
            <Route path="/" element={<UserDashboardLayout />}>
                <Route index element={<RewardsPage />} />
                <Route path="redeem-history" element={<RedeemHistoryPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
};

export default UserDashboard;
