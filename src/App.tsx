import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicLayout } from './components/layout/PublicLayout';
import { MemberLayout } from './components/layout/MemberLayout';
import { AdminLayout } from './components/layout/AdminLayout';
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';
import { MembershipPage } from './pages/public/MembershipPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { MemberDashboard } from './pages/member/MemberDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';
export function App() {
  return <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          {/* Member Routes */}
          <Route path="/member" element={<MemberLayout />}>
            <Route index element={<MemberDashboard />} />
            {/* Add more member routes as needed */}
          </Route>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            {/* Add more admin routes as needed */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>;
}