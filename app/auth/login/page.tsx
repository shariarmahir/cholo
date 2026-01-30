import AuthLayout from '@/components/AuthLayout';
import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Log In - Cholo',
  description: 'Log in to your Cholo account',
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to your Cholo account"
    >
      <LoginForm />
    </AuthLayout>
  );
}
