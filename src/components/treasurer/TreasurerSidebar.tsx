import { 
  Home, 
  Calendar, 
  Receipt, 
  Plus,
  Settings
} from 'lucide-react';

interface TreasurerSidebarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'dues', label: 'Society Dues', icon: Receipt },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const createItems = [
  { id: 'create-event', label: 'Create Event', icon: Plus, gradient: 'from-[#9810fa] to-[#432dd7]' },
  { id: 'create-due', label: 'Create Society Due', icon: Plus, gradient: 'from-[#7c86ff] to-[#5a67d8]' },
];

export function TreasurerSidebar({ currentPage, onNavigate }: TreasurerSidebarProps) {
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
        <h1 
          className="text-2xl bg-clip-text"
          style={{ 
            WebkitTextFillColor: "transparent", 
            backgroundImage: "linear-gradient(90deg, rgb(194, 122, 255) 0%, rgb(124, 134, 255) 50%, rgb(173, 70, 255) 100%)",
            WebkitBackgroundClip: "text"
          }}
        >
          FlashPoint
        </h1>
        <p className="text-xs text-[#dab2ff] mt-1">Treasurer Portal</p>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-[rgba(255,255,255,0.1)]">
        <p className="text-xs text-[rgba(255,255,255,0.5)] mb-3 px-4">QUICK ACTIONS</p>
        <div className="space-y-2">
          {createItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-xs text-[rgba(255,255,255,0.5)] mb-3 px-4">MENU</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white'
                  : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[rgba(255,255,255,0.1)]">
        <div className="px-4 py-3 bg-[rgba(255,255,255,0.05)] rounded-lg">
          <p className="text-xs text-[rgba(255,255,255,0.5)] mb-1">Logged in as</p>
          <p className="text-sm text-white">Treasurer</p>
          <p className="text-xs text-[#dab2ff]">treasurer@flashpoint.edu</p>
        </div>
      </div>
    </div>
  );
}