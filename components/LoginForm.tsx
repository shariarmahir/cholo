'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
}

export default function LoginForm({ onSwitchToSignup, onClose }: LoginFormProps) {
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
        // Optional: redirect to homepage or refresh
        // window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
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
        <p className="text-sm text-gray-500">Closing modal...</p>
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
              className={`p-3 rounded-xl border-2 transition-all duration-200 text-center ${
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
            className="w-4 h-4 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
          />
          <span className="ml-2 text-sm font-medium text-gray-700">Remember me</span>
        </label>
        <button type="button" className="text-sm font-semibold text-[#FF6B35] hover:text-[#FF5722] transition-colors">
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white h-12 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70"
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
          className="h-12 border-2 border-gray-300 hover:border-[#0FB9C6] hover:bg-[#0FB9C6]/5"
        >
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 border-2 border-gray-300 hover:border-[#0FB9C6] hover:bg-[#0FB9C6]/5"
        >
          Facebook
        </Button>
      </div>

      <div className="text-center pt-2">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-[#FF6B35] hover:text-[#FF5722] font-semibold transition-colors"
          >
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
}