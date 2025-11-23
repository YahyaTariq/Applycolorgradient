import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search } from 'lucide-react';

const auditLogs = [
  { id: 1, timestamp: '2025-01-15 14:32:15', user: 'John Doe', action: 'Payment Approved', description: 'Approved payment TXN-2847 for PKR 125,000', record: 'TXN-2847' },
  { id: 2, timestamp: '2025-01-15 14:15:42', user: 'Sarah Smith', action: 'CSV Exported', description: 'Exported transaction data for January 2025', record: 'Export-Jan-2025' },
  { id: 3, timestamp: '2025-01-15 13:45:30', user: 'System', action: 'Reconciliation Run', description: 'Automated reconciliation process completed', record: 'RECON-0115' },
  { id: 4, timestamp: '2025-01-15 13:22:18', user: 'Mike Johnson', action: 'Exception Resolved', description: 'Resolved duplicate payment exception TXN-2845', record: 'EXC-0052' },
  { id: 5, timestamp: '2025-01-15 12:58:07', user: 'Emily Brown', action: 'GL Report Generated', description: 'Generated GL report for December 2024', record: 'GL-Dec-2024' },
  { id: 6, timestamp: '2025-01-15 11:30:45', user: 'Admin', action: 'User Created', description: 'Created new user account for Jane Wilson', record: 'USER-0234' },
  { id: 7, timestamp: '2025-01-15 10:15:22', user: 'John Doe', action: 'Payment Rejected', description: 'Rejected payment TXN-2832 due to insufficient funds', record: 'TXN-2832' },
  { id: 8, timestamp: '2025-01-15 09:42:38', user: 'Sarah Smith', action: 'Category Updated', description: 'Updated transaction category from Misc to Lab Fee', record: 'TXN-2819' },
];

export function AuditLogsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Audit Logs</h1>
        <p className="text-gray-600">Track all system activities and user actions</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select defaultValue="all-users">
              <SelectTrigger>
                <SelectValue placeholder="User" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-users">All Users</SelectItem>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="sarah">Sarah Smith</SelectItem>
                <SelectItem value="mike">Mike Johnson</SelectItem>
                <SelectItem value="emily">Emily Brown</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-actions">
              <SelectTrigger>
                <SelectValue placeholder="Action Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-actions">All Actions</SelectItem>
                <SelectItem value="payment">Payment Actions</SelectItem>
                <SelectItem value="export">Export Actions</SelectItem>
                <SelectItem value="reconciliation">Reconciliation</SelectItem>
                <SelectItem value="user">User Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Timestamp</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">User</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Action Type</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Description</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Affected Record</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-600 text-sm">{log.timestamp}</td>
                    <td className="py-3 px-4 text-gray-900">{log.user}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{log.description}</td>
                    <td className="py-3 px-4 text-gray-900">{log.record}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
