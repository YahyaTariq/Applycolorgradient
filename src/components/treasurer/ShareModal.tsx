import { Copy, Download, Share2 } from 'lucide-react';
import { Card } from '../ui/card';

interface ShareModalProps {
  item: any;
}

export function ShareModal({ item }: ShareModalProps) {
  const paymentLink = `https://flashpoint.edu/pay/${item.type}/${item.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="p-4 lg:p-0 space-y-6 pb-8 lg:pb-0 max-w-2xl lg:mx-0">
      {/* QR Code */}
      <Card className="p-6">
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
            {/* Placeholder QR Code */}
            <div className="w-56 h-56 bg-white rounded-xl p-4 shadow-inner">
              <div className="w-full h-full bg-gradient-to-br from-[#9810fa] to-[#432dd7] opacity-20 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center text-sm">
                  QR Code for<br />{item.name}
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Scan this QR code to make payment
          </p>
        </div>
      </Card>

      {/* Download QR Button */}
      <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#9810fa] to-[#432dd7] text-white rounded-xl shadow-lg hover:opacity-90 transition-opacity">
        <Download className="w-5 h-5" />
        Download QR Code
      </button>

      {/* Payment Link */}
      <Card className="p-5">
        <h3 className="text-gray-900 mb-3">Payment Link</h3>
        <div className="flex gap-2">
          <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 overflow-x-auto">
            <p className="text-sm text-gray-700 whitespace-nowrap">{paymentLink}</p>
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-3 bg-white border-2 border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </Card>

      {/* Share Options */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600 mb-3">Share via</p>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl hover:opacity-90 transition-opacity">
            <Share2 className="w-5 h-5" />
            WhatsApp
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#0088cc] text-white rounded-xl hover:opacity-90 transition-opacity">
            <Share2 className="w-5 h-5" />
            Telegram
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-[#1877f2] text-white rounded-xl hover:opacity-90 transition-opacity">
            <Share2 className="w-5 h-5" />
            Facebook
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-gray-700 text-white rounded-xl hover:opacity-90 transition-opacity">
            <Share2 className="w-5 h-5" />
            Email
          </button>
        </div>
      </div>

      {/* Event/Due Info */}
      <Card className="p-5 bg-purple-50 border-purple-200">
        <h3 className="text-purple-900 mb-3">{item.name}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-purple-700">Amount:</span>
            <span className="text-purple-900">PKR {item.amount.toLocaleString()}</span>
          </div>
          {item.date && (
            <div className="flex justify-between">
              <span className="text-purple-700">Event Date:</span>
              <span className="text-purple-900">{item.date}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-purple-700">Deadline:</span>
            <span className="text-purple-900">{item.deadline}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}