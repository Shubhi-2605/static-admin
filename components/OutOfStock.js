'use client';
import React, { useState } from 'react';
import {
  ArrowsUpDownIcon,
  DocumentIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function OutOfStock() {
  const [selectedBranch, setSelectedBranch] = useState('');

  const branches = [
    'Discovery Garden',
    'JLT',
    'Business Bay',
    'Marina',
    'Barsha',
  ];

  const fakeStock = [
    {
      productName: 'khoosa Marrow 250GM',
      category: 'VEGETABLES',
      price: '3.59',
      quantity: '500gm',
      statusChanged: '',
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-neutral-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Out Of Stock</h1>

        <button className="flex items-center gap-2 bg-gray-200 text-gray-400 px-4 py-2 rounded hover:bg-blue-700">
          <DocumentIcon className="h-5 w-5" />
          <span>Export Product List</span>
        </button>
      </div>

      {/* Search Filters */}
      <div className="p-4 mb-4 bg-white">
        <div className="flex gap-4 mb-1">
          {/* Branch Dropdown */}
          <div className="w-1/2 border border-gray-100 shadow-sm px-4 py-2 bg-white text-gray-800 rounded">
            <label className="block text-lg font-semibold mb-1">Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select a branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Name Input */}
          <div className="w-1/2 border border-gray-100 shadow-sm px-4 py-2 bg-white rounded">
            <label className="block text-lg font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please enter the product name."
            />
          </div>
        </div>

        {/* Category + Buttons */}
        <div className="flex items-start justify-between mb-4 w-full">
          <div className="w-1/2 border border-gray-100 shadow-sm rounded px-4 py-2 bg-white">
            <label className="block text-lg font-semibold mb-1">Category</label>
            <input
              type="text"
              placeholder="Please select the category."
              className="w-full rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 mt-6 ml-4">
            <button className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-200">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Search</span>
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Table */}
        <div className="p-4 bg-white">
          <table className="border-collapse border-t border-gray-200 py-4 mt-4 min-w-full bg-white">
            <thead className="bg-white">
              <tr>
                <th className="text-left px-4 py-4">
                  <div className="flex items-center">
                    Product name
                    <ArrowsUpDownIcon className="text-gray-400 h-5 w-5" />
                  </div>
                </th>
                <th className="text-left px-4 py-2">Category</th>
                <th className="text-left px-4 py-2">Price</th>
                <th className="text-left px-4 py-2">Quantity</th>
                <th className="text-left px-4 py-2">In Display</th>
                <th className="text-left px-4 py-2">In Stock</th>
                <th className="text-left px-4 py-2">Status Changed</th>
              </tr>
            </thead>
            <tbody>
              { selectedBranch === 'Discovery Garden' ?(
              fakeStock.map((stock, index) => (
                <tr
                  key={index}
                  className="border-t border-b border-gray-200 hover:bg-gray-50 odd:bg-gray-100"
                >
                  <td className="px-4 py-2">{stock.productName}</td>
                  <td className="px-4 py-2">{stock.category}</td>
                  <td className="px-4 py-2">{stock.price}</td>
                  <td className="px-4 py-2">{stock.quantity}</td>
                  <td className="px-4 py-2">
                    <Link
                      href="/"
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      In display
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      href="/"
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      In Stock
                    </Link>
                  </td>
                  <td className="px-4 py-2">{stock.statusChanged}</td>
                </tr>
              ))
            ) : ( 

            <tr>
              <td colSpan={7} className="text-center text-gray-500 py-4">
                Select "Discovery Garden" to view data.
              </td>
            </tr>
          )}

            
            </tbody>

            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={9} className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      
                    Showing {selectedBranch === 'Discovery Garden' ? `1 to ${fakeStock.length}` : '0'} of{' '}
            {selectedBranch === 'Discovery Garden' ? fakeStock.length : '0'} entries
             
                      
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
    
    </div>
  );
}
