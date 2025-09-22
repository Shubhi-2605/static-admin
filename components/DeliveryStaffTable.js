'use client';

import React from 'react';
import Link from "next/link"; 
import { PencilIcon, TrashIcon,ArrowsUpDownIcon } from "@heroicons/react/24/solid";

export default function DeliveryStaffTable() {
  const fakePromotions = [
    { name: 'ABBAS', surname: 'AHMED', phone: '87655667868' },
    { name: 'Flash Friday', surname: 'deals', phone: '2025098710' },
    { name: 'Bonanza', surname: 'discounts', phone: '20251225' },
    { name: 'Clearance', surname: 'season', phone: '9820251015' },
    { name: 'Diwali', surname: 'Festival', phone: '7720251101' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Delivery Staff List</h2>




{/* Filters Section */}
<div className="  p-4  mb-4">
  {/* Row 1: Name and Store */}
  <div className=" flex items-center justify-between gap-4 mb-6">
    {/* Name Field */}
    <div className="flex flex-col ">
      <label className="flex items-center gap-2 text-sm font-medium mb-1">Name
      <input
        id="name"
        type="text"
        placeholder="Please enter the name"
        className="border rounded px-4 py-2 w-80 "
      />
      </label>
    </div>

    {/* Store Dropdown */}
    <div className="flex flex-col">
      <label className="flex items-center gap-2 text-sm font-medium mb-1" >Store
      <select
        id="store"
        className="border rounded px-4 py-2 w-64"
      >
        <option value="">All Stores</option>
        {/* Add more store options dynamically if needed */}
      </select>
      </label>
    </div>
  </div>

  {/* Row 2: Buttons aligned to the right */}
  <div className="flex justify-end gap-2">
    <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-blue-700 border">
      + Add New
    </button>
    <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-red-600 border">
      Search
    </button>
    <button className="bg-red-600 text-white rounded shadow p-2 hover:bg-red-700">
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
</div>





      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead className="bg-gray-100">
          <tr>



            <th className='text-left px-4 py-2'>
              <div className='flex items-center gap-2'>Name
                <ArrowsUpDownIcon className='bg-white text-gray h-5 w-5'  />
              </div>

            </th>


            <th className='text-left px-4 py-2'>
              <div className='flex items-center gap-2'>Surname
                <ArrowsUpDownIcon className='bg-white text-gray h-5 w-5'  />
              </div>

            </th>
            <th className='text-left px-4 py-2'>
              <div className='flex items-center gap-2'>Phone
                <ArrowsUpDownIcon className='bg-white text-gray h-5 w-5'  />
              </div>

            </th>



          </tr>
        </thead>
        <tbody>
          {fakePromotions.map((promo, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{promo.name}</td>
              <td className="px-4 py-2">{promo.surname}</td>
              <td className="px-4 py-2">{promo.phone}</td>
              <td className="px-4 py-2">
                <Link
                  href={`/promotionregister/${index + 1}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-end gap-2"
                >
                  <PencilIcon className="h-5 w-5" />
                  Edit
                </Link>
              </td>
              <td className="px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-2">
                  <TrashIcon className="h-5 w-5 text-white" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {/* Footer */}
        <tfoot className="bg-gray-50">
          <tr>
            <td colSpan="9" className="px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Info */}
                <span className="text-sm text-gray-600">
                  Showing 1 to {fakePromotions.length} of {fakePromotions.length} entries
                </span>
                {/* Pagination */}
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
  );
}
