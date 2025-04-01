import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
export const MembershipPage: React.FC = () => {
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Membership</h1>
          <p className="text-xl max-w-3xl">
            Join our coalition of microlending and cooperative institutions and
            access a wide range of benefits and resources.
          </p>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Membership Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Networking & Collaboration
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Access to a network of over 100 microlending and cooperative
                    institutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Quarterly networking events and annual conference
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Collaborative partnerships for service delivery and resource
                    sharing
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Training & Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Regular workshops and training sessions on industry best
                    practices
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Access to online learning resources and webinars
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Leadership development programs for staff and management
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advocacy & Representation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Collective voice in policy discussions with regulatory
                    bodies
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Representation at industry forums and government
                    consultations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Regular policy updates and compliance guidance
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Resources & Tools
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Access to research reports and market analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Standardized operational templates and documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Digital tools for financial management and reporting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Membership Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Membership Tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-center pb-8 mb-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Standard
                </h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₦100,000
                  </span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <p className="text-gray-600">
                  For small microlending institutions and cooperatives
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Basic membership benefits
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Access to quarterly networking events
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Online resources and templates
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-700 relative">
              <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="text-center pb-8 mb-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium
                </h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₦250,000
                  </span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <p className="text-gray-600">
                  For medium-sized institutions with growing operations
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">All Standard benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Priority access to training programs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Representation in working groups
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Enhanced digital tools and resources
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-center pb-8 mb-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₦500,000
                  </span>
                  <span className="text-gray-500 ml-1">/year</span>
                </div>
                <p className="text-gray-600">
                  For established institutions with significant operations
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">All Premium benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Executive leadership training
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Board representation opportunity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    Customized support and consulting
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Register
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete the online registration form with your institution's
                  details
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Submit Documents
                </h3>
                <p className="text-gray-600 text-sm">
                  Upload required documentation for verification
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600 text-sm">
                  Application review and approval by the membership committee
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Payment
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete membership payment and receive your certificate
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to="/register" className="px-8 py-4 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition">
                Start Application Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Who is eligible for membership?
              </h3>
              <p className="text-gray-600">
                Any registered microlending institution, cooperative society, or
                similar financial institution operating in Nigeria is eligible
                to apply for membership.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How long does the application process take?
              </h3>
              <p className="text-gray-600">
                The standard application process takes approximately 2-3 weeks
                from submission to approval, depending on the completeness of
                documentation provided.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I upgrade my membership tier later?
              </h3>
              <p className="text-gray-600">
                Yes, members can upgrade their membership tier at any time by
                paying the difference in fees. Upgrades take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What documents are required for application?
              </h3>
              <p className="text-gray-600">
                Required documents include registration certificates,
                operational licenses, financial statements, and proof of
                address. A detailed checklist is provided during the application
                process.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-2xl overflow-hidden shadow-xl text-center py-16 px-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to join CMCIN?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your application today and become part of Nigeria's leading
              coalition of microlending and cooperative institutions.
            </p>
            <Link to="/register" className="inline-block px-8 py-4 bg-white text-blue-700 rounded-md font-medium text-lg hover:bg-gray-100 transition">
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>
    </div>;
};