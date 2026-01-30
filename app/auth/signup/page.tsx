import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up - Cholo',
  description: 'Create your Cholo account and start exploring Bangladesh',
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Cholo and unlock exclusive travel experiences"
    >
      <SignupForm />
    </AuthLayout>
  );
}
