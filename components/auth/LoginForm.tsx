'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const roles = [
  { id: 'tourist', label: 'Tourist', icon: '🧳' },
  { id: 'guide', label: 'Tour Guide', icon: '🗺️' },
  { id: 'hotel-owner', label: 'Hotel Owner', icon: '🏨' },
  { id: 'transport', label: 'Transport Provider', icon: '🚗' },
  { id: 'shopkeeper', label: 'Shopkeeper', icon: '🛍️' },
];

interface LoginFormProps {
  onSwitchToSignup?: () => void;
  onClose?: () => void;
  standalone?: boolean; // New prop for standalone page
}

export default function LoginForm({ onSwitchToSignup, onClose, standalone = false }: LoginFormProps) {
  const [selectedRole, setSelectedRole] = useState('tourist');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }
    
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Login Data:', {
        ...formData,
        role: selectedRole,
      });

      setSuccess(true);
      setTimeout(() => {
        if (onClose) onClose();
        // If standalone page, redirect to home
        if (standalone) {
          window.location.href = '/';
        }
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
        <p className="text-gray-600 mb-4">You have been logged in successfully.</p>
        <p className="text-sm text-gray-500">
          {standalone ? 'Redirecting to homepage...' : 'Closing modal...'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Login As</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {roles.map(role => (
            <button
              key={role.id}
              type="button"
              onClick={() => setSelectedRole(role.id)}
              className={`p-3 rounded-xl border-2 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] ${
                selectedRole === role.id
                  ? 'border-[#FF6B35] bg-orange-50'
                  : 'border-gray-200 hover:border-[#0FB9C6] bg-white'
              }`}
            >
              <div className="text-2xl mb-1">{role.icon}</div>
              <div className="text-xs font-semibold text-gray-900">{role.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            required
            className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            required
            className="pl-12 pr-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] rounded-full p-1"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="w-4 h-4 rounded border-gray-300 text-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]"
          />
          <span className="ml-2 text-sm font-medium text-gray-700">Remember me</span>
        </label>
        <button 
          type="button" 
          className="text-sm font-semibold text-[#FF6B35] hover:text-[#FF5722] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded px-1"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white h-12 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 focus:ring-2 focus:ring-[#FF6B35]"
      >
        {loading ? 'Logging In...' : 'Log In'}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          className="h-12 border-2 border-gray-300 hover:border-[#0FB9C6] hover:bg-[#0FB9C6]/5 focus:ring-2 focus:ring-[#0FB9C6]"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 border-2 border-gray-300 hover:border-[#0FB9C6] hover:bg-[#0FB9C6]/5 focus:ring-2 focus:ring-[#0FB9C6]"
        >
          <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </Button>
      </div>

      <div className="text-center pt-2">
        <p className="text-gray-600">
          Don't have an account?{' '}
          {standalone ? (
            <Link href="/signup" className="text-[#FF6B35] hover:text-[#FF5722] font-semibold transition-colors">
              Sign Up
            </Link>
          ) : (
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-[#FF6B35] hover:text-[#FF5722] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded px-1"
            >
              Sign Up
            </button>
          )}
        </p>
      </div>
    </form>
  );
}