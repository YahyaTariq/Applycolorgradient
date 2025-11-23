import { useState } from 'react';

interface LoginPageProps {
  onLogin: (role?: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <h1 
            className="text-5xl mb-3 bg-clip-text font-['Arimo',sans-serif]"
            style={{ 
              WebkitTextFillColor: "transparent", 
              backgroundImage: "linear-gradient(90deg, rgb(194, 122, 255) 0%, rgb(124, 134, 255) 50%, rgb(173, 70, 255) 100%)",
              WebkitBackgroundClip: "text"
            }}
          >
            FlashPoint
          </h1>
          <p className="text-[#dab2ff]">Financial Management System</p>
        </div>

        {/* Login Card */}
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-3xl p-8 border border-[rgba(255,255,255,0.2)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <h2 className="text-white text-center mb-6">Admin Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.95)] border border-[#d1d5dc] shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.95)] border border-[#d1d5dc] shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <button type="button" className="text-[#dab2ff] hover:text-purple-300">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-b from-[#9810fa] to-[#432dd7] text-white shadow-[0px_10px_15px_-3px_rgba(152,16,250,0.3)] hover:opacity-90 transition-opacity"
            >
              Login
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[rgba(255,255,255,0.2)]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-transparent text-sm text-[rgba(255,255,255,0.6)]">
                  For demo purposes
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onLogin}
              className="w-full py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] text-white text-sm hover:bg-[rgba(255,255,255,0.15)] transition-colors"
            >
              Login as Admin (Demo)
            </button>

            <button
              type="button"
              onClick={() => onLogin('treasurer')}
              className="w-full py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] text-white text-sm hover:bg-[rgba(255,255,255,0.15)] transition-colors"
            >
              Login as Treasurer (Demo)
            </button>

            <button
              type="button"
              onClick={() => onLogin('student')}
              className="w-full py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] text-white text-sm hover:bg-[rgba(255,255,255,0.15)] transition-colors"
            >
              Login as Student (Demo)
            </button>
          </form>
        </div>

        <p className="text-center text-[rgba(255,255,255,0.5)] text-sm mt-8">
          © 2025 FlashPoint • Financial Management
        </p>
      </div>
    </div>
  );
}