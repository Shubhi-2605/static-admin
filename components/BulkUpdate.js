'use client';
import React, { useState } from 'react';
import { ArrowUpTrayIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function BulkUpdate() {
  const [file, setFile] = useState(null);
  const [branch, setBranch] = useState('0');
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];

    if (!validTypes.includes(selectedFile.type)) {
      setModalVisible(true); // Show the modal if the file type is not valid
      e.target.value = null;
      return;
    }

    setFile(selectedFile);
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-500 font-semibold">Bulk Update</h2>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full">
        {/* Row: File Upload Left | Download Button Right */}
        <div className="flex justify-between items-center mb-6">
          {/* File Upload */}
          <label className="w-1/2 cursor-pointer">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:border-blue-500">
              <ArrowUpTrayIcon className="h-5 w-5 text-gray-500" />
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-black font-bold">
                {file ? file.name : 'Please select excel file...'}
              </span>
            </div>
          </label>

          {/* Download Excel Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download Excel
          </button>
        </div>

        {/* Branch Dropdown */}
        <label className="block mb-6 w-1/2">
          <div className="border border-gray-300 rounded-lg p-2">
            <span className="text-sm font-bold block mb-1">Branch</span>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="block w-full px-2 py-1 text-gray-500 focus:outline-none"
            >
              <option value="0">Please select the Store..</option>
              <option value="store1">Store1</option>
              <option value="store2">Store2</option>
            </select>
          </div>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Update
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>

      {/* Modal for error */}
      {modalVisible && (
        <div className="fixed inset-x-0 top-10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 text-center border border-gray-300">
            <h3 className="text-xl font-bold text-black border-b border-gray-400">Error in uploading excel file!</h3>
            <p className="text-black font-semibold text-gray-600 border-b border-gray-400 mt-2">
              Excel sheet is not in the correct format. Please download the sample.
            </p>
            <div className="mt-4 flex gap-4 flex justify-end">
            <button
                onClick={closeModal}
                className="px-6 py-2 bg-green-500 text-white rounded-lg "
              >
                yes
              </button>
              
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
