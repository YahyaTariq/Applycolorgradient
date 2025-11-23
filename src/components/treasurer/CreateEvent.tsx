import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Calendar } from 'lucide-react';

interface CreateEventProps {
  onNavigate: (page: any, item?: any) => void;
}

export function CreateEvent({ onNavigate }: CreateEventProps) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    amount: '',
    description: '',
    deadline: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle event creation
    onNavigate('events');
  };

  return (
    <div className="p-4 lg:p-0 pb-8 lg:pb-0 max-w-2xl lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Event Name *</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tech Fest 2025"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Event Date *</Label>
          <div className="relative">
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Payment Amount (PKR) *</Label>
          <Input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder="e.g. 5000"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Payment Deadline *</Label>
          <div className="relative">
            <Input
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              required
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Add event details..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity"
          >
            Create Event
          </button>
          <button
            type="button"
            onClick={() => onNavigate('events')}
            className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}