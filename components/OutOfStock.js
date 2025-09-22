'use client'
import React from 'react';
import { ArrowsUpDownIcon, MagnifyingGlassCircleIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function OutOfStock() {
  const fakeStock = [
    { productName: 'potato', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
    { productName: 'pumpkin', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
    { productName: 'peas', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Out Of stock</h2>

      <div className="p-4 mb-4">
        {/* Branch + Name Row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          {/* Branch */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold">Branch</label>
            <select id="branch" className="border rounded px-4 py-2 w-64">
              <option value="">Add branch</option>
              <option>discovery garden</option>
            </select>
          </div>

          {/* Name */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Please enter the name"
              className="border rounded px-4 py-2 w-64"
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <label className="text-sm font-medium">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Please select the category"
            className="border rounded px-4 py-2 w-64"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mb-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
            + Search
          </button>
          <button className="bg-red-500 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
            <TrashIcon className="h-5 w-5"/>
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full bg-white border-gray-200 shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">
                <div className="flex items-center gap-2">
                  Product name <ArrowsUpDownIcon className="text-gray h-5 w-5" />
                </div>
              </th>
              <th className="text-left px-4 py-2">
                <div className="flex items-center gap-2">
                  Category <ArrowsUpDownIcon className="text-gray h-5 w-5" />
                </div>
              </th>
              <th className="text-left px-4 py-2">Price</th>
              <th className="text-left px-4 py-2">Quantity</th>
              <th className="text-left px-4 py-2">In Display</th>
              <th className="text-left px-4 py-2">In Stock</th>
              <th className="text-left px-4 py-2">Status Changed</th>
            </tr>
          </thead>

          <tbody>
            {fakeStock.map((stock, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{stock.productName}</td>
                <td className="px-4 py-2">{stock.category}</td>
                <td className="px-4 py-2">{stock.price}</td>
                <td className="px-4 py-2">{stock.quantity}</td>
                <td className="px-4 py-2">
                  <Link href={`/`} className="bg-green-600 text-white px-3 py-1 rounded">
                    In display
                  </Link>
                </td>
                <td className="px-4 py-2">
                  <Link href={`/`} className="bg-red-600 text-white px-3 py-1 rounded">
                    In Stock
                  </Link>
                </td>
                <td className="px-4 py-2">{stock.statusChanged}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan="9" className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Showing 1 to {fakeStock.length} of {fakeStock.length} entries
                  </span>
                  <div className="space-x-2">
                    <button className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
                    <button className="px-3 py-1 border rounded bg-blue-500 text-white hover:bg-blue-600">
                      1
                    </button>
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




