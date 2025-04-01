import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, CreditCardIcon, FileTextIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
export const AdminDashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  // Mock data - would come from API in real implementation
  const dashboardStats = {
    totalMembers: 124,
    activeMembers: 118,
    pendingApplications: 7,
    totalRevenue: '₦28,750,000',
    pendingPayments: 12
  };
  const recentApplications = [{
    id: 'APP-2023-017',
    institution: 'First Microfinance Bank',
    date: '2023-06-15',
    status: 'Pending'
  }, {
    id: 'APP-2023-016',
    institution: 'Unity Cooperative Society',
    date: '2023-06-14',
    status: 'Pending'
  }, {
    id: 'APP-2023-015',
    institution: 'Prosperity Credit Union',
    date: '2023-06-12',
    status: 'Approved'
  }, {
    id: 'APP-2023-014',
    institution: 'Golden Trust Microfinance',
    date: '2023-06-10',
    status: 'Approved'
  }];
  const recentPayments = [{
    id: 'PAY-2023-045',
    institution: 'Community Trust Fund',
    date: '2023-06-15',
    amount: '₦250,000',
    status: 'Successful'
  }, {
    id: 'PAY-2023-044',
    institution: 'Grassroot Microfinance',
    date: '2023-06-14',
    amount: '₦500,000',
    status: 'Successful'
  }, {
    id: 'PAY-2023-043',
    institution: 'Allied Cooperative',
    date: '2023-06-13',
    amount: '₦100,000',
    status: 'Failed'
  }, {
    id: 'PAY-2023-042',
    institution: 'Sunrise Credit Union',
    date: '2023-06-12',
    amount: '₦250,000',
    status: 'Successful'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      {/* Welcome Card */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Welcome back, {user?.name}
        </h2>
        <p className="text-gray-600">
          You have{' '}
          <span className="font-medium text-blue-700">
            {dashboardStats.pendingApplications}
          </span>{' '}
          pending membership applications and{' '}
          <span className="font-medium text-blue-700">
            {dashboardStats.pendingPayments}
          </span>{' '}
          pending payments to review.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <UsersIcon className="h-6 w-6 text-blue-700" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Members
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {dashboardStats.totalMembers}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    <span className="sr-only">Increased by</span>
                    +4.3%
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <CheckCircleIcon className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Active Members
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {dashboardStats.activeMembers}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    <span className="sr-only">Active rate</span>
                    {Math.round(dashboardStats.activeMembers / dashboardStats.totalMembers * 100)}
                    %
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
              <AlertTriangleIcon className="h-6 w-6 text-yellow-700" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Pending Applications
                </dt>
                <dd className="text-2xl font-semibold text-gray-900">
                  {dashboardStats.pendingApplications}
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <CreditCardIcon className="h-6 w-6 text-purple-700" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Revenue
                </dt>
                <dd className="text-2xl font-semibold text-gray-900">
                  {dashboardStats.totalRevenue}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            Recent Applications
          </h3>
          <Link to="/admin/members" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institution
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentApplications.map(application => <tr key={application.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {application.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.institution}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${application.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to="#" className="text-blue-700 hover:text-blue-500">
                      Review
                    </Link>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Recent Payments */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Recent Payments</h3>
          <Link to="/admin/payments" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institution
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPayments.map(payment => <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.institution}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${payment.status === 'Successful' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <UsersIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Manage Members
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Review applications and manage existing members.
          </p>
          <Link to="/admin/members" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            Go to Members
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <CreditCardIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Manage Payments
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Review and reconcile payment transactions.
          </p>
          <Link to="/admin/payments" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            Go to Payments
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <FileTextIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Generate Reports
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Create financial and membership reports.
          </p>
          <Link to="/admin/reports" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            Go to Reports
          </Link>
        </div>
      </div>
    </div>;
};