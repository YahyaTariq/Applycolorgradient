import { useState } from 'react';
import { Search, Download } from 'lucide-react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface PaymentListProps {
  item: any;
}

const payments = [
  { id: 1, name: 'Ali Ahmed', rollNo: '2021-CS-001', amount: 5000, status: 'paid', date: '2025-01-20 14:30', method: 'Card' },
  { id: 2, name: 'Sara Khan', rollNo: '2021-CS-002', amount: 5000, status: 'paid', date: '2025-01-20 12:15', method: 'Bank' },
  { id: 3, name: 'Hassan Ali', rollNo: '2021-CS-003', amount: 5000, status: 'pending', date: null, method: null },
  { id: 4, name: 'Fatima Malik', rollNo: '2021-CS-004', amount: 5000, status: 'paid', date: '2025-01-19 16:45', method: 'Card' },
  { id: 5, name: 'Usman Sheikh', rollNo: '2021-CS-005', amount: 5000, status: 'pending', date: null, method: null },
  { id: 6, name: 'Ayesha Raza', rollNo: '2021-CS-006', amount: 5000, status: 'paid', date: '2025-01-19 10:20', method: 'Bank' },
  { id: 7, name: 'Ahmed Khan', rollNo: '2021-CS-007', amount: 5000, status: 'pending', date: null, method: null },
  { id: 8, name: 'Zainab Ali', rollNo: '2021-CS-008', amount: 5000, status: 'paid', date: '2025-01-18 15:30', method: 'Card' },
];

export function PaymentList({ item }: PaymentListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'paid' | 'unpaid'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPayments = payments.filter(payment => {
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'paid' ? payment.status === 'paid' :
      payment.status === 'pending';
    
    const matchesSearch = 
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const paidCount = payments.filter(p => p.status === 'paid').length;
  const unpaidCount = payments.filter(p => p.status === 'pending').length;

  return (
    <div className="p-4 lg:p-0 space-y-4 pb-8 lg:pb-0 max-w-4xl lg:mx-0">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search by name or roll number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-2.5 rounded-lg text-sm transition-colors ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          All ({payments.length})
        </button>
        <button
          onClick={() => setActiveTab('paid')}
          className={`flex-1 py-2.5 rounded-lg text-sm transition-colors ${
            activeTab === 'paid'
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Paid ({paidCount})
        </button>
        <button
          onClick={() => setActiveTab('unpaid')}
          className={`flex-1 py-2.5 rounded-lg text-sm transition-colors ${
            activeTab === 'unpaid'
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Unpaid ({unpaidCount})
        </button>
      </div>

      {/* Export Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
        <Download className="w-4 h-4" />
        Export to CSV
      </button>

      {/* Payment List */}
      <div className="space-y-2">
        {filteredPayments.map((payment) => (
          <Card key={payment.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <p className="text-gray-900">{payment.name}</p>
                <p className="text-sm text-gray-500">{payment.rollNo}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  payment.status === 'paid'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {payment.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-900">PKR {payment.amount.toLocaleString()}</span>
              {payment.date && (
                <span className="text-gray-500">
                  {payment.method} • {payment.date.split(' ')[0]}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredPayments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No payments found</p>
        </div>
      )}
    </div>
  );
}