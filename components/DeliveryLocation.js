"use client";
import { useState } from "react";
import { stores, deliveryZones } from "../data/stores";

export default function DeliveryLocation() {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="p-6 min-h-screen bg-neutral-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Delivery Location Management
      </h1>

      {/* Store Dropdown */}
      <div className="relative mb-6">
  {/* Centered Dropdown */}
  <div className="flex justify-center">
    <select
      className="border rounded p-2 w-[500px]"
      onChange={(e) => setSelectedStore(e.target.value)}
    >
      <option value="">Please enter the store...</option>
      {stores.map((store) => (
        <option key={store.id} value={store.id}>
          {store.name}
        </option>
      ))}
    </select>
  </div>

  {/* Right-Aligned Button */}
  <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-4 py-2  hover:bg-gray-300">
    Launch Example
  </button>
</div>



      {/* Map + Form */}
      {selectedStore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fake Map */}
          <div className="border border-white border-5 h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">[Google Map Placeholder]</p>
          </div>

          {/* Form */}
          <div className="border border-white p-4">
          


          {/* Total Delivery Location Row */}
<div className="flex justify-between items-center mb-4">
  {/* Left: Label */}
  <span className="text-lg">Total delivery location:</span>

  {/* Center: Count */}
  <span className=" text-lg">1</span>

  {/* Right: Reload Button */}
  <button className="text-sm px-3 py-1 mb-2 border rounded border-gray-600 bg-gray-100 hover:bg-gray-200">
    Reload
  </button>
</div>

            <h2 className="text-lg flex justify-center font-semibold mb-4">Add New Delivery Zone</h2>
            <form className="space-y-4">
            
            <div className="flex items-center mb-4">
  <label className="w-1/2 text-lg">New Delivery Zone Name</label>
  <input
    type="text"
    className="w-1/2 border rounded p-2 bg-white"
  />
</div>


<div className="flex items-center mb-4">
  <label className=" w-1/2 text-lg">Free Delivery Amount</label>
  <input
  type="text" className="w-1/2 bg-white border border-rounded p-2"
/>
</div>
<div className="flex items-center mb-4">
  <label className="w-1/2 text-lg">Minimun Amount for Order</label>
  <input
    type="text"
    className="w-1/2 border rounded p-2 bg-white"
  />
</div>
<div className="flex items-center mb-4">
  <label className="w-1/2 text-lg">Delivery slot Time(In Minutes)</label>
  <input
    type="text"
    className="w-1/2 border rounded p-2 bg-white"
  />
</div>



          
              <div className="flex gap-2">
                <div className="text-lg w-1/2">Delivery Time (Start/End)</div>
                <div className=" w-1/2  flex items-center gap-2">
                <input type="time" className="border rounded bg-white p-2 w-1/2" />
                <input type="time" className="border rounded bg-white p-2 w-1/2" />
              </div>
              </div>

              <div className="flex items-center mb-4">
  <label className="w-1/2 text-lg">Delivery Charge Per Kilometer</label>
  <input
    type="text"
    className="w-1/2 border rounded p-2 bg-white"
  />
</div>
<div className="flex items-center mb-4">
  <label className="w-1/2 text-lg">Delivery Charge Applicable After kilometer</label>
  <input
    type="text"
    className="w-1/2 border rounded p-2 bg-white"
  />
</div>






           
              <div className="flex items-center gap-4">
                <div  className=" text-lg w-1/2">Payment Accepted By</div>
               <div className="w-1/2 bg-white gap-2">
                
                 <label>
                  Card <input type="checkbox" className="mr-1 font-semibold" /> 
                </label>
                <label>
                  Online<input type="checkbox" className="mr-1 font-semibold" /> 
                </label>
                <label>
                  Cash<input type="checkbox" className="mr-1 font-semibold" /> 
                </label>
              </div>
                  </div>




              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
