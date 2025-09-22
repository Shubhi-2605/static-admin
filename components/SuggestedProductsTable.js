'use client';

import { useEffect, useState } from 'react';

export default function SuggestedProductsTable() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Static mock data for now
    const mockData = [
      {
        name: 'Mark',
        surname: 'Gabrillo',
        email: 'jayson.gabrillo@yahoo.com',
        phone: '+971569918939',
        suggestion: 'Almarai milk',
        state: 'Pending',
        date: '01/09/2025 03:20',
      },
      {
        name: '--Deleted User--',
        surname: '--Deleted User--',
        email: '--Deleted User--',
        phone: '--Deleted User--',
        suggestion: 'Pork',
        state: 'Pending',
        date: '30/08/2025 12:41',
      },
      {
        name: 'Theresa',
        surname: 'Alcantara',
        email: 'alcantaratheresa81@gmail.com',
        phone: '+971503621326',
        suggestion: 'Mabuhay',
        state: 'Pending',
        date: '20/08/2025 09:27',
      },
      {
        name: 'Rajit',
        surname: 'Bhattarai',
        email: 'rajitbhattarai46@gmail.com',
        phone: '+971526093507',
        suggestion: 'I order pork plz make it fast already 30 min',
        state: 'Pending',
        date: '17/08/2025 09:58',
      },
      {
        name: 'Subhana',
        surname: 'Pakhmore',
        email: 'subhanapakhmore@gmail.com',
        phone: '+971566594579',
        suggestion: 'Recharge card',
        state: 'Pending',
        date: '16/08/2025 06:46',
      },
      {
        name: 'Kevin',
        surname: 'Banez',
        email: 'kevinbanez0115@gmail.com',
        phone: '+971506571140',
        suggestion: 'Pork belly',
        state: 'Pending',
        date: '14/08/2025 05:06',
      },
      {
        name: 'Hannah',
        surname: 'Alvarez',
        email: 'alvarezcariinah@gmail.com',
        phone: '+971508828433',
        suggestion: 'Biscoff Lotus spread',
        state: 'Pending',
        date: '13/08/2025 09:51',
      },
      {
        name: 'Kirby',
        surname: 'Maricaban',
        email: 'kirby.maricaban@yahoo.com',
        phone: '+971505014822',
        suggestion: 'Please update your app with different pork products.',
        state: 'Pending',
        date: '13/08/2025 09:31',
      },
      {
        name: 'Romel',
        surname: 'Gorgonia',
        email: 'melgorgona@gmail.com',
        phone: '+971528002601',
        suggestion: 'Pork belly',
        state: 'Pending',
        date: '13/08/2025 05:18',
      },
    ];

    setFeedbackData(mockData);
  }, []);

  return (
    <div className="p-4">
      <h1 className=" text-2xl font-semibold mb-6">Suggested Products</h1>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase border-b">
            <tr>
              <th className="px-4 py-2" border border-gray-300 >Name</th>
              <th className="px-4 py-2"  border border-gray-300>Surname</th>
              <th className="px-4 py-2"  border border-gray-300>Email</th>
              <th className="px-4 py-2"  border border-gray-300>Phone</th>
              <th className="px-4 py-2" border border-gray-300>Suggestion</th>
              <th className="px-4 py-2" border border-gray-300>State</th>
              <th className="px-4 py-2"  border border-gray-300>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                <td className="px-4 py-2 border border-gray-300">{item.surname}</td>
                <td className="px-4 py-2 border border-gray-300">{item.email}</td>
                <td className="px-4 py-2 border border-gray-300">{item.phone}</td>
                <td className="px-4 py-2 border border-gray-300">{item.suggestion}</td>
                <td className="px-4 py-2 border border-gray-300">{item.state}</td>
                <td className="px-4 py-2 border border-gray-300">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Showing {feedbackData.length} entries
      </p>
    </div>
  );
}
