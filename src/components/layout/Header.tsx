import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isAuthenticated,
    user
  } = useAuth();
  return <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-700">CMCIN</span>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link to="/membership" className="text-gray-500 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                Membership
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            {isAuthenticated ? <div className="flex items-center space-x-4">
                <Link to={user?.role === 'admin' ? '/admin' : '/member'} className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-700">
                  <UserIcon className="h-5 w-5 mr-1" />
                  Dashboard
                </Link>
              </div> : <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-500 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                  Register
                </Link>
              </div>}
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">
              About
            </Link>
            <Link to="/membership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">
              Membership
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">
              Contact
            </Link>
            {isAuthenticated ? <Link to={user?.role === 'admin' ? '/admin' : '/member'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                Dashboard
              </Link> : <>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800">
                  Register
                </Link>
              </>}
          </div>
        </div>}
    </header>;
};