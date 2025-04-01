import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    registrationNumber: '',
    membershipType: 'standard'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const {
    register
  } = useAuth();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validateStep1 = () => {
    if (!formData.institutionName || !formData.contactPerson || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };
  const validateStep2 = () => {
    if (!formData.password || !formData.confirmPassword || !formData.address || !formData.registrationNumber) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };
  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setError('');
      setStep(2);
    }
  };
  const prevStep = () => {
    setStep(1);
    setError('');
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) {
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      await register({
        name: formData.institutionName,
        email: formData.email,
        password: formData.password
      });
      navigate('/member');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Register for Membership
          </h2>
          <p className="mt-2 text-gray-600">
            Join the Coalition of Microlending and Cooperative Institutions in
            Nigeria
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex-1 ${step >= 1 ? 'text-blue-700' : 'text-gray-400'}`}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <span className="font-medium">Institution Details</span>
              </div>
            </div>
            <div className="w-16 h-0.5 bg-gray-200"></div>
            <div className={`flex-1 ${step >= 2 ? 'text-blue-700' : 'text-gray-400'}`}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <span className="font-medium">Account Setup</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 md:p-8">
          {error && <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-sm text-red-700">{error}</p>
            </div>}
          <form onSubmit={handleSubmit}>
            {step === 1 && <div className="space-y-6">
                <div>
                  <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">
                    Institution Name *
                  </label>
                  <input type="text" id="institutionName" name="institutionName" value={formData.institutionName} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person's Name *
                  </label>
                  <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={nextStep} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Next
                  </button>
                </div>
              </div>}
            {step === 2 && <div className="space-y-6">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Institution Address *
                  </label>
                  <textarea id="address" name="address" rows={3} value={formData.address} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Registration Number *
                  </label>
                  <input type="text" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-1">
                    Membership Type *
                  </label>
                  <select id="membershipType" name="membershipType" value={formData.membershipType} onChange={handleChange} className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="standard">Standard - ₦100,000/year</option>
                    <option value="premium">Premium - ₦250,000/year</option>
                    <option value="enterprise">
                      Enterprise - ₦500,000/year
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password *
                  </label>
                  <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters long
                  </p>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password *
                  </label>
                  <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 bg-white border focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={prevStep} className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Back
                  </button>
                  <button type="submit" disabled={isLoading} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300">
                    {isLoading ? 'Submitting...' : 'Register'}
                  </button>
                </div>
              </div>}
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-700 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>;
};