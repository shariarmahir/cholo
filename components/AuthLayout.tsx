'use client';

import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#0A3C78] to-[#0FB9C6] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <span className="text-3xl font-bold text-[#0A3C78]">Cholo</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {children}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              By continuing, you agree to our{' '}
              <a href="#" className="text-[#0FB9C6] hover:text-[#0A3C78] font-semibold transition-colors">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="#" className="text-[#0FB9C6] hover:text-[#0A3C78] font-semibold transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Need help?{' '}
            <a href="#" className="text-[#FF6B35] hover:text-[#FF5722] font-semibold transition-colors">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
