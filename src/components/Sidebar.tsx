import { 
  LayoutDashboard, 
  CreditCard, 
  FileText, 
  GitCompare, 
  ScrollText, 
  Users 
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'transactions', label: 'Transactions', icon: CreditCard },
  { id: 'gl-report', label: 'GL Reports', icon: FileText },
  { id: 'reconciliation', label: 'Reconciliation', icon: GitCompare },
  { id: 'audit', label: 'Audit Logs', icon: ScrollText },
  { id: 'users', label: 'User Management', icon: Users },
];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <div className="w-64 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white flex flex-col">
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
        <p className="text-xs text-[#dab2ff] mt-1">Financial Management</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
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
    </div>
  );
}