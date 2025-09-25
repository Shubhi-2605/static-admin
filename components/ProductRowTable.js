'use client';

import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function ProductRowTable() {
  const productRows = [
    { rowName: "Catch our always discounted prices" },
    { rowName: "Elevate Our Exclusive Brand" },
    { rowName: "Pick by Dietary:" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-600 mb-4">Offer Zone Product Row List</h2>
<div className="bg-white p-6 rounded shadow ">
      <div className=" mb-4">
        <input
          type="text"
          placeholder="Row Name"
          className="border border-gray-100 px-4 py-2 w-full"
        />



          {/* Buttons container: flex, right aligned, gap */}
          <div className="flex justify-end gap-3 mt-4">
            <button className="flex items-center gap-2 bg-gray-300 text-gray-500 px-5 py-2 rounded hover:bg-blue-600 transition">
              <MagnifyingGlassIcon className="h-5 w-5 stroke-[4]" />
              Search
            </button>
            <button className="flex items-center justify-center bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

      <table className="min-w-full bg-white border-collapse border-t border-gray-100 ">
        <thead className="bg-white">
          <tr>
            <th className="text-left px-4 py-2">Row Name</th>
            <th className=" flex justify-end text-left px-4 py-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {productRows.map((row, index) => (
            <tr key={index} className="border-t border-gray-100 odd:bg-gray-100 border-b">
              <td className="px-4 py-2 font-semibold">{row.rowName}</td>
              <td className="px-4 py-3 flex justify-end">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="2" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {productRows.length} of {productRows.length} entries
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
