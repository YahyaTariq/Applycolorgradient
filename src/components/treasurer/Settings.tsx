import { User, Lock, LogOut, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';

interface SettingsProps {
  onLogout: () => void;
}

export function Settings({ onLogout }: SettingsProps) {
  return (
    <div className="p-4 lg:p-0 space-y-6 pb-24 lg:pb-0 max-w-3xl lg:mx-0">
      {/* Header */}
      <div className="lg:hidden">
        <h2 className="text-gray-900 mb-1">Settings</h2>
        <p className="text-sm text-gray-500">Manage your account settings</p>
      </div>

      {/* Profile Section */}
      <Card className="p-5">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9810fa] to-[#432dd7] flex items-center justify-center text-white">
            <User className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900">Treasurer Account</p>
            <p className="text-sm text-gray-500">treasurer@flashpoint.edu</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">Edit Profile</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </Card>

      {/* Account Settings */}
      <Card className="p-5">
        <h3 className="text-gray-900 mb-4">Account Settings</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">Change Password</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </Card>

      {/* About */}
      <Card className="p-5">
        <h3 className="text-gray-900 mb-4">About</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Version</span>
            <span className="text-gray-900">1.0.0</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">App Name</span>
            <span className="text-gray-900">FlashPoint Treasurer</span>
          </div>
        </div>
      </Card>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>

      <p className="text-center text-xs text-gray-400">
        © 2025 FlashPoint • Financial Management
      </p>
    </div>
  );
}