'use client';

import React from 'react';

import Link from "next/link"; 
import {PencilIcon,TrashIcon} from "@heroicons/react/24/solid"

export default function PromotionTable() {
  const fakePromotions = [
    {
      title: 'Summer Sale',
      description: 'Up to 50% off on selected items',
      start: '2025-09-01',
      end: '2025-09-30',
      priority: 1,
    },
    {
      title: 'Flash Friday',
      description: 'Limited-time flash deals',
      start: '2025-09-10',
      end: '2025-09-10',
      priority: 2,
    },
    {
      title: 'New Year Bonanza',
      description: 'Special discounts for the new year',
      start: '2025-12-25',
      end: '2026-01-05',
      priority: 1,
    },
    {
      title: 'Clearance Week',
      description: 'End of season clearance sale',
      start: '2025-10-15',
      end: '2025-10-21',
      priority: 3,
    },
    {
      title: 'Diwali Deals',
      description: 'Festival offers on electronics',
      start: '2025-11-01',
      end: '2025-11-10',
      priority: 1,
    },
  ];

  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-400">Promotion List</h1>
      </div>
<div className="bg-white shadow  border border-gray-300 p-6">
    <div className="flex flex-col space-y-4 mb-4 border-b border-gray-200 pb-4">
        <input
          type="text"
          placeholder="Promotion Title"
          className="border border-gray-300 p-2 px-4 py-2 "
        />
        <div className="flex justify-end space-x-2 mb-6">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-blue-700">
            + New Promotion
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-red-600">
            Search
          </button>

          <button className="bg-red-600 rounded shadow p-2">
      <TrashIcon className="h-4 w-6 text-black" />
    </button>


        </div>
      </div>

      <table className=" overflow-x-auto min-w-full bg-white border-collapse border-b border-gray-200">
        <thead className="bg-gray-100 border-b ">
          <tr>
            <th className="text-left px-4 py-2">Title</th>
            <th className="text-left px-4 py-2">Description</th>
            <th className="text-left px-4 py-2">Start</th>
            <th className="text-left px-4 py-2">End</th>
            <th className="text-left px-4 py-2">Priority</th>
            <th className="text-left px-4 py-2">Edit</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Delete</th>
            <th className="text-left px-4 py-2">Print</th>
          </tr>
        </thead>
        <tbody>
          {fakePromotions.map((promo, index) => (
            <tr key={index} className="border-b border-gray-200 border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2">{promo.title}</td>
              <td className="px-4 py-2">{promo.description}</td>
              <td className="px-4 py-2">{promo.start}</td>
              <td className="px-4 py-2">{promo.end}</td>
              <td className="px-4 py-2">{promo.priority}</td>

              <td className="px-4 py-2">
    



              <Link
  href={`/promotionregister/${index+1}`} 
  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
>
  <PencilIcon className='h-5 w-5'/>Edit
</Link>
</td>

              <td className="px-4 py-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Start</button>
              </td>
              <td className="px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">🗑</button>
              </td>
              <td className="px-4 py-2">
                <button className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">🖨</button>
              </td>
            </tr>
          ))}
        </tbody>




        <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="9" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {fakePromotions.length} of {fakePromotions.length} entries
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
  );
  
}
