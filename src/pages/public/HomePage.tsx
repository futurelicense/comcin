import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, UsersIcon, CreditCardIcon, ShieldIcon } from 'lucide-react';
export const HomePage: React.FC = () => {
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Coalition of Microlending and Cooperative Institutions in Nigeria
            </h1>
            <p className="text-xl mb-8">
              Empowering financial inclusion and cooperative growth across
              Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/membership" className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-gray-100 transition">
                Become a Member
              </Link>
              <Link to="/about" className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-blue-800 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
      </section>
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting microlending and cooperative institutions with
              comprehensive resources and tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <UsersIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Membership Network</h3>
              <p className="text-gray-600 mb-4">
                Join a thriving community of microlending institutions and
                cooperatives across Nigeria.
              </p>
              <Link to="/membership" className="text-blue-700 font-medium flex items-center">
                Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <CreditCardIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
              <p className="text-gray-600 mb-4">
                Streamlined membership and subscription payments through secure
                payment gateways.
              </p>
              <Link to="/membership" className="text-blue-700 font-medium flex items-center">
                Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <ShieldIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-gray-600 mb-4">
                Official membership certification and documentation for your
                institution.
              </p>
              <Link to="/membership" className="text-blue-700 font-medium flex items-center">
                Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 md:flex items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to join CMCIN?
                </h2>
                <p className="text-blue-100 mb-0 md:text-lg">
                  Apply for membership today and start enjoying the benefits of
                  our coalition.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/register" className="block w-full md:w-auto px-8 py-4 bg-white text-blue-700 rounded-md font-medium text-center hover:bg-gray-100 transition">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News & Updates Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">News & Updates</h2>
            <Link to="#" className="text-blue-700 font-medium flex items-center">
              View all <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(item => <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-sm text-blue-700 mb-2">June 15, 2023</p>
                  <h3 className="text-xl font-bold mb-3">
                    CMCIN Announces New Partnership with Financial Regulators
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A new initiative to strengthen regulatory compliance and
                    financial inclusion across member institutions.
                  </p>
                  <Link to="#" className="text-blue-700 font-medium flex items-center">
                    Read more <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};