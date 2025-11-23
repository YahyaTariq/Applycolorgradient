import { Bell, LogOut, User, ArrowLeft } from 'lucide-react';

interface TreasurerHeaderProps {
  onLogout: () => void;
  currentPage: string;
  onBack?: () => void;
  showBackButton?: boolean;
}

export function TreasurerHeader({ onLogout, currentPage, onBack, showBackButton }: TreasurerHeaderProps) {
  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Dashboard';
      case 'events': return 'Events';
      case 'dues': return 'Society Dues';
      case 'settings': return 'Settings';
      case 'create-event': return 'Create Event';
      case 'create-due': return 'Create Society Due';
      case 'event-details': return 'Event Details';
      case 'due-details': return 'Due Details';
      case 'payment-list': return 'Payments';
      case 'share': return 'Share';
      default: return 'Dashboard';
    }
  };

  const getPageDescription = () => {
    switch (currentPage) {
      case 'dashboard': return 'Manage events and society dues';
      case 'events': return 'View and manage all events';
      case 'dues': return 'View and manage society dues';
      case 'settings': return 'Manage your account settings';
      default: return '';
    }
  };

  const showDescription = ['dashboard', 'events', 'dues', 'settings'].includes(currentPage);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          <div>
            <h2 className="text-gray-800">{getPageTitle()}</h2>
            {showDescription && (
              <p className="text-sm text-gray-500">{getPageDescription()}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm">Treasurer</span>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
