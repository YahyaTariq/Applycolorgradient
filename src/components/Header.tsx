import { Bell, LogOut, User, Download } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
  onNavigate: (page: any) => void;
  exportMode?: boolean;
  onToggleExportMode?: () => void;
}

export function Header({ onLogout, onNavigate, exportMode, onToggleExportMode }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-800">Welcome back, Admin</h2>
          <p className="text-sm text-gray-500">Manage your financial operations</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] rounded-full"></span>
          </button>

          <button 
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-sm">Admin</span>
          </button>

          {onToggleExportMode && (
            <button
              onClick={onToggleExportMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                exportMode
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white hover:opacity-90'
              }`}
              title={exportMode ? 'Click to exit export mode' : 'Click to enable export mode (removes scrolling for full page capture)'}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm">{exportMode ? 'Export Mode ON' : 'Export Mode'}</span>
            </button>
          )}

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