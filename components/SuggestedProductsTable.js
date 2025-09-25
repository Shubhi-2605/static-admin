'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
        suggestion: 'Plum',
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
        suggestion: 'I order pizza plz make it fast already 30 min',
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
        suggestion: 'Plum',
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
        suggestion: 'Pizza',
        state: 'Pending',
        date: '13/08/2025 05:18',
      },
    ];

    setFeedbackData(mockData);
  }, []);

  return (
    <div className="p-4 bg-gray-100">
      <h1 className=" text-2xl font-semibold mb-6">Suggested Products</h1>
      <div className="bg-white p-6">
       <div className="border border-gray-100 px-3 mb-4 p-2">
        <input type="text"
        className ="px-3 py-2 w-full"
        placeholder="Suggestion Search.."
        />
        </div>
        <div className='flex justify-end mb-4  border-rounded'>
          <button className='flex items-center text-gray-500 bg-gray-200 px-4 py-3  rounded '><MagnifyingGlassIcon className="h-5 w-5 stroke-3"/>Search</button>

        </div>
        

      <div className=" overflow-x-auto">
        <table className="min-w-full p-6 table-auto text-sm text-left border-collapse">
          <thead className="bg-white  font-bold  border-t border-gray-100 p-6">
            <tr>
              <th className="px-4 py-2" >Name</th>
              <th className="px-4 py-2">Surname</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Suggestion</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2" >Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-100 odd:bg-gray-100 hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.surname}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.phone}</td>
                <td className="px-4 py-2">{item.suggestion}</td>
                <td className="px-4 py-2">{item.state}</td>
                <td className="px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
       
          <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="7" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {feedbackData.length} of {feedbackData.length} entries
          </span>

          {/* Right side: pagination buttons */}
          <div className="space-x-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
            <button className="px-3 py-1 border rounded bg-blue-500 text-white hover:bg-blue-600">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      </td>
    </tr>
  </tfoot>

       
       
       
       
       
       
        </table>
      </div>

     
    </div>

    </div>
  );
}
