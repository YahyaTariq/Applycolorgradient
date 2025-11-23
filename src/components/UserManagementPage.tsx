import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Plus, Edit, Ban } from 'lucide-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@flashpoint.edu', role: 'admin', status: 'active' },
  { id: 2, name: 'Sarah Smith', email: 'sarah.smith@flashpoint.edu', role: 'treasurer', status: 'active' },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@flashpoint.edu', role: 'treasurer', status: 'active' },
  { id: 4, name: 'Emily Brown', email: 'emily.brown@flashpoint.edu', role: 'admin', status: 'active' },
  { id: 5, name: 'David Wilson', email: 'david.wilson@flashpoint.edu', role: 'treasurer', status: 'inactive' },
  { id: 6, name: 'Lisa Anderson', email: 'lisa.anderson@flashpoint.edu', role: 'treasurer', status: 'active' },
];

export function UserManagementPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">User & Role Management</h1>
          <p className="text-gray-600">Manage system users and their permissions</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Users</p>
            <p className="text-gray-900">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Administrators</p>
            <p className="text-gray-900">2</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Treasurers</p>
            <p className="text-gray-900">4</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Active Users</p>
            <p className="text-gray-900">5</p>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Name</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Email</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Role</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Status</th>
                  <th className="text-right py-3 px-4 text-gray-600 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{user.name}</td>
                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Ban className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Role Permissions */}
      <Card>
        <CardHeader>
          <CardTitle>Role Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-gray-900">Administrator</h3>
                  <p className="text-sm text-gray-600">Full system access and user management</p>
                </div>
                <Badge>Full Access</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {['View Transactions', 'Generate Reports', 'Run Reconciliation', 'Manage Exceptions', 'View Audit Logs', 'Manage Users'].map((perm) => (
                  <span key={perm} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {perm}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-gray-900">Treasurer</h3>
                  <p className="text-sm text-gray-600">Financial operations and reporting</p>
                </div>
                <Badge variant="secondary">Limited Access</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {['View Transactions', 'Generate Reports', 'Run Reconciliation', 'View Audit Logs'].map((perm) => (
                  <span key={perm} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
