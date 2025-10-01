'use client';

import React from 'react';
import Link from "next/link";
import {useEffect,useState} from 'react';

import { XCircleIcon,PencilIcon, TrashIcon,ArrowUpIcon,ArrowDownIcon,ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { ArrowUpDownIcon } from 'lucide-react';


export default function OfferZoneTable() {

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchOffers();
  }, []);
  
  const fetchOffers = async () => {
    try {
   const token = localStorage.getItem('token');
      if (!token) {
        console.warn('No token found in localStorage');
        setLoading(false);
        return; // Stop fetching if no token
      }
  
      const response = await fetch('http://localhost:5000/api/new-offer-zone', {
        headers: {
          'Authorization': `Bearer ${token}`,  // ← add Authorization header here
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      console.log("Fetched offers:", data.data);
      setOffers(data.data || []);
    } catch (error) {
      console.error('Error fetching offers:', error);
    } finally {
      setLoading(false);
    }
  };
  


  const handleAddOffer = async () => {
    const newOffer = {
      title: "Fasting treats",
      description: "Fasting treats",
      typeOfOffer: "ProductRow section",
      startDate: "2025-09-20T00:00:00.000Z",
      endDate: "2025-09-30T23:59:59.000Z",
      status: "active",
      priority: 1,
      products: ["68ca8807e9bd1c18da6017c7"],
      categories: ["68ca8647e878e3f49364e0b8"],
      branches: ["68cbc9ba14147845b1ed4794"]
    };
  
    try {
      const res = await fetch('http://localhost:5000/api/new-offer-zone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOffer),
      });
  
      if (!res.ok) {
        throw new Error('Failed to create offer');
      }
  
      const result = await res.json();
      console.log("Offer created:", result);
  
      // Re-fetch the offers to update the table
      fetchOffers();
    } catch (err) {
      console.error("Error creating offer:", err);
    }
  };
  

  




  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className=" px-6 py-4 border-t border-gray-200">
        <h1 className="text-2xl font-bold text-gray-700">Offer’s List</h1>
      </div>

      {/* BODY (form + table) */}
      <div className="bg-white  p-6">
        {/* FORM */}
        <div className="space-y-4 mb-6">
          {/* Row 1: Input */}
          <div>
            <input
              type="text"
              placeholder="Promotion Title"
              className="border border-gray-200 px-4 py-2 w-full"
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
        <table className="min-w-full bg-white border-t border-collapse border-gray-200 ">
          <thead className="bg-white">
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
  {Array.isArray(offers) && offers.length > 0 ? (
    offers.map((offer, index) => (
      <tr key={offer._id || index} className="border-b border-gray-200 hover:bg-gray-50 odd:bg-gray-100">
        <td className="px-4 py-2">{offer.title}</td>
        <td className="px-4 py-2">{offer.description}</td>
        <td className="px-4 py-2">{offer.typeOfOffer}</td>
        <td className="px-4 py-2">{new Date(offer.startDate).toLocaleString()}</td>
        <td className="px-4 py-2">{new Date(offer.endDate).toLocaleString()}</td>
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
              className="bg-cyan-400 text-white px-3 py-1 hover:bg-blue-600 flex items-center justify-center"
            >
              <ArrowDownIcon className="h-5 w-5" />
            </Link>
          </div>
        </td>

        <td className="px-4 py-2">
          <Link
            href={`/offerregister/${index + 1}`}
            className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 flex items-center gap-2"
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
    ))
  ) : (
    <tr>
      <td colSpan="10" className="text-center text-gray-500 py-4">
        {loading ? "Loading offers..." : "No offers found."}
      </td>
    </tr>
  )}
</tbody>












          <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="9" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
  {Array.isArray(offers) && offers.length > 0
    ? `Showing 1 to ${offers.length} of ${offers.length} entries`
    : loading
    ? "Loading offers..."
    : "No offers found."}
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

    