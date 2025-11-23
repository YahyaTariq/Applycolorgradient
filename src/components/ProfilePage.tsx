import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { User, Mail, Lock, Bell } from 'lucide-react';

export function ProfilePage() {
  const [name, setName] = useState('Admin User');
  const [email, setEmail] = useState('admin@flashpoint.edu');

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Admin Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9810fa] to-[#432dd7] flex items-center justify-center text-white">
                <User className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">Profile Picture</h3>
                <p className="text-sm text-gray-600 mb-2">Upload a new profile picture</p>
                <button className="px-4 py-2 text-sm text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                  Upload New Picture
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="password" placeholder="Enter current password" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="password" placeholder="Enter new password" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="password" placeholder="Confirm new password" className="pl-10" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive email updates about transactions and exceptions</p>
              </div>
              <input type="checkbox" className="rounded text-purple-600" defaultChecked />
            </label>

            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="text-gray-900">Exception Alerts</p>
                <p className="text-sm text-gray-600">Get notified when new exceptions are flagged</p>
              </div>
              <input type="checkbox" className="rounded text-purple-600" defaultChecked />
            </label>

            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="text-gray-900">Reconciliation Reports</p>
                <p className="text-sm text-gray-600">Receive daily reconciliation summary reports</p>
              </div>
              <input type="checkbox" className="rounded text-purple-600" />
            </label>

            <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div>
                <p className="text-gray-900">Weekly Digest</p>
                <p className="text-sm text-gray-600">Get a weekly summary of all financial activities</p>
              </div>
              <input type="checkbox" className="rounded text-purple-600" defaultChecked />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
          Save Changes
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
