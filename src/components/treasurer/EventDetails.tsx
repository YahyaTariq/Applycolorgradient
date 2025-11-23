import { Share2, Eye, Download, Edit, X, AlertCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

interface EventDetailsProps {
  event: any;
  onNavigate: (page: any, item?: any) => void;
}

export function EventDetails({ event, onNavigate }: EventDetailsProps) {
  return (
    <div className="p-4 lg:p-0 space-y-4 pb-8 lg:pb-0 max-w-3xl lg:mx-0">
      {/* Event Info Card */}
      <Card className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-gray-900 mb-2">{event.name}</h2>
            <Badge variant={event.status === 'active' ? 'default' : 'secondary'}>
              {event.status}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Event Date</span>
            <span className="text-gray-900">{event.date}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Payment Amount</span>
            <span className="text-gray-900">PKR {event.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Payment Deadline</span>
            <span className="text-gray-900">{event.deadline}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Total Participants</span>
            <span className="text-gray-900">{event.paid + event.unpaid}</span>
          </div>
        </div>
      </Card>

      {/* Payment Status */}
      <Card className="p-5">
        <h3 className="text-gray-900 mb-4">Payment Status</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm text-green-600 mb-1">Paid</p>
            <p className="text-2xl text-green-700">{event.paid}</p>
            <p className="text-xs text-green-600 mt-1">
              PKR {(event.paid * event.amount).toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
            <p className="text-sm text-orange-600 mb-1">Unpaid</p>
            <p className="text-2xl text-orange-700">{event.unpaid}</p>
            <p className="text-xs text-orange-600 mt-1">
              PKR {(event.unpaid * event.amount).toLocaleString()}
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button
          onClick={() => onNavigate('share', event)}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity"
        >
          <Share2 className="w-5 h-5" />
          Share Link / QR Code
        </button>

        <button
          onClick={() => onNavigate('payment-list', event)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-purple-200 text-purple-700 rounded-xl hover:bg-purple-50 transition-colors"
        >
          <Eye className="w-5 h-5" />
          View Payments
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
          <Download className="w-5 h-5" />
          Export CSV
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
          <Edit className="w-5 h-5" />
          Edit Event
        </button>
      </div>

      {/* Cancel Event Section */}
      {event.status === 'active' && (
        <Card className="p-5 border-red-200 bg-red-50">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-900 mb-1">Cancel Event</h3>
              <p className="text-sm text-red-700">
                Cancel this event and initiate refunds for all paid participants. This action cannot be undone.
              </p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
            <X className="w-5 h-5" />
            Cancel Event & Process Refunds
          </button>
        </Card>
      )}

      {event.status === 'active' && (
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors">
          <X className="w-5 h-5" />
          Close Event
        </button>
      )}
    </div>
  );
}