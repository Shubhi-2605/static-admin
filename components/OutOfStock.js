'use client'
import React from 'react';
import { ArrowsUpDownIcon, DocumentIcon, MagnifyingGlassIcon, TrashIcon ,XMarkIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function OutOfStock() {
  const fakeStock = [
    { productName: 'potato', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
    { productName: 'pumpkin', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
    { productName: 'peas', category: 'vegetables', price: '22', quantity: '500gm', statusChanged: '' },
  ];

  return (
    <div className="  p-6 min-h-screen bh-neutral-100">
<div className="flex items-center justify-between mb-4">
  {/* Heading */}
  <h1 className="text-2xl font-semibold text-gray-800">Out Of Stock</h1>

  {/* Export Button */}
  <button className="flex items-center gap-2 bg-gray-200 text-gray-400 px-4 py-2 rounded hover:bg-blue-700">
    <DocumentIcon className="h-5 w-5" />
    <span>Export Product List</span>
  </button>
</div>
      
      
      
      
      
      
      <div className="p-4 mb-4 bg-white">
        {/* Branch + Name Row */}

{/* Branch + Name Row */}
<div className="flex gap-4 mb-1">
  {/* Branch Box */}
  <div className="w-1/2 border border-gray-100 shadow-sm px-4 py-0.5 bg-white text-gray-800 rounded">
    <div className=" font-semibold mb-1">Branch</div>
    <div className="flex items-center justify-between bg-gray-200 px-3 py-0.5 rounded">
      <span className=" font-bold">Discovery Garden</span>
      <XMarkIcon className="h-5 w-5 text-red-500 cursor-pointer hover:text-red-700" />
    </div>
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

<div className="flex items-start justify-between mb-4 w-full">
  {/* Category Box */}
  <div className="w-1/2 border border-gray-100 shadow-sm rounded px-4 py-2 bg-white">
    <label className="block text-lg font-semibold mb-1">Category</label>
    <input
      type="text"
      placeholder="Please select the category."
      className="w-full rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Buttons (outside the box, right-aligned) */}
  <div className="flex items-center space-x-2 mt-6 ml-4">
    <button className=" flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 ">
      <MagnifyingGlassIcon className="h-5 w-5"/> <span>Search</span>
    </button>
    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
</div>

       
      
        
        
        {/* Table */}
        <table className=" border-collapse border-t border-gray-200 py-4 mt-4 min-w-full bg-white">
          <thead className="bg-white ">
            <tr>
              <th className="text-left px-4 py-4 gap-1">
                <div className="flex items-center">
                  Product name <ArrowsUpDownIcon className="text-gray-400 stroke-3 h-5 w-5" />
                </div>
              </th>
              <th className="text-left px-4 py-2">
                <div className="flex items-center gap-2">
                  Category <ArrowsUpDownIcon className="text-gray-400 h-5 w-5" />
                </div>
              </th>
              <th className="text-left px-4 py-2">
                <div className="flex items-center gap-2">
                  Price <ArrowsUpDownIcon className="text-gray-400 h-5 w-5" />
                </div>
              </th>

              <th className="text-left px-4 py-2">
                <div className="flex items-center gap-2">
                  Quantity <ArrowsUpDownIcon className="text-gray-400 h-5 w-5" />
                </div>
              </th>

              
              <th className="text-left px-4 py-2">In Display</th>
              <th className="text-left px-4 py-2">In Stock</th>
              <th className="text-left px-4 py-2">Status Changed</th>
            </tr>
          </thead>

          <tbody>
            {fakeStock.map((stock, index) => (
              <tr key={index} className=" border-t border-b border-gray-200 hover:bg-gray-50 odd:bg-gray-100">
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




