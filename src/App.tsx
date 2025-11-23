import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';
import { TransactionsPage } from './components/TransactionsPage';
import { GLReportPage } from './components/GLReportPage';
import { ReconciliationPage } from './components/ReconciliationPage';
import { AuditLogsPage } from './components/AuditLogsPage';
import { UserManagementPage } from './components/UserManagementPage';
import { ProfilePage } from './components/ProfilePage';
import { EventsApprovalPage } from './components/EventsApprovalPage';
import { TreasurerApp } from './components/treasurer/TreasurerApp';
import { StudentApp } from './components/student/StudentApp';

type Page = 'login' | 'dashboard' | 'transactions' | 'gl-report' | 'reconciliation' | 'audit' | 'users' | 'profile' | 'events-approval';
type UserRole = 'admin' | 'treasurer' | 'student' | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [exportMode, setExportMode] = useState(false);

  const handleLogin = (role?: string) => {
    setIsLoggedIn(true);
    setUserRole((role as UserRole) || 'admin');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage('login');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Student Interface
  if (userRole === 'student') {
    return <StudentApp onLogout={handleLogout} />;
  }

  // Treasurer Interface
  if (userRole === 'treasurer') {
    return <TreasurerApp onLogout={handleLogout} />;
  }

  // Admin Interface
  return (
    <div className={`flex ${exportMode ? '' : 'h-screen'} bg-gray-50`}>
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onLogout={handleLogout} 
          onNavigate={setCurrentPage}
          exportMode={exportMode}
          onToggleExportMode={() => setExportMode(!exportMode)}
        />
        {exportMode && (
          <div className="bg-green-50 border-b border-green-200 px-6 py-3">
            <p className="text-sm text-green-800">
              ✅ <strong>Export Mode Active:</strong> All scrolling removed. The entire page is now visible. 
              Use <kbd className="px-2 py-1 bg-white border rounded text-xs mx-1">Cmd+Shift+4</kbd> (Mac) or Snipping Tool (Windows) to capture the full page and paste into Figma.
            </p>
          </div>
        )}
        <main className={`flex-1 ${exportMode ? '' : 'overflow-y-auto'} p-6`}>
          {currentPage === 'dashboard' && <DashboardPage onNavigate={setCurrentPage} />}
          {currentPage === 'transactions' && <TransactionsPage />}
          {currentPage === 'gl-report' && <GLReportPage />}
          {currentPage === 'reconciliation' && <ReconciliationPage />}
          {currentPage === 'events-approval' && <EventsApprovalPage />}
          {currentPage === 'audit' && <AuditLogsPage />}
          {currentPage === 'users' && <UserManagementPage />}
          {currentPage === 'profile' && <ProfilePage />}
        </main>
      </div>
    </div>
  );
}