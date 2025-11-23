import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Download, Play } from 'lucide-react';
import { Badge } from './ui/badge';

const variances = [
  { id: 1, description: 'Student ID: 201234 - Tuition Fee', expected: 125000, actual: 120000, variance: -5000, status: 'unresolved' },
  { id: 2, description: 'Student ID: 203456 - Hostel Fee', expected: 45000, actual: 45000, variance: 0, status: 'matched' },
  { id: 3, description: 'Student ID: 205678 - Lab Fee', expected: 15000, actual: 16000, variance: 1000, status: 'unresolved' },
  { id: 4, description: 'Student ID: 207890 - Library Fine', expected: 500, actual: 0, variance: -500, status: 'unresolved' },
  { id: 5, description: 'Student ID: 209012 - Sports Fee', expected: 8000, actual: 8000, variance: 0, status: 'matched' },
];

export function ReconciliationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Reconciliation</h1>
        <p className="text-gray-600">Compare expected and actual payments to identify discrepancies</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Expected Payments</p>
            <p className="text-gray-900">PKR 2,458,500</p>
            <p className="text-sm text-gray-500 mt-1">235 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Logged Payments</p>
            <p className="text-gray-900">PKR 2,453,000</p>
            <p className="text-sm text-gray-500 mt-1">232 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 mb-1">Variance</p>
            <p className="text-red-600">PKR -5,500</p>
            <p className="text-sm text-gray-500 mt-1">3 discrepancies</p>
          </CardContent>
        </Card>
      </div>

      {/* Action Button */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-900 mb-1">Run Reconciliation Process</h3>
              <p className="text-sm text-gray-600">Compare payment records and identify variances</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-lg hover:opacity-90 transition-opacity">
              <Play className="w-4 h-4" />
              Run Reconciliation
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Variances Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Variances Identified</CardTitle>
          <button className="flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Variance Report
          </button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Description</th>
                  <th className="text-right py-3 px-4 text-gray-600 text-sm">Expected Amount</th>
                  <th className="text-right py-3 px-4 text-gray-600 text-sm">Actual Amount</th>
                  <th className="text-right py-3 px-4 text-gray-600 text-sm">Variance</th>
                  <th className="text-left py-3 px-4 text-gray-600 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {variances.map((variance) => (
                  <tr key={variance.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{variance.description}</td>
                    <td className="py-3 px-4 text-gray-900 text-right">PKR {variance.expected.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-900 text-right">PKR {variance.actual.toLocaleString()}</td>
                    <td className={`py-3 px-4 text-right ${variance.variance === 0 ? 'text-gray-900' : variance.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {variance.variance === 0 ? '—' : `PKR ${variance.variance.toLocaleString()}`}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={variance.status === 'matched' ? 'default' : 'destructive'}>
                        {variance.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
