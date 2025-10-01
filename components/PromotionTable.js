'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Link from "next/link"; 
import { PencilIcon, TrashIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function PromotionTable() {

  const [showModal, setShowModal] = useState(false);
  const [newPromoData, setNewPromoData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    priority: '',
    promotionType: 'percentage',
    discountValue: 0,
    applyOn: 'allBranches',
  });
  



  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/promotions`);
        setPromotions(response.data);
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
      }
    };

    fetchPromotions();
  }, []);

  const handleAddPromotion = async () => {
    try {
      const payload = {
        ...newPromoData,
        status: 'active',     // Add default
        branches: [],         // Empty for now
        products: [],         // Empty for now
        categories: [],       // Empty for now
      };
  
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/promotions`,
        payload
      );
  
      setPromotions(prev => [...prev, response.data]); // add new promo to list
      setShowModal(false); // close modal
      setNewPromoData({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        priority: '',
        promotionType: 'percentage',
        discountValue: 0,
        applyOn: 'allBranches',
      });
  
    } catch (error) {
      console.error("Failed to create promotion:", error);
      alert("Failed to create promotion");
    }
  };
  const handleDeletePromotion = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this promotion?");
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/promotions/${id}`);
      setPromotions((prev) => prev.filter((promo) => promo._id !== id));
    } catch (error) {
      console.error("Failed to delete promotion:", error);
      alert("Failed to delete promotion.");
    }
  };
  
  





  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-400">Promotion List</h1>
      </div>
      <div className="bg-white shadow border border-gray-300 p-6">
        <div className="flex flex-col space-y-4 mb-4 border-b border-gray-200 pb-4">
          <input
            type="text"
            placeholder="Promotion Title"
            className="border border-gray-300 p-2 px-4 py-2 "
          />
          <div className="flex justify-end space-x-2 mb-6">
            
          <button
  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-blue-700"
  onClick={() => setShowModal(true)}
>
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
        
        {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Add New Promotion</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={newPromoData.title}
          onChange={(e) => setNewPromoData({ ...newPromoData, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <textarea
          placeholder="Description"
          value={newPromoData.description}
          onChange={(e) => setNewPromoData({ ...newPromoData, description: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="date"
          value={newPromoData.startDate}
          onChange={(e) => setNewPromoData({ ...newPromoData, startDate: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="date"
          value={newPromoData.endDate}
          onChange={(e) => setNewPromoData({ ...newPromoData, endDate: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="number"
          placeholder="Priority"
          value={newPromoData.priority}
          onChange={(e) => setNewPromoData({ ...newPromoData, priority: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Promotion Type */}
<select
  value={newPromoData.promotionType}
  onChange={(e) => setNewPromoData({ ...newPromoData, promotionType: e.target.value })}
  className="w-full p-2 border border-gray-300 rounded"
>
  <option value="percentage">Percentage</option>
  <option value="flat">Flat</option>
</select>

{/* Discount Value */}
<input
  type="number"
  placeholder="Discount Value"
  value={newPromoData.discountValue}
  onChange={(e) => setNewPromoData({ ...newPromoData, discountValue: Number(e.target.value) })}
  className="w-full p-2 border border-gray-300 rounded"
/>

{/* Apply On */}
<select
  value={newPromoData.applyOn}
  onChange={(e) => setNewPromoData({ ...newPromoData, applyOn: e.target.value })}
  className="w-full p-2 border border-gray-300 rounded"
>
  <option value="allBranches">All Branches</option>
  <option value="products">Specific Products</option>
  <option value="categories">Categories</option>
</select>


      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleAddPromotion}
        >
          Save Promotion
        </button>
      </div>
    </div>
  </div>
)}





        <table className="overflow-x-auto min-w-full bg-white border-collapse border-b border-gray-200">
          <thead className="bg-gray-100 border-b ">
            <tr>
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Start</th>
              <th className="text-left px-4 py-2">End</th>
              <th className="text-left px-4 py-2">Priority</th>
              <th className="text-left px-4 py-2">Index</th>
              <th className="text-left px-4 py-2">Edit</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Delete</th>
              <th className="text-left px-4 py-2">Print</th>
            </tr>
          </thead>
          <tbody>
            {promotions.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  No promotions found.
                </td>
              </tr>
            ) : (
              promotions.map((promo, index) => (
                <tr
                  key={promo._id || index}
                  className="border-b border-gray-200 border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{promo.title}</td>
                  <td className="px-4 py-2">{promo.description}</td>
                  <td className="px-4 py-2">{new Date(promo.startDate).toISOString().slice(0, 10)}</td>
                  <td className="px-4 py-2">{new Date(promo.endDate).toISOString().slice(0, 10)}</td>
                  <td className="px-4 py-2">{promo.priority || '-'}</td>

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
                      href={`/promotionregister/${promo._id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-2"
                    >
                      <PencilIcon className="h-5 w-5" />Edit
                    </Link>
                  </td>

                  <td className="px-4 py-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Start</button>
                  </td>
                  <td className="px-4 py-2">
  <button
    onClick={() => handleDeletePromotion(promo._id)}
    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
  >
    🗑
  </button>
</td>

                
                  <td className="px-4 py-2">
                    <button className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500">🖨</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan="9" className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Showing 1 to {promotions.length} of {promotions.length} entries
                  </span>
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
