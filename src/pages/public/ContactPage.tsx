import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export const ContactPage: React.FC = () => {
  return <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions or need assistance? Reach out to our team and we'll
            be happy to help.
          </p>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Financial District
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+234 123 456 7890</p>
                    <p className="mt-1 text-gray-600">+234 987 654 3210</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@cmcin.org</p>
                    <p className="mt-1 text-gray-600">membership@cmcin.org</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office Hours
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="mt-1 text-gray-600">
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-white border focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-white border focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-white border focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-white border focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Location
          </h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Map would be integrated here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How quickly can I expect a response?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 business hours.
                For urgent matters, please call our office directly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I schedule an in-person meeting?
              </h3>
              <p className="text-gray-600">
                Yes, you can schedule an appointment to meet with our team at
                our office in Lagos. Please contact us via email or phone to
                arrange a suitable time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do you have regional offices across Nigeria?
              </h3>
              <p className="text-gray-600">
                Currently, our main office is in Lagos, but we have regional
                representatives in Abuja, Port Harcourt, and Kano who can assist
                members in those areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};