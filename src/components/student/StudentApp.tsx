import { useState } from 'react';
import { StudentProfile } from './StudentProfile';
import { StudentHome } from './StudentHome';
import { BottomNav } from './BottomNav';

interface StudentAppProps {
  onLogout: () => void;
}

export type StudentPage = 'home' | 'payments' | 'events' | 'profile';

export function StudentApp({ onLogout }: StudentAppProps) {
  const [currentPage, setCurrentPage] = useState<StudentPage>('home');

  const handleNavigate = (page: StudentPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen bg-[#3629b7] flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'home' && (
          <StudentHome onNavigate={handleNavigate} />
        )}
        {currentPage === 'profile' && (
          <StudentProfile onLogout={onLogout} />
        )}
        {currentPage === 'payments' && (
          <div className="p-4 text-white">Payments page coming soon...</div>
        )}
        {currentPage === 'events' && (
          <div className="p-4 text-white">Events page coming soon...</div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}
