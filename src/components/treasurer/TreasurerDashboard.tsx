import { Plus, Calendar, Receipt, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';

interface TreasurerDashboardProps {
  onNavigate: (page: any, item?: any) => void;
}

const recentPayments = [
  { id: 1, name: 'Ali Ahmed', event: 'Tech Fest 2025', amount: 5000, status: 'paid', time: '5 mins ago' },
  { id: 2, name: 'Sara Khan', event: 'Society Dues Q1', amount: 3000, status: 'paid', time: '12 mins ago' },
  { id: 3, name: 'Hassan Ali', event: 'Sports Gala', amount: 2500, status: 'pending', time: '1 hour ago' },
];

export function TreasurerDashboard({ onNavigate }: TreasurerDashboardProps) {
  return (
    <div className="p-4 lg:p-0 space-y-6 pb-24 lg:pb-0">
      {/* Header */}
      <div>
        <h1 
          className="text-3xl bg-clip-text mb-1 lg:hidden"
          style={{ 
            WebkitTextFillColor: "transparent", 
            backgroundImage: "linear-gradient(90deg, rgb(194, 122, 255) 0%, rgb(124, 134, 255) 50%, rgb(173, 70, 255) 100%)",
            WebkitBackgroundClip: "text"
          }}
        >
          FlashPoint
        </h1>
        <p className="text-gray-600 lg:hidden">Treasurer Dashboard</p>
      </div>

      {/* Create Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onNavigate('create-event')}
          className="p-6 bg-gradient-to-br from-[#9810fa] to-[#432dd7] text-white rounded-2xl shadow-lg hover:opacity-90 transition-opacity text-left"
        >
          <Plus className="w-8 h-8 mb-3" />
          <p className="text-sm">Create Event</p>
        </button>
        <button
          onClick={() => onNavigate('create-due')}
          className="p-6 bg-gradient-to-br from-[#7c86ff] to-[#5a67d8] text-white rounded-2xl shadow-lg hover:opacity-90 transition-opacity text-left"
        >
          <Plus className="w-8 h-8 mb-3" />
          <p className="text-sm">Create Society Due</p>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 rounded-full mb-2">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-gray-900">12</p>
            <p className="text-xs text-gray-500">Active Events</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-blue-100 rounded-full mb-2">
              <Receipt className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-900">8</p>
            <p className="text-xs text-gray-500">Active Dues</p>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-gray-900">PKR 1.2M</p>
            <p className="text-xs text-gray-500">Collected</p>
          </div>
        </Card>
      </div>

      {/* Recent Payments */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900">Recent Payments</h3>
          <button className="text-sm text-purple-600">View All</button>
        </div>
        <div className="space-y-2">
          {recentPayments.map((payment) => (
            <Card key={payment.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-900">{payment.name}</p>
                  <p className="text-sm text-gray-500">{payment.event}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">PKR {payment.amount.toLocaleString()}</p>
                  <div className="flex items-center justify-end gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        payment.status === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                    <span className="text-xs text-gray-400">{payment.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}