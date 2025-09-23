'use client';

import React from 'react';
import Link from "next/link";
import { XCircleIcon,PencilIcon, TrashIcon,ArrowUpIcon,ArrowDownIcon,ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { ArrowUpDownIcon } from 'lucide-react';


export default function OfferZoneTable() {
  const fakeOffers = [
    {
      title: 'Fasting treats',
      description: 'Fasting treats',
      typeOfOffer: 'ProductRow Section',
      start: '29/07/2025 12:43 PM',
      end: '31/08/2025 12:43 PM',
      priority: 164,
    },
    {
      title: 'Pooja Essentials',
      description: 'Pooja Essentials 🙏',
      typeOfOffer: 'ProductRow Section',
      start: '28/07/2025 02:47 PM',
      end: '31/08/2025 02:47 PM',
      priority: 163,
    },
    {
      title: 'Back to School, Back to Awesome!',
      description: 'School time offers for kids',
      typeOfOffer: 'ProductRow Section',
      start: '28/07/2025 03:11 PM',
      end: '31/08/2025 03:11 PM',
      priority: 162,
    },
    {
      title: 'Beat the Heat with Every Sip 🍹☀️',
      description: 'Summer Juices You\'ll Love!',
      typeOfOffer: 'ProductRow Section',
      start: '05/06/2025 04:50 PM',
      end: '31/08/2025 04:50 PM',
      priority: 161,
    },
    {
      title: 'Sparkle Your Summer Mood! 🍁😎✨',
      description: 'Stay cool and refreshed',
      typeOfOffer: 'ProductRow Section',
      start: '05/06/2025 04:43 PM',
      end: '31/08/2025 04:43 PM',
      priority: 160,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="bg-gray-200 px-6 py-4 rounded-t-lg">
        <h1 className="text-2xl font-bold text-gray-700">Offer’s List</h1>
      </div>

      {/* BODY (form + table) */}
      <div className="bg-white shadow rounded-b-lg p-6">
        {/* FORM */}
        <div className="space-y-4 mb-6">
          {/* Row 1: Input */}
          <div>
            <input
              type="text"
              placeholder="Promotion Title"
              className="border border-gray-200 shadow-sm px-4 py-2 w-full"
            />
          </div>

          {/* Row 2: Buttons */}
          <div className="flex justify-end space-x-2">
            <button className="bg-gray-200  px-4 py-2 rounded hover:bg-blue-600">
              + New Offer
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-600">
              Offer zone Product Rows
            </button>

            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-600">
              Search
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-1">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="min-w-full bg-white border border-gray-200 shadow-sm">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-200">
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Type of Offer</th>

              <th className="text-left px-4 py-2">Start</th>
              <th className="text-left px-4 py-2">End</th>
              <th className="text-left px-4 py-2">Priority<ArrowUpDownIcon className =" h-5 w-5"/></th>
              <th className="text-right px-4 py-2">Index</th>




              <th className="text-left px-4 py-2">Edit</th>
              <th className="text-left px-4 py-2">Status</th>

              <th className="text-left px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {fakeOffers.map((offer, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{offer.title}</td>
                <td className="px-4 py-2">{offer.description}</td>
                <td className="px-4 py-2">{offer.typeOfOffer}</td>

                <td className="px-4 py-2">{offer.start}</td>

               <td className="px-4 py-2">{offer.end}</td>
                <td className="px-4 py-2">{offer.priority}</td>


                <td className="px-4 py-2">
                <div className="flex items-center gap-2">
  <Link
    href={`/offerzone/${index + 1}?sort=asc`}
    className="bg-cyan-400 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center"
  >
    <ArrowUpIcon className="h-5 w-5" />
  </Link>

  <Link
    href={`/offerzone/${index + 1}?sort=desc`}
    className="bg-cyan-400 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center"
  >
    <ArrowDownIcon className="h-5 w-5" />
  </Link>
</div>

                
                </td>




                <td className="px-4 py-2">
                  <Link
                    href={`/offerregister/${index + 1}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
                  >
                    <PencilIcon className="h-5 w-5" /> Edit
                  </Link>
                </td>

                <td className="px-4 py-2">

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1">
  <XCircleIcon className="h-4 w-4 text-white" />
  End
</button>

 
</td>



                <td className="px-4 py-2">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    🗑
                  </button>
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
            Showing 1 to {fakeOffers.length} of {fakeOffers.length} entries
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

    