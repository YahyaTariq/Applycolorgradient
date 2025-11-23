import { ArrowLeft, User, Edit, LogOut, Phone, BookOpen, Hash, Calendar } from 'lucide-react';
import { Card } from '../ui/card';

interface StudentProfileProps {
  onLogout: () => void;
}

export function StudentProfile({ onLogout }: StudentProfileProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#3629b7] px-4 pt-12 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-white text-xl">My Profile</p>
        </div>

        {/* Profile Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#dab2ff] to-[#c27aff] rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-[#6e11b0]" />
          </div>
          <h2 className="text-white text-xl mb-1">Abdul Mutaal</h2>
          <p className="text-[#dab2ff] text-sm">Student</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-t-[30px] -mt-10 min-h-[calc(100vh-220px)] p-4 pb-24">
        {/* Profile Information Card */}
        <Card className="p-5 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Profile Information</h3>
            <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
              <Edit className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Student Name */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-purple-100 rounded-lg">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Student Name</p>
                <p className="text-gray-900">Abdul Mutaal</p>
              </div>
            </div>

            {/* Registration Number */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-blue-100 rounded-lg">
                <Hash className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Registration Number</p>
                <p className="text-gray-900">2021-CS-001</p>
              </div>
            </div>

            {/* Degree Name */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-green-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Degree Program</p>
                <p className="text-gray-900">Bachelor of Computer Science</p>
              </div>
            </div>

            {/* Semester */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="p-2.5 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Current Semester</p>
                <p className="text-gray-900">7th Semester</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-indigo-100 rounded-lg">
                <Phone className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <p className="text-gray-900">+92 300 1234567</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity">
            <Edit className="w-5 h-5" />
            Edit Profile
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-white border-2 border-red-200 text-red-600 rounded-xl hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* App Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">FlashPoint Student Portal v1.0.0</p>
          <p className="text-xs text-gray-400 mt-1">© 2025 FlashPoint • Financial Management</p>
        </div>
      </div>
    </div>
  );
}
