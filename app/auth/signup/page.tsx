import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up - Cholo',
  description: 'Create your Cholo account',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0FB9C6] flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Logo Only (No "Cholo" text) */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <img 
                  src="/logo/logo.png" 
                  alt="Cholo Logo" 
                  className="h-16 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-16 h-16 bg-gradient-to-br from-[#0A3C78] to-[#0FB9C6] rounded-xl flex items-center justify-center shadow-sm';
                    fallback.innerHTML = '<span class="text-white font-bold text-2xl">C</span>';
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join Cholo and unlock exclusive travel experiences</p>
          </div>

          <SignupForm />

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
          <p className="text-white">
            Need help?{' '}
            <a href="#" className="text-white hover:text-gray-200 font-semibold transition-colors underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}