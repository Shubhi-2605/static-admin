'use client';

import Link from 'next/link';
import { useState } from 'react';
import{ LockClosedIcon ,TrashIcon,PencilIcon} from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isPromotionOpen, setPromotionOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [isControlOpen, setControlOpen] = useState(false);

  const handleMouseLeave = () => {
    setPromotionOpen(false);
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Brand */}
      <div className="text-xl font-bold text-gray-800">WestZone</div>

      {/* Navigation Items */}
      <ul className="flex space-x-6 items-center">

        {/* Order */}
        <li>
          <Link href="/order" className="hover:text-blue-500">Order</Link>
        </li>

        {/* Products */}
        <li>
          <Link href="/products" className="hover:text-blue-500">Products</Link>
        </li>

        {/* Promotions Dropdown */}
        <li className="relative" onMouseLeave={handleMouseLeave}>
          <button
            onClick={() => setPromotionOpen(!isPromotionOpen)}
            className="hover:text-blue-500 focus:outline-none"
          >
            Promotions ▼
          </button>
          {isPromotionOpen && (
            <ul className="absolute mt-2 bg-white border rounded shadow-lg w-64 z-50">
              <li><Link href="/promotions" className="block px-4 py-2 hover:bg-gray-100">Promotions</Link></li>
              <li><Link href="/promotions" className="block px-4 py-2 hover:bg-gray-100">Coupons</Link></li>
              <li><Link href="/newofferzone" className="block px-4 py-2 hover:bg-gray-100">New Offer Zone</Link></li>
              <li><Link href="/offerzoneproductrow" className="block px-4 py-2 hover:bg-gray-100">New Offer Zone Product Row</Link></li>
            </ul>
          )}
        </li>

        {/* Users */}
        <li>
          <Link href="/users" className="hover:text-blue-500">Users</Link>
        </li>

        {/* Feedback Dropdown */}
        <li className="relative group">
          <button
            onClick={() => setFeedbackOpen(!isFeedbackOpen)}
            className="hover:text-blue-500 focus:outline-none"
          >
            Feedback ▼
          </button>
          {isFeedbackOpen && (
            <ul
              className="absolute mt-2 bg-white border rounded shadow-lg w-64 z-50"
              onMouseEnter={() => setFeedbackOpen(true)}
              onMouseLeave={() => setFeedbackOpen(false)}
            >
              <li><Link href="/feedback/suggested" className="block px-4 py-2 hover:bg-gray-100">Suggested Products</Link></li>
              <li><Link href="/feedback/service" className="block px-4 py-2 hover:bg-gray-100">Service Feedback</Link></li>
              <li><Link href="/feedback/product" className="block px-4 py-2 hover:bg-gray-100">Product Feedback</Link></li>
            </ul>
          )}
        </li>

        {/* Control Dropdown */}
        <li className="relative group">
          <button
            onClick={() => setControlOpen(!isControlOpen)}
            className="hover:text-blue-500 focus:outline-none"
          >
            Control ▼
          </button>
          {isControlOpen && (
            <ul
              className="absolute mt-2 bg-white border rounded shadow-lg w-64 z-50"
              onMouseEnter={() => setControlOpen(true)}
              onMouseLeave={() => setControlOpen(false)}
            >
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Building</Link></li>
              <li><Link href="/control/deliverystaff" className="block px-4 py-2 hover:bg-gray-100">Delivery Staff</Link></li>
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Area</Link></li>
              <li><Link href="/control/bulkupdate" className="block px-4 py-2 hover:bg-gray-100">Bulk Update</Link></li>
              <li><Link href="/control/pushnotification" className="block px-4 py-2 hover:bg-gray-100">Push Notification</Link></li>
              <li><Link href="/control/pdfbanner" className="block px-4 py-2 hover:bg-gray-100">Pdf Banner</Link></li>
              <li><Link href="/control/branchinfo" className="block px-4 py-2 hover:bg-gray-100">Branch Info</Link></li>
              <li><Link href="/control/deliverylocation" className="block px-4 py-2 hover:bg-gray-100">Delivery Location</Link></li>
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Prepared Staff & Driver</Link></li>
              <li><Link href="/control/outofstock" className="block px-4 py-2 hover:bg-gray-100">Out Of Stock</Link></li>
              <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Sftp Logs List</Link></li>
            </ul>
          )}
        </li>
      </ul>

      <div className="flex items-center space-x-4">
  {/* Admin Button */}
  <button className="bg-white hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
    Admin
  </button>

  {/* Logout Button */}
  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center gap-2">
    
    <LockClosedIcon className="h-5 w-5"/>Logout
  </button>
</div>
 

      
    </nav>
  );
}
