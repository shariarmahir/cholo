'use client';

import { useState } from 'react';
import { Mail, Lock, User, MapPin, Phone, FileText, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const roles = [
  { id: 'tourist', label: 'Tourist', icon: '🧳' },
  { id: 'guide', label: 'Tour Guide', icon: '🗺️' },
  { id: 'hotel-owner', label: 'Hotel Owner', icon: '🏨' },
  { id: 'transport', label: 'Transport Provider', icon: '🚗' },
  { id: 'shopkeeper', label: 'Shopkeeper', icon: '🛍️' },
];

const documentTypes = [
  { value: 'nid', label: 'National ID (NID)' },
  { value: 'passport', label: 'Passport' },
  { value: 'drivers-license', label: "Driver's License" },
];

interface SignupFormProps {
  onSwitchToLogin?: () => void;
  onClose?: () => void;
}

export default function SignupForm({ onSwitchToLogin, onClose }: SignupFormProps) {
  const [selectedRole, setSelectedRole] = useState('tourist');
  const [selectedDocument, setSelectedDocument] = useState('nid');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    documentNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Signup Data:', {
        ...formData,
        role: selectedRole,
        documentType: selectedDocument,
      });

      setSuccess(true);
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Cholo!</h2>
        <p className="text-gray-600 mb-4">Your account has been created successfully.</p>
        <p className="text-sm text-gray-500">Closing modal...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">Select Your Role</label>
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

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            required
            className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+880 1XX XXX XXXX"
              required
              className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Location</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Dhaka, Bangladesh"
              required
              className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Document Type</label>
          <select
            name="documentType"
            value={selectedDocument}
            onChange={(e) => setSelectedDocument(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0FB9C6] transition-all duration-200"
          >
            {documentTypes.map(doc => (
              <option key={doc.value} value={doc.value}>{doc.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            {selectedDocument === 'nid' ? 'NID Number' : selectedDocument === 'passport' ? 'Passport Number' : 'License Number'}
          </label>
          <div className="relative">
            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleInputChange}
              placeholder="1234567890"
              required
              className="pl-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
            />
          </div>
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

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            required
            className="pl-12 pr-12 h-12 focus:ring-2 focus:ring-[#0FB9C6]"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white h-12 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70"
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </Button>

      <div className="text-center pt-2">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#FF6B35] hover:text-[#FF5722] font-semibold transition-colors"
          >
            Log In
          </button>
        </p>
      </div>
    </form>
  );
}