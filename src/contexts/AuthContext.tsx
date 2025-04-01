import React, { useState, createContext, useContext } from 'react';
interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'admin';
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & {
    password: string;
  }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  // Mock login function - would connect to backend in real implementation
  const login = async (email: string, password: string) => {
    // Simulate API call
    console.log('Logging in with', email, password);
    // Mock successful login
    setUser({
      id: '1',
      name: 'Test User',
      email,
      role: email.includes('admin') ? 'admin' : 'member'
    });
  };
  // Mock register function
  const register = async (userData: Partial<User> & {
    password: string;
  }) => {
    // Simulate API call
    console.log('Registering user', userData);
    // Mock successful registration
    setUser({
      id: '2',
      name: userData.name || 'New User',
      email: userData.email || '',
      role: 'member'
    });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};