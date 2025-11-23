import { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Calendar, Upload } from 'lucide-react';

interface CreateDueProps {
  onNavigate: (page: any, item?: any) => void;
}

export function CreateDue({ onNavigate }: CreateDueProps) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
    deadline: '',
  });
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle due creation
    onNavigate('dues');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  return (
    <div className="p-4 lg:p-0 pb-8 lg:pb-0 max-w-2xl lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Due Name *</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Society Dues Q1 2025"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Amount (PKR) *</Label>
          <Input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            placeholder="e.g. 3000"
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
            placeholder="Add due details..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label>Upload Member List (CSV/Excel)</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              {uploadedFile ? (
                <p className="text-sm text-gray-900">{uploadedFile}</p>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400">CSV or Excel files only</p>
                </>
              )}
            </label>
          </div>
          {uploadedFile && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                ✓ File uploaded successfully. Preview will show member list.
              </p>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#7c86ff] to-[#5a67d8] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity"
          >
            Create Society Due
          </button>
          <button
            type="button"
            onClick={() => onNavigate('dues')}
            className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}