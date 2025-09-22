'use client';
import React, { useState, useEffect } from 'react';


export default function BranchInfo() {
  const branches = [
    {
      id: 'store1',
      name: 'Discovery Garden - Building No. 08',
      email: 'discover2@westzonefresh.com',
      address: 'Zen Cluster, Discovery Garden',
      phone: '+971547939580',
      whatsapp: '97144494085',
      lat: '25.04757',
      lng: '55.13114',
      isStoreOpen:true,
      imageUrl:'',
      deliveryStart: '11:00',
      deliveryEnd: '21:00',
    },
    {
      id: 'store2',
      name: 'JLT Branch',
      email: 'jlt@westzonefresh.com',
      address: 'Jumeirah Lakes Towers',
      phone: '+971500000000',
      whatsapp: '971500000000',
      lat: '25.10000',
      lng: '55.20000',

      isStoreOpen: false,
      imageUrl: '',
      deliveryStart: '08:00',
      deliveryEnd: '23:00',
    },
  ];

  const polygonsByBranch = {
    store1: [
      {
        area: 'DG2 (Furjan)',
        freeDelivery: 30,
        minOrder: 30,
        startTime: '11:00 AM',
        endTime: '9:00 PM',
        deliveryChargeK: 0,
        deliveryChargeA: 15,


      },
    ],
    store2: [
      {
        area: 'JLT Cluster B',
        freeDelivery: 25,
        minOrder: 20,
        startTime: '9:00 AM',
        endTime: '8:00 PM',

        deliveryChargeK: 2,
        deliveryChargeA: 10,
      },
    ],
  };


  const [isStoreOpen, setIsStoreOpen] = useState(true);
  const[branchData,setBranchData] = useState('')
  const [selectedBranchId, setSelectedBranchId] = useState('');
  const [formData, setFormData] = useState({

    
    email: '',
    address: '',
    phone: '',
    whatsapp: '',
    lat: '',
    lng: '',
    isStoreOpen:'',
    imageUrl:'',
    deliveryStart: '',
    deliveryEnd: '',
  });
  const [polygonList, setPolygonList] = useState([]);

  // Handle branch selection
  const handleBranchChange = (e) => {
    const branchId = e.target.value;
    setSelectedBranchId(branchId);

    const selected = branches.find((b) => b.id === branchId);
    if (selected) {
      setFormData({
        email: selected.email,
        address: selected.address,
        phone: selected.phone,
        whatsapp: selected.whatsapp,
        lat: selected.lat,
        lng: selected.lng,
        isStoreOpen:selected.isStoreOpen,
        imageUrl:selected.imageUrl,
        deliveryStart: selected.deliveryStart,
        deliveryEnd: selected.deliveryEnd,
      });
      setPolygonList(polygonsByBranch[branchId] || []);
    } else {
      // Reset if none
      setFormData({
        email: '',
        address: '',
        phone: '',
        whatsapp: '',
        lat: '',
        lng: '',

        isStoreOpen:'',
        imageUrl:'',
        deliveryStart: '',
        deliveryEnd: '',
      });
      setPolygonList([]);
    }
  };

  const inputClass = 'border border-gray-300 rounded px-3 py-2 w-full text-sm';

  return (
    <div className="flex gap-6 p-6">
      {/* Left Side */}
      <div className="w-1/2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Branch Info</h2>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Branch</label>
          <select
            className={inputClass}
            value={selectedBranchId}
            onChange={handleBranchChange}
          >
            <option value="">-- Select Branch --</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              className={inputClass}
              placeholder="Enter email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              value={formData.address}
              className={inputClass}
              placeholder="Enter address"
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              value={formData.phone}
              className={inputClass}
              placeholder="Enter phone"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp</label>
            <input
              type="text"
              value={formData.whatsapp}
              className={inputClass}
              placeholder="Enter WhatsApp"
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Store Lat</label>
            <input
              type="text"
              value={formData.lat}
              className={inputClass}
              placeholder="Enter Latitude"
              onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store Lng</label>
            <input
              type="text"
              value={formData.lng}
              className={inputClass}
              placeholder="Enter Longitude"
              onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
            />
          </div>

{/* Store Open Toggle */}
 <div className="mb-4 flex items-center gap-2">
              <label className="text-sm font-medium">Is Store Open</label>
              <input
                type="checkbox"
                checked={isStoreOpen}
                onChange={() => setIsStoreOpen(!isStoreOpen)}
                className="h-4 w-4"
              />
            </div>
            </div>
          
<br/>
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              value={formData.imageUrl}
              className={inputClass}
              placeholder=""
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
          </div>
          <br/>




          <div>
            <label className="block text-sm font-medium mb-1">Delivery Start</label>
            <input
              type="time"
              value={formData.deliveryStart}
              className={inputClass}
              onChange={(e) =>
                setFormData({ ...formData, deliveryStart: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Delivery End</label>
            <input
              type="time"
              value={formData.deliveryEnd}
              className={inputClass}
              onChange={(e) =>
                setFormData({ ...formData, deliveryEnd: e.target.value })
              }
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">


        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Update
          </button>
          <button className="px-4 py-2 bg-red-500 rounded hover:bg-gray-400">Cancel</button>
        </div>
      </div>

      {/* Right Side: Polygon List */}
      <div className="w-1/2 bg-white p-6 rounded shadow">
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-xl font-semibold mb-4">Branch Polygon Data</h2>

{/**                              *******export excel */}


{branchData && (
          <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
            Export Excel
          </button>
        )}

</div>


        {polygonList.length > 0 ? (
          polygonList.map((poly, index) => (
            <div key={index} className="mb-4 border rounded p-4">
              <h3 className="font-semibold text-lg mb-2">{poly.area}</h3>
              <p><strong>Free Delivery Amount:</strong> {poly.freeDelivery}</p>
              <p><strong>Minimum Amount Of Order:</strong> {poly.minOrder}</p>
              <p><strong>Delivery Time:</strong> {poly.startTime} - {poly.endTime}</p>
              <p><strong>Delivery Charge Per Kilometer:</strong> {poly.deliveryChargeK}</p>
              <p><strong>Delivery charge Applicable After Kilometer:</strong> {poly.deliveryChargeA}</p>
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  View & Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>


            </div>
          ))
        ) : (
          <p className="text-gray-500">No polygon data. Please select a branch.</p>
        )}
      </div>
    </div>
  );
}
