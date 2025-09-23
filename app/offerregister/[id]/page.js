"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarWithProducts from "@/components/NavbarWithProductPreview";

export default function offerEditPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    promotionType: "",
    title: "",
    description: "",
    productRow: "",
    sendNotification: false,
    branch: "",
    startDate: "",
    endDate: "",
    showOnScreen: {
      home: false,
      productRow: false,
      searchPage: false,
    },
  });

  // Generic input handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Toggle for the right-side switches (home/productRow/searchPage)
  const handleToggle = (key) => {
    setFormData((prev) => ({
      ...prev,
      showOnScreen: {
        ...prev.showOnScreen,
        [key]: !prev.showOnScreen[key],
      },
    }));
  };

  // Notification toggle (you had a custom button)
  const toggleNotification = () => {
    setFormData((prev) => ({ ...prev, sendNotification: !prev.sendNotification }));
  };

  // Listen to the navbar event
  useEffect(() => {
    const handler = (e) => {
      const detail = e?.detail || {};
      setFormData((prev) => ({
        ...prev,
        promotionType: detail.promotionType ?? prev.promotionType,
        title: detail.title ?? prev.title,
        description: detail.description ?? prev.description,
        productRow: detail.productRow ?? prev.productRow,
        showOnScreen: {
          ...prev.showOnScreen,
          productRow:
            detail.showOnScreenProductRow ?? prev.showOnScreen.productRow,
        },
      }));
    };

    window.addEventListener("nav:productsClicked", handler);
    return () => window.removeEventListener("nav:productsClicked", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 rounded-t-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-400">Create New Top Offers</h1>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow rounded-lg">
        {/* LEFT COLUMN */}
        <div className="space-y-5">
          {/* Promotion Type */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 flex justify-between">
                <span>Promotion Type</span>
                <span className="text-right text-red-500">*</span>
              </label>
              <input
                type="text"
                name="promotionType"
                value={formData.promotionType}
                onChange={handleChange}
                placeholder="please enter the promotion type..."
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Title */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 flex justify-between">
                <span>Title</span>
                <span className="text-right text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 flex justify-between">
                <span>Description</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          {/* Product rows */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 text-left">
                Product Rows
              </label>
              <select
                name="productRow"
                value={formData.productRow}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded text-gray-700"
                required
              >
                <option value="">Please enter the Promotion type..</option>
                <option value="row1">Product Row 1</option>
                <option value="row2">Product Row 2</option>
                <option value="row3">Product Row 3</option>
              </select>
            </div>
          </div>

          {/* Send Notification to User */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-4 shadow space-y-2">
              <label className="block text-xl font-bold mb-1 text-left">
                Send Notification To User
              </label>

              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={toggleNotification}
                  className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    formData.sendNotification ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                      formData.sendNotification ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Branch */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 text-left">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Please enter the branch name.."
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Start date */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 text-left flex justify-between">
                <span>Start Date</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="dd----yyyy--:---"
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* End date */}
          <div className="col-span-2">
            <div className="bg-white border border-gray-200 p-2 shadow">
              <label className="block text-xl font-bold mb-1 text-left flex justify-between">
                <span>End date</span>
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                placeholder="dd----yyyy--:---"
                required
                className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          <div className="bg-white border border-gray-200 p-4 pb-8 shadow rounded space-y-4">
            <label className="block text-xl font-bold mb-6 flex justify-between">
              <span>Show On Screen</span>
              <span className="text-red-500">*</span>
            </label>

            {/* Home Section Toggle */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => handleToggle("home")}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  formData.showOnScreen.home ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                    formData.showOnScreen.home ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-gray-900 pl-2 text-lg ">Home Section</span>
            </div>

            {/* Product Row Toggle */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => handleToggle("productRow")}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  formData.showOnScreen.productRow ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                    formData.showOnScreen.productRow ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-gray-700 pl-2 text-lg">Product Row</span>
            </div>

            {/* Search Page Toggle */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => handleToggle("searchPage")}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  formData.showOnScreen.searchPage ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                    formData.showOnScreen.searchPage ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-gray-800 pl-2 text-lg">Search Page</span>
            </div>
          </div>
        </div>
      </form>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Save
        </button>

        <button type="button" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
}
