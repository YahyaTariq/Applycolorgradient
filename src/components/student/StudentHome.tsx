import { Bell, User } from 'lucide-react';

interface StudentHomeProps {
  onNavigate: (page: any) => void;
}

export function StudentHome({ onNavigate }: StudentHomeProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#3629b7] px-4 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('profile')}
            className="p-2.5 bg-[#dab2ff] rounded-full hover:opacity-90 transition-opacity"
          >
            <User className="w-6 h-6 text-[#6e11b0]" />
          </button>
          <div className="relative">
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              3
            </span>
          </div>
        </div>
        <p className="text-white text-center">Welcome, Abdul Mutaal</p>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-t-[30px] -mt-4 min-h-[calc(100vh-180px)] p-4">
        {/* Outstanding Fees Card */}
        <div className="bg-white rounded-3xl shadow-lg p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-[#f0b100] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">⚠</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-1">Outstanding Fees</p>
              <p className="text-2xl text-[#f54900] mb-1">PKR 120,000</p>
              <p className="text-sm text-gray-500">Due: 10 Jan 2026</p>
            </div>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            Pay Now
          </button>
        </div>

        {/* Quick Actions */}
        <h3 className="text-lg text-[#6e11b0] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3 mb-20">
          {/* Semester Fee */}
          <button className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 text-center">Semester Fee</p>
            </div>
          </button>

          {/* My Events & Tickets */}
          <button className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow relative">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 text-center">My Events & Tickets</p>
            </div>
            <span className="absolute top-2 right-2 w-5 h-5 bg-[#9810fa] rounded-full flex items-center justify-center text-white text-xs">
              3
            </span>
          </button>

          {/* Profile */}
          <button
            onClick={() => onNavigate('profile')}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-purple-600" />
              </div>
              <p className="text-sm text-gray-700 text-center">Profile</p>
            </div>
          </button>

          {/* Support */}
          <button className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 text-center">Support</p>
            </div>
          </button>

          {/* Cafe Payments */}
          <button className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-700 text-center">Cafe Payments</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
