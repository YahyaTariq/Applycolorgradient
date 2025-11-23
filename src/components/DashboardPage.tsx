import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CreditCard, AlertCircle, CheckCircle, Activity, Clock } from 'lucide-react';

interface DashboardPageProps {
  onNavigate?: (page: any) => void;
}

const stats = [
  {
    title: 'Total Transactions',
    value: '2,847',
    change: '+12.5%',
    icon: CreditCard,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Pending Reconciliations',
    value: '43',
    change: '-8.2%',
    icon: Activity,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Pending Events Approval',
    value: '4',
    change: 'Requires Action',
    icon: Clock,
    color: 'from-orange-500 to-orange-600',
    clickable: true,
    page: 'events-approval',
  },
];

const recentActivity = [
  { id: 1, action: 'Payment Approved', user: 'John Doe', time: '2 minutes ago', status: 'success' },
  { id: 2, action: 'CSV Export Completed', user: 'Sarah Smith', time: '15 minutes ago', status: 'info' },
  { id: 3, action: 'Reconciliation Run', user: 'Mike Johnson', time: '2 hours ago', status: 'success' },
  { id: 4, action: 'GL Report Generated', user: 'Emily Brown', time: '3 hours ago', status: 'info' },
];

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor your financial operations at a glance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={stat.title} 
              className={stat.clickable ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}
              onClick={() => stat.clickable && onNavigate && onNavigate(stat.page)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-gray-900">{stat.value}</p>
                    <p className={`text-sm mt-1 ${stat.clickable ? 'text-orange-600' : 'text-green-600'}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
              Run Reconciliation
            </button>
            <button className="p-4 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors">
              Generate GL Report
            </button>
            <button className="p-4 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors">
              Export Transactions
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('events-approval')}
              className="p-4 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
            >
              View Events Approval
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-orange-500' :
                    'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.user}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}