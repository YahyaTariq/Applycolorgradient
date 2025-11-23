import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

const transactions = [
  { id: 'TXN-2847', date: '2025-01-15', category: 'Tuition Fee', amount: 125000, status: 'completed', method: 'Credit Card' },
  { id: 'TXN-2846', date: '2025-01-15', category: 'Lab Fee', amount: 15000, status: 'completed', method: 'Debit Card' },
  { id: 'TXN-2845', date: '2025-01-14', category: 'Library Fine', amount: 500, status: 'pending', method: 'Cash' },
  { id: 'TXN-2844', date: '2025-01-14', category: 'Hostel Fee', amount: 45000, status: 'completed', method: 'Bank Transfer' },
  { id: 'TXN-2843', date: '2025-01-14', category: 'Sports Fee', amount: 8000, status: 'failed', method: 'Credit Card' },
  { id: 'TXN-2842', date: '2025-01-13', category: 'Tuition Fee', amount: 125000, status: 'completed', method: 'Debit Card' },
  { id: 'TXN-2841', date: '2025-01-13', category: 'Examination Fee', amount: 5000, status: 'completed', method: 'Credit Card' },
  { id: 'TXN-2840', date: '2025-01-12', category: 'Cafeteria', amount: 2500, status: 'completed', method: 'Cash' },
];

export function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">All Transactions</h1>
        <p className="text-gray-600">View and manage all financial transactions</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select defaultValue="all-dates">
              <SelectTrigger>
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-dates">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-categories">
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="tuition">Tuition Fee</SelectItem>
                <SelectItem value="hostel">Hostel Fee</SelectItem>
                <SelectItem value="lab">Lab Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transaction List</CardTitle>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Transaction ID</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Date</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Category</th>
                  <th className="text-right py-3 px-4 text-gray-600 text-sm">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Status</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{txn.id}</td>
                    <td className="py-3 px-4 text-gray-600">{txn.date}</td>
                    <td className="py-3 px-4 text-gray-900">{txn.category}</td>
                    <td className="py-3 px-4 text-gray-900 text-right">PKR {txn.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge variant={
                        txn.status === 'completed' ? 'default' :
                        txn.status === 'pending' ? 'secondary' :
                        'destructive'
                      }>
                        {txn.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{txn.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">Showing 1-8 of 2,847 transactions</p>
            <div className="flex items-center gap-2">
              <button 
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                3
              </button>
              <button 
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
