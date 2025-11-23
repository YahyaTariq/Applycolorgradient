import { Plus, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface DuesListProps {
  onNavigate: (page: any, item?: any) => void;
}

const dues = [
  { 
    id: 1, 
    name: 'Society Dues Q1 2025', 
    deadline: '2025-03-31', 
    amount: 3000, 
    paid: 89, 
    unpaid: 45, 
    status: 'active',
    type: 'due'
  },
  { 
    id: 2, 
    name: 'Library Membership', 
    deadline: '2025-02-28', 
    amount: 1500, 
    paid: 112, 
    unpaid: 23, 
    status: 'active',
    type: 'due'
  },
  { 
    id: 3, 
    name: 'Lab Equipment Fee', 
    deadline: '2025-01-15', 
    amount: 2000, 
    paid: 156, 
    unpaid: 0, 
    status: 'closed',
    type: 'due'
  },
];

export function DuesList({ onNavigate }: DuesListProps) {
  return (
    <div className="p-4 lg:p-0 space-y-4 pb-24 lg:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <h2 className="text-gray-900">Society Dues</h2>
          <p className="text-sm text-gray-500">Manage society dues</p>
        </div>
        <button
          onClick={() => onNavigate('create-due')}
          className="p-3 lg:ml-auto bg-gradient-to-br from-[#7c86ff] to-[#5a67d8] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-gradient-to-r from-[#7c86ff] to-[#5a67d8] text-white rounded-lg text-sm whitespace-nowrap">
          All Dues
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm whitespace-nowrap hover:bg-gray-50">
          Active
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm whitespace-nowrap hover:bg-gray-50">
          Closed
        </button>
      </div>

      {/* Dues List */}
      <div className="space-y-3">
        {dues.map((due) => (
          <Card
            key={due.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate('due-details', due)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">{due.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {due.deadline}</span>
                </div>
              </div>
              <Badge variant={due.status === 'active' ? 'default' : 'secondary'}>
                {due.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Amount</p>
                <p className="text-sm text-gray-900">PKR {due.amount.toLocaleString()}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="text-xs text-green-600 mb-1">Paid</p>
                <p className="text-sm text-green-700">{due.paid}</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-600 mb-1">Unpaid</p>
                <p className="text-sm text-orange-700">{due.unpaid}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}