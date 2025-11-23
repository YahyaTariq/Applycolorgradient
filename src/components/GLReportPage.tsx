import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Download, FileText, Calendar } from 'lucide-react';

const previousReports = [
  { id: 1, filename: 'GL_Report_Jan_2025.pdf', date: '2025-01-15 14:30', size: '2.4 MB' },
  { id: 2, filename: 'GL_Report_Dec_2024.pdf', date: '2024-12-31 16:45', size: '2.1 MB' },
  { id: 3, filename: 'GL_Report_Nov_2024.pdf', date: '2024-11-30 10:20', size: '1.9 MB' },
  { id: 4, filename: 'GL_Report_Oct_2024.pdf', date: '2024-10-31 15:10', size: '2.3 MB' },
];

export function GLReportPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">GL Report Builder</h1>
        <p className="text-gray-600">Generate general ledger reports for accounting periods</p>
      </div>

      {/* Report Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Generate New Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <div className="relative">
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>End Date</Label>
                <div className="relative">
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Categories</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Tuition Fees', 'Hostel Fees', 'Lab Fees', 'Library Fees', 'Sports Fees', 'Examination Fees', 'Cafeteria', 'Miscellaneous'].map((category) => (
                  <label key={category} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="rounded text-purple-600" defaultChecked />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
              Generate GL Report
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Previous Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Previously Generated Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {previousReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-900">{report.filename}</p>
                    <p className="text-sm text-gray-500">Created: {report.date} • {report.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
