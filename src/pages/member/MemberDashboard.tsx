import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, FileTextIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
export const MemberDashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  // Mock data - would come from API in real implementation
  const membershipData = {
    status: 'Active',
    type: 'Premium',
    expiryDate: '2024-12-31',
    memberSince: '2022-05-15',
    nextPayment: '2023-12-31',
    amount: '₦250,000'
  };
  const recentPayments = [{
    id: 'INV-2023-001',
    date: '2023-01-15',
    amount: '₦250,000',
    status: 'Paid'
  }, {
    id: 'INV-2022-002',
    date: '2022-01-15',
    amount: '₦200,000',
    status: 'Paid'
  }, {
    id: 'INV-2021-003',
    date: '2021-01-15',
    amount: '₦200,000',
    status: 'Paid'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Member Dashboard</h1>
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
          Your membership is currently{' '}
          <span className="font-medium text-green-600">Active</span>. Your next
          payment is due on {membershipData.nextPayment}.
        </p>
      </div>
      {/* Membership Status */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Membership Information
          </h3>
        </div>
        <div className="p-6">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
            <div>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 flex items-center">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                {membershipData.status}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Membership Type
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {membershipData.type}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Member Since
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {membershipData.memberSince}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Expiry Date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {membershipData.expiryDate}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Next Payment
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {membershipData.nextPayment}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Payment Amount
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {membershipData.amount}
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">
              Need to update your information?
            </span>
            <Link to="/member/profile" className="text-sm font-medium text-blue-700 hover:text-blue-500">
              Update Profile
            </Link>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <CreditCardIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Make a Payment
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Pay your membership dues quickly and securely.
          </p>
          <Link to="/member/payments" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            Go to Payments
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <FileTextIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            View Certificates
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Download and view your membership certificates.
          </p>
          <Link to="/member/certificates" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            View Certificates
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
            <AlertCircleIcon className="h-6 w-6 text-blue-700" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Get Support
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Need help? Contact our support team.
          </p>
          <a href="mailto:support@cmcin.org" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            Contact Support
          </a>
        </div>
      </div>
      {/* Recent Payments */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Payments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice ID
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
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      <CheckCircleIcon className="h-4 w-4 mr-1" />
                      {payment.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <Link to="/member/payments" className="text-sm font-medium text-blue-700 hover:text-blue-500">
            View all payments
          </Link>
        </div>
      </div>
    </div>;
};