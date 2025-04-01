import React from 'react';
import { Link } from 'react-router-dom';
export const Footer: React.FC = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">CMCIN</h3>
            <p className="text-gray-300 text-sm">
              Coalition of Microlending and Cooperative Institutions in Nigeria
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-white text-sm">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white text-sm">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white text-sm">
                  Member Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Lagos, Nigeria</p>
            <p className="text-gray-300 text-sm mb-2">info@cmcin.org</p>
            <p className="text-gray-300 text-sm">+234 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-sm text-center">
            &copy; {new Date().getFullYear()} Coalition of Microlending and
            Cooperative Institutions in Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};