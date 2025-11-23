import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, X, Calendar, Users, DollarSign } from 'lucide-react';

const pendingEvents = [
  {
    id: 1,
    society: 'GDGOC',
    eventName: 'Promptopia',
    type: 'event',
    date: '2025-02-15',
    expectedAttendees: 150,
    amount: 8000,
    description: 'AI & Prompt Engineering Workshop - Learn how to master prompt engineering for AI applications',
    requestedBy: 'Ahmed Khan',
    requestDate: '2025-01-20',
  },
  {
    id: 2,
    society: 'CS Society',
    eventName: 'Nascon',
    type: 'event',
    date: '2025-03-10',
    expectedAttendees: 300,
    amount: 15000,
    description: 'National Software Competition - Annual coding and innovation competition',
    requestedBy: 'Sara Ahmed',
    requestDate: '2025-01-19',
  },
  {
    id: 3,
    society: 'Adventure Club',
    eventName: 'Adventure Gala',
    type: 'event',
    date: '2025-02-28',
    expectedAttendees: 200,
    amount: 12000,
    description: 'Annual adventure sports and outdoor activities gala',
    requestedBy: 'Hassan Ali',
    requestDate: '2025-01-18',
  },
  {
    id: 4,
    society: 'Drama Society',
    eventName: 'Spring Theater Festival',
    type: 'event',
    date: '2025-03-20',
    expectedAttendees: 250,
    amount: 10000,
    description: 'Annual theater festival featuring student performances',
    requestedBy: 'Fatima Malik',
    requestDate: '2025-01-17',
  },
];

export function EventsApprovalPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Events Approval</h1>
        <p className="text-gray-600">Review and approve event requests from societies</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Approval</p>
                <p className="text-2xl text-gray-900">{pendingEvents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Approved This Month</p>
                <p className="text-2xl text-gray-900">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-lg">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rejected This Month</p>
                <p className="text-2xl text-gray-900">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Events List */}
      <div className="space-y-4">
        {pendingEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900">{event.eventName}</h3>
                    <Badge variant="secondary">{event.society}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Event Date</span>
                  </div>
                  <p className="text-gray-900">{event.date}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Users className="w-4 h-4" />
                    <span>Attendees</span>
                  </div>
                  <p className="text-gray-900">{event.expectedAttendees}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Amount</span>
                  </div>
                  <p className="text-gray-900">PKR {event.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Requested By</p>
                  <p className="text-gray-900">{event.requestedBy}</p>
                </div>
              </div>

              {/* Request Info */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Submitted on {event.requestDate}
                </p>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                    <Check className="w-4 h-4" />
                    Approve
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <X className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
