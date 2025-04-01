import React from 'react';
export const AboutPage: React.FC = () => {
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About CMCIN</h1>
          <p className="text-xl max-w-3xl">
            Learn about our mission, vision, and the work we do to support
            microlending and cooperative institutions across Nigeria.
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                To strengthen and unify microlending and cooperative
                institutions across Nigeria, fostering financial inclusion and
                economic growth through collaborative efforts, shared resources,
                and regulatory advocacy.
              </p>
              <p className="text-gray-600">
                We are committed to empowering our member institutions with the
                tools, knowledge, and support needed to serve their communities
                effectively and sustainably.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                To create a robust, inclusive financial ecosystem where
                microlending and cooperative institutions thrive, driving
                economic empowerment and financial literacy across all regions
                of Nigeria.
              </p>
              <p className="text-gray-600">
                We envision a future where every Nigerian has access to
                reliable, ethical financial services through our network of
                member institutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our History
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-8 border-l-2 border-blue-700">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-700 rounded-full -ml-2"></div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  2010 - Foundation
                </h3>
                <p className="text-gray-600">
                  CMCIN was established by a group of 15 microlending
                  institutions to address common challenges and advocate for
                  better regulatory frameworks.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-700">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-700 rounded-full -ml-2"></div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  2015 - Growth & Expansion
                </h3>
                <p className="text-gray-600">
                  Membership grew to over 50 institutions, and CMCIN launched
                  its first nationwide financial literacy campaign.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-700">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-700 rounded-full -ml-2"></div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  2018 - Digital Transformation
                </h3>
                <p className="text-gray-600">
                  Implemented digital tools and resources for member
                  institutions, enhancing operational efficiency and service
                  delivery.
                </p>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-700 rounded-full -ml-2"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  2023 - Present
                </h3>
                <p className="text-gray-600">
                  Now representing over 100 institutions nationwide, CMCIN
                  continues to drive innovation and collaboration in the
                  microlending and cooperative sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => <div key={item} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  John Doe
                </h3>
                <p className="text-blue-700 font-medium mb-2">
                  Executive Director
                </p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in microfinance and
                  cooperative management.
                </p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};