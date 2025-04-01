import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserIcon, CreditCardIcon, FileTextIcon } from 'lucide-react';
export const MemberSidebar: React.FC = () => {
  const location = useLocation();
  const navigation = [{
    name: 'Dashboard',
    href: '/member',
    icon: HomeIcon
  }, {
    name: 'Profile',
    href: '/member/profile',
    icon: UserIcon
  }, {
    name: 'Payments',
    href: '/member/payments',
    icon: CreditCardIcon
  }, {
    name: 'Certificates',
    href: '/member/certificates',
    icon: FileTextIcon
  }];
  return <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <span className="text-white font-bold text-lg">CMCIN Member</span>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map(item => {
              const isActive = location.pathname === item.href;
              return <Link key={item.name} to={item.href} className={`
                      ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md
                    `}>
                    <item.icon className={`
                        ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}
                        mr-3 flex-shrink-0 h-6 w-6
                      `} aria-hidden="true" />
                    {item.name}
                  </Link>;
            })}
            </nav>
          </div>
        </div>
      </div>
    </div>;
};