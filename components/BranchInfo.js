'use client';
import React, { useState, useEffect } from 'react';
import { UploadIcon,PlusIcon,X } from 'lucide-react';


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

  const [branchTouched, setBranchTouched] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const [errors, setErrors] = useState({});

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


  const validateFields = () => {
    const newErrors = {};
  
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
    if (!formData.lat.trim()) newErrors.lat = 'Latitude is required';
    if (!formData.lng.trim()) newErrors.lng = 'Longitude is required';
    if (!formData.img.trim()) newErrors.img = 'Image is required';
    if (!formData.start.trim()) newErrors.start = 'Delivery start time is required';
    if (!formData.lng.trim()) newErrors.lng = 'Delivery End time is required';

    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  





  return (
<>
{/* Top Heading */}
<div className="bg-gray-100 px-6 py-4 text-lg font-semibold text-gray-800">


<div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
  <h2 className="text-2xl font-semibold text-gray-500">Branch Info</h2>
  
  
    <button
    className=" flex items-center gap-2 bg-gray-300 font-bold text-gray-500 px-4 py-2 rounded hover:bg-blue-700 text-sm"
    onClick={() => {
      // Your add branch logic here
      alert('Add branch clicked');
    }}
  >
    <PlusIcon strokeWidth={3} className="h-5 w-5 "/>Add Branch
  </button>
</div>




<div className="bg-white mt-10 p-6">
    <div className="flex gap-6 p-6 ">
      {/* Left Side */}
      <div className="w-1/2 bg-white p-6 rounded shadow">

        {/* Dropdown */}
{/* Unified “Branch” dropdown inside a single box */}
<div className="mb-4">
  <div className={`border px-3 pt-2 pb-1 w-full shadow-sm ${
    branchTouched && !selectedBranchId ? 'border-red-500' : 'border-gray-100'
  } relative`}>
    <label className="text-xl font-bold block mb-1">Branch
      <span className="text-red-500">*</span>
    </label>
    <select
      className="w-full text-gray-500 focus:outline-none"
      value={selectedBranchId}
      onChange={(e) => {
        setSelectedBranchId(e.target.value);
        setBranchTouched(true); // Mark touched on change
        handleBranchChange(e);
      }}
      onBlur={() => setBranchTouched(true)} // Mark touched on blur
    >
      <option value="">Please Enter the store...</option>
      {branches.map((b) => (
        <option key={b.id} value={b.id}>
          {b.name}
        </option>
      ))}
    </select>
    {/* Red asterisk on error */}
    {branchTouched && !selectedBranchId && (
      <span className="absolute right-3 top-8 text-red-500 font-bold pointer-events-none">*</span>
    )}
  </div>
</div>





        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">




        <div className="mb-4">
  <div className={`border px-3 pt-2 pb-1 w-full  shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-100'} relative`}>
    <label className="text-xl font-bold block mb-1">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      value={formData.email}
      className="w-full text-gray-900 focus:outline-none"
      placeholder="Enter your email"
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    {errors.email && <span className="text-red-500  absolute -bottom-4">{errors.email}</span>}
  </div>
</div>

<div className="mb-4">
<div className={`border px-3 pt-2 pb-1 w-full shadow-sm ${errors.address ? 'border-red-500' : 'border-gray-100'} relative`}>

    <label className="text-xl text-gray-900 block mb-1">Address
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      value={formData.address}
      className="w-full focus:outline-none"
      placeholder="Enter address"
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
    {errors.adress && <span className="text-red-500 absolute -bottom-4">{errors.adress}</span>}

    
  </div>
</div>

<div className="mb-4">
<div className={`border px-3 pt-2 pb-1 w-full shadow-sm ${errors.phone ? 'border-red-500' : 'border-gray-100'} relative`}>

    <label className="text-xl font-bold block mb-1">Phone<span className="text-red-500">*</span></label>
    <input
      type="text"
      value={formData.phone}
      className="w-full text-gray-900 focus:outline-none"
      placeholder="Enter phone"
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    />
        {errors.phone && <span className="text-red-500  absolute -bottom-4">{errors.phone}</span>}

  </div>
</div>

<div className="mb-4">
<div className={`border px-3 pt-2 pb-1 w-full shadow-sm ${errors.whatsapp ? 'border-red-500' : 'border-gray-100'} relative`}>

    <label className="text-xl font-bold block mb-1">WhatsApp
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      value={formData.whatsapp}
      className="w-full text-gray-900 focus:outline-none"
      placeholder="Enter WhatsApp"
      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}

    />
        {errors.whatsapp && <span className="text-red-500  absolute -bottom-4">{errors.whatsapp}</span>}

  </div>
</div>








<div className="flex gap-4 mb-4">
  {/* Store Lat */}
  <div className="w-1/2">
  <div className={`border px-3 pt-2 pb-1 w-full  shadow-sm ${errors.lat ? 'border-red-500' : 'border-gray-100'} relative`}>

      <label className="text-xl font-bold block mb-1">Store Lat<span className="text-red-500">*</span></label>
      <input
        type="text"
        value={formData.lat}
        className="w-full text-gray-900 focus:outline-none"
        placeholder="Enter Latitude"
        onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
      />
              {errors.lat && <span className="text-red-500  absolute -bottom-4">{errors.lat}</span>}

    </div>
  </div>

  {/* Store Lng */}
  <div className="w-1/2">
  <div className={`border px-3 pt-2 pb-1 w-full shadow-sm ${errors.lng ? 'border-red-500' : 'border-gray-100'} relative`}>

      <label className="text-xl font-bold block mb-1">Store Lng<span className="text-red-500">*</span></label>
      <input
        type="text"
        value={formData.lng}
        className="w-full text-gray-900 focus:outline-none"
        placeholder="Enter Longitude"
        onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
      />
              {errors.lng && <span className="text-red-500  absolute -bottom-4">{errors.lng}</span>}

    </div>
  </div>
</div>



{/* Toggle Store Open */}

 


{selectedBranchId && (
  <div className="mb-4 w-full">
    <div className="border px-3 pt-2 pb-2 w-full shadow-sm border-gray-100">
      <label className="text-xl font-bold block mb-2">Is Store Open</label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={formData.isStoreOpen}
          onChange={(e) =>
            setFormData({ ...formData, isStoreOpen: e.target.checked })
          }
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-cyan-500 transition-colors duration-200"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
      </label>
    </div>
  </div>
)}



          
<br/>


<div className="col-span-2">
<div className={`border px-3 pt-2 pb-1 w-full  shadow-sm ${errors.img ? 'border-red-500' : 'border-gray-100'} relative`}>

    <label className="text-xl font-bold  mb-1">Image<span className="text-red-500">*</span></label>

    <div className="flex items-center justify-between">
      {/* File input */}
      <input
        type="file"
        accept="image/*"
        className=" text-gray-900 focus:outline-none"
        onChange={(e) =>
          setFormData({ ...formData, imageUrl: e.target.files[0] })
        }
      />
              {errors.img && <span className="text-red-500  absolute -bottom-4">{errors.img}</span>}

      {/* Icons */}
      <div className="flex gap-2">
        {/* Upload Arrow */}
        <span className="text-gray-500 cursor-pointer"><UploadIcon className="h-5 w-5 stroke-3"/></span>

        {/* Cross (Clear) */}
        <span
          className="text-gray-500 cursor-pointer"
          onClick={() => setFormData({ ...formData, imageUrl: '' })}
        >
          <X className="h-5 w-5 stroke-2"/>
        </span>
      </div>
    </div>
  </div>
</div>

 
<div className="col-span-2 border border-gray-100  shadow-sm p-4 rounded">
  {/* Outer box heading */}
  <h2 className="text-lg font-semibold mb-4">Delivery time<span className="text-red-500">*</span></h2>

  {/* Row with two boxes */}
  <div className="flex gap-4">
    {/* Start box */}
    <div className={`flex-1 border border-gray-200 rounded p-4 shadow-sm ${errors.start ? 'border-red-500' : 'border-gray-100'} relative`}>
      <label className="block font-semibold mb-2">Start</label>
      <input
        type="time"
        value={formData.deliveryStart}
        className="w-full bg-transparent focus:outline-none"
        onChange={(e) =>
          setFormData({ ...formData, deliveryStart: e.target.value })
        }
      />
                    {errors.start && <span className="text-red-500 text-xs absolute -bottom-4">{errors.start}</span>}

    </div>

    {/* End box */}
    <div className={`flex-1 border border-gray-200 rounded p-4 shadow-sm ${errors.end ? 'border-red-500' : 'border-gray-100'} relative`}>
      <label className="block font-semibold mb-2">End<span className="text-red-500">*</span>*</label>
      <input
        type="time"
        value={formData.deliveryEnd}
        className="w-full bg-transparent focus:outline-none"
        onChange={(e) =>
          setFormData({ ...formData, deliveryEnd: e.target.value })
        }
      />
                    {errors.end && <span className="text-red-500  absolute -bottom-4">{errors.end}</span>}

    </div>
  </div>
</div>




        </div>

        {/* Buttons */}
        <div className="flex gap-4">


        <button
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  onClick={(e) => {
    e.preventDefault();
    if (validateFields()) {
      // Submit logic goes here
      alert("Form is valid and ready to submit!");
    }
  }}
>
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
            <div key={index} className="mb-4 border border-gray-100 shadow-sm p-4">
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
  </div>
</div>

    </>
   
  );
}
