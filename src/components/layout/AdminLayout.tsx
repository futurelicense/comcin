import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AdminSidebar } from '../navigation/AdminSidebar';
import { DashboardHeader } from './DashboardHeader';
export const AdminLayout: React.FC = () => {
  const {
    isAuthenticated,
    user
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect if not authenticated or not an admin
    if (!isAuthenticated || user && user.role !== 'admin') {
      navigate('/login');
    }
  }, [isAuthenticated, user, navigate]);
  return <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>;
};