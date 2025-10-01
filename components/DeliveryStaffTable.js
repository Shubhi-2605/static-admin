'use client';
import React,{useEffect,useState} from 'react';
import Link from "next/link"; 
import { PencilIcon, TrashIcon,ArrowsUpDownIcon } from "@heroicons/react/24/solid";
export default function DeliveryStaffTable() {
  const [deliveryStaff, setDeliveryStaff] = useState([]);

  useEffect(() => {
    async function fetchDeliveryStaff() {
      try {
        const response = await fetch('http://localhost:5000/api/users/delivery-boys');
        const result = await response.json();
        if (result.status && result.data) {
          const staffData = result.data.map(staff => ({
            name: staff.name,
            surname: staff.surname,
            phone: staff.phone
          }));
          setDeliveryStaff(staffData);
        }
      } catch (error) {
        console.error('Failed to fetch delivery staff:', error);
      }
    }
    fetchDeliveryStaff();
  }, []);







  return (
    <div className="p-6 bg-gray-55 min-h-screen">
      <h2 className="text-xl  text-gray-400 font-bold mb-4">Delivery Staff List</h2>




{/* Filters Section */}
<div className="bg-white p-4 mb-4">
  
{/* Row: Name + Store in one line */}
<div className="flex items-center justify-between gap-6 mb-6">
  
  {/* Name Field */}
  <div className="flex items-center gap-2 w-1/2">
    <label htmlFor="name" className="text-xl font-bold">
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Please enter the name"
      className="border border-gray-200 shadow-sm px-4 py-2 flex-1"
    />
  </div>

  {/* Store Field */}
  <div className="flex items-center gap-2 w-1/2">
    <label htmlFor="store" className="text-xl font-bold">
      Store
    </label>
    <select
      id="store"
      className="border border-gray-200 shadow-sm px-4 py-2 flex-1"
    >
      <option value="">All Stores</option>
    </select>
  </div>
</div>


 


  {/* Row 2: Buttons aligned to the right */}
  <div className="flex justify-end mb-4 gap-2">
    <button className="bg-gray-200 text-gray-800 px-4 py-2 border border-gray-200 hover:bg-blue-700 border">
      + Add New
    </button>
    <button className="bg-gray-200 text-gray-800 px-4 py-2 border border-gray-200">
      Search
    </button>
    <button className="bg-red-600 text-white rounded shadow p-2 hover:bg-red-700">
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>






      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead >
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
  {deliveryStaff.map((promo, index) => (
    <tr key={index} className="border-t border-gray-300 hover:bg-gray-50">
      <td className="px-4 py-2">{promo.name}</td>
      <td className="px-4 py-2">{promo.surname}</td>
      <td className="px-4 py-2">{promo.phone}</td>

      {/* Actions aligned right */}
      <td className="px-4 py-2 text-right">
        <div className="flex justify-end gap-2">
          <Link
            href={`/promotionregister/${index + 1}`}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
          >
            <PencilIcon className="h-5 w-5" />
            Edit
          </Link>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1">
            <TrashIcon className="h-5 w-5" />
           
          </button>
        </div>
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
                  Showing 1 to {deliveryStaff.length} of {deliveryStaff.length} entries
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
    </div>
  );
}
