import { Plus, Calendar, Users, DollarSign } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface EventsListProps {
  onNavigate: (page: any, item?: any) => void;
}

const events = [
  { 
    id: 1, 
    name: 'Tech Fest 2025', 
    date: '2025-02-15', 
    amount: 5000, 
    paid: 45, 
    unpaid: 23, 
    status: 'active',
    deadline: '2025-02-10',
    type: 'event'
  },
  { 
    id: 2, 
    name: 'Sports Gala', 
    date: '2025-02-20', 
    amount: 2500, 
    paid: 32, 
    unpaid: 18, 
    status: 'active',
    deadline: '2025-02-18',
    type: 'event'
  },
  { 
    id: 3, 
    name: 'Cultural Night', 
    date: '2025-01-10', 
    amount: 3000, 
    paid: 67, 
    unpaid: 0, 
    status: 'closed',
    deadline: '2025-01-08',
    type: 'event'
  },
];

export function EventsList({ onNavigate }: EventsListProps) {
  return (
    <div className="p-4 lg:p-0 space-y-4 pb-24 lg:pb-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <h2 className="text-gray-900">Events</h2>
          <p className="text-sm text-gray-500">Manage your events</p>
        </div>
        <button
          onClick={() => onNavigate('create-event')}
          className="p-3 lg:ml-auto bg-gradient-to-br from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg text-sm whitespace-nowrap">
          All Events
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm whitespace-nowrap hover:bg-gray-50">
          Active
        </button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm whitespace-nowrap hover:bg-gray-50">
          Closed
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events.map((event) => (
          <Card
            key={event.id}
            className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate('event-details', event)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">{event.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>
              <Badge variant={event.status === 'active' ? 'default' : 'secondary'}>
                {event.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">Amount</p>
                <p className="text-sm text-gray-900">PKR {event.amount.toLocaleString()}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="text-xs text-green-600 mb-1">Paid</p>
                <p className="text-sm text-green-700">{event.paid}</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-600 mb-1">Unpaid</p>
                <p className="text-sm text-orange-700">{event.unpaid}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}