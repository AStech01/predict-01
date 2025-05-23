import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background p-4">
      <div className="w-full max-w-md">
        <LoginForm />
        <div className="flex justify-between items-center text-xs text-gray-500 px-4 py-4 bg-gray-100">
  <p>© all rights reserved</p>
  <a href="#" className="hover:underline">Privacy policy</a>
</div>
      </div>
    </main>
  );
}

