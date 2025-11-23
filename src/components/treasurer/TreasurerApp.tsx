import { useState } from 'react';
import { TreasurerSidebar } from './TreasurerSidebar';
import { TreasurerHeader } from './TreasurerHeader';
import { TreasurerDashboard } from './TreasurerDashboard';
import { EventsList } from './EventsList';
import { DuesList } from './DuesList';
import { CreateEvent } from './CreateEvent';
import { CreateDue } from './CreateDue';
import { EventDetails } from './EventDetails';
import { DueDetails } from './DueDetails';
import { PaymentList } from './PaymentList';
import { ShareModal } from './ShareModal';
import { Settings } from './Settings';
import { BottomNav } from './BottomNav';
import { Home, Calendar, Receipt, Settings as SettingsIcon, ArrowLeft } from 'lucide-react';

interface TreasurerAppProps {
  onLogout: () => void;
}

export type TreasurerPage = 
  | 'dashboard' 
  | 'events' 
  | 'dues' 
  | 'settings' 
  | 'create-event' 
  | 'create-due'
  | 'event-details'
  | 'due-details'
  | 'payment-list'
  | 'share';

export function TreasurerApp({ onLogout }: TreasurerAppProps) {
  const [currentPage, setCurrentPage] = useState<TreasurerPage>('dashboard');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleNavigate = (page: TreasurerPage, item?: any) => {
    setCurrentPage(page);
    if (item) setSelectedItem(item);
  };

  const handleBack = () => {
    if (currentPage === 'event-details' || currentPage === 'create-event') {
      setCurrentPage('events');
    } else if (currentPage === 'due-details' || currentPage === 'create-due') {
      setCurrentPage('dues');
    } else if (currentPage === 'payment-list') {
      if (selectedItem?.type === 'event') {
        setCurrentPage('event-details');
      } else {
        setCurrentPage('due-details');
      }
    } else if (currentPage === 'share') {
      if (selectedItem?.type === 'event') {
        setCurrentPage('event-details');
      } else {
        setCurrentPage('due-details');
      }
    } else {
      setCurrentPage('dashboard');
    }
  };

  const showBottomNav = ['dashboard', 'events', 'dues', 'settings'].includes(currentPage);
  const showBackButton = !['dashboard', 'events', 'dues', 'settings'].includes(currentPage);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <TreasurerSidebar currentPage={currentPage} onNavigate={handleNavigate} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Hidden on mobile for main pages, shown on desktop */}
        <div className="hidden lg:block">
          <TreasurerHeader 
            onLogout={onLogout} 
            currentPage={currentPage}
            onBack={handleBack}
            showBackButton={showBackButton}
          />
        </div>

        {/* Mobile Header - Only for detail pages */}
        {!showBottomNav && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <h2 className="text-gray-900">
              {currentPage === 'create-event' && 'Create Event'}
              {currentPage === 'create-due' && 'Create Society Due'}
              {currentPage === 'event-details' && 'Event Details'}
              {currentPage === 'due-details' && 'Due Details'}
              {currentPage === 'payment-list' && 'Payments'}
              {currentPage === 'share' && 'Share'}
            </h2>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto lg:p-6">
          <div className="max-w-7xl mx-auto lg:max-w-none">
            {currentPage === 'dashboard' && (
              <TreasurerDashboard onNavigate={handleNavigate} />
            )}
            {currentPage === 'events' && (
              <EventsList onNavigate={handleNavigate} />
            )}
            {currentPage === 'dues' && (
              <DuesList onNavigate={handleNavigate} />
            )}
            {currentPage === 'create-event' && (
              <CreateEvent onNavigate={handleNavigate} />
            )}
            {currentPage === 'create-due' && (
              <CreateDue onNavigate={handleNavigate} />
            )}
            {currentPage === 'event-details' && selectedItem && (
              <EventDetails event={selectedItem} onNavigate={handleNavigate} />
            )}
            {currentPage === 'due-details' && selectedItem && (
              <DueDetails due={selectedItem} onNavigate={handleNavigate} />
            )}
            {currentPage === 'payment-list' && selectedItem && (
              <PaymentList item={selectedItem} />
            )}
            {currentPage === 'share' && selectedItem && (
              <ShareModal item={selectedItem} />
            )}
            {currentPage === 'settings' && (
              <Settings onLogout={onLogout} />
            )}
          </div>
        </main>

        {/* Bottom Navigation - Only on mobile for main pages */}
        {showBottomNav && (
          <div className="lg:hidden">
            <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
          </div>
        )}
      </div>
    </div>
  );
}