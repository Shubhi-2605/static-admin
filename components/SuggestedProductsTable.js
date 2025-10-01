'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function SuggestedProductsTable() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/feedback');
        const json = await response.json();

        if (json.success) {
          setFeedbackData(json.data);
          setError(null);
        } else {
          setError(json.message || 'Failed to fetch feedback');
        }
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Suggested Products</h1>
      <div className="bg-white p-6">
        <div className="border border-gray-100 px-3 mb-4 p-2">
          <input
            type="text"
            className="px-3 py-2 w-full"
            placeholder="Suggestion Search.."
          />
        </div>
        <div className="flex justify-end mb-4 border-rounded">
          <button className="flex items-center text-gray-500 bg-gray-200 px-4 py-3 rounded">
            <MagnifyingGlassIcon className="h-5 w-5 stroke-3" />
            Search
          </button>
        </div>
        {loading ? (
          <p className="text-gray-500">Loading suggestions...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full p-6 table-auto text-sm text-left border-collapse">
              <thead className="bg-white font-bold border-t border-gray-100 p-6">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Surname</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Suggestion</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 odd:bg-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{item.userInfo?.name || '-'}</td>
                    <td className="px-4 py-2">{item.userInfo?.surname || '-'}</td>
                    <td className="px-4 py-2">{item.userInfo?.email || '-'}</td>
                    <td className="px-4 py-2">{item.userInfo?.phone || '-'}</td>
                    <td className="px-4 py-2">{item.suggestion}</td>
                    <td className="px-4 py-2">{item.status || 'pending'}</td>
                    <td className="px-4 py-2">
                      {new Date(item.userInfo?.registeredDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="7" className="px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Showing 1 to {feedbackData.length} of {feedbackData.length} entries
                      </span>
                      <div className="space-x-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">
                          Prev
                        </button>
                        <button className="px-3 py-1 border rounded bg-blue-500 text-white hover:bg-blue-600">
                          1
                        </button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">
                          Next
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
