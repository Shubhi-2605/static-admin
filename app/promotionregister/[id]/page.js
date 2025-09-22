"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import{Percent,Tag,Gift} from "lucide-react";

export default function PromotionEditPage() {
  const { id } = useParams();
  const [promotion, setPromotion] = useState(null);

  useEffect(() => {
    const fakePromotion = {
      id,
      title: "Hurry In! Offers Picked Fresh",
      description: "Fresh & Fabulous! 🍓🍇🍉🥑🍋🍊🥒🌶",
      subtitle: "",
      subDescription: "",
      type: "Products",
      image: "/sample.jpg",
      startDate:"27.08.25",
      endDate:"29.08.25"

      
    };
    setPromotion(fakePromotion);
  }, [id]);

  const handleChange = (e) => {
    setPromotion({ ...promotion, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving...", promotion);
  };

  if (!promotion) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 rounded-t-lg mb-6">
        <h1 className="text-2xl font-bold text-gray-400">Promotion Info</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow rounded-lg"
      >
        {/* LEFT COLUMN */}
        <div className="space-y-5">


          {/* Title Box Header */}
<div className="col-span-2">
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 flex justify-between">
      <span>Title</span>
      <span className="text-right text-red-500">*</span>
    </label>
    <input
      type="text"
      name="title"
      value={promotion.title}
      onChange={handleChange}
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
      name="title"
      value={promotion.description}
      onChange={handleChange}
      className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
    required
    />
  </div>
</div>





          {/* Sub Title */}
          <div className="col-span-2">
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 text-left">
      Sub Title
    </label>
    <input
      type="text"
      name="title"
      placeholder="Sub Title"
      value={promotion.subtitle}
      onChange={handleChange}
      className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
    />
  </div>
</div>




          {/* Sub Description */}
          <div className="col-span-2">
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 text-left">
      Sub Description
    </label>
    <input
      type="text"
      name="title"
      value={promotion.subDescription}
      onChange={handleChange}
      placeholder="Sub Description"
      className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
    />
  </div>
</div>



{/* Promotion Type */}
<div className="col-span-2">
  <label className="block font-medium text-gray-700 mb-2">
    Select Promotion Type <span className="text-red-500"></span>
  </label>

  <div className="bg-white border rounded-lg p-4  shadow">
    <div className="grid grid-cols-3  gap-6">
      {[
        { type: "percentage", icon: <Percent size={60} strokeWidth={3} className="text-gray-700" />, label: "Percentage" },
        { type: "tag", icon: <Tag size={60} strokeWidth={3} className="text-gray-500" />, label: "Tag" },
        { type: "gift", icon: <Gift size={60} strokeWidth={3} className="text-gray-500" />, label: "Gift" },
        { type: "percentage", icon: <Percent size={60} strokeWidth={3} className="text-gray-500" />, label: "Gift item" },
        { type: "tag", icon: <Gift size={60} strokeWidth={3} className="text-gray-500" />, label: "Gift" },
        { type: "percentage", icon: <Tag size={60} strokeWidth={3} className="text-gray-500" />, label: "sub category" },

        { type: "products", icon: <Percent size={60} strokeWidth={3} className="text-gray-500" />, label: "Products" },

      
      
      
      ].map((opt,index) => (
        <div key={opt.type+index} className="flex flex-col items-center">
          {/* Icon inside box */}
          <div
            className={`flex items-center justify-center w-full h-40 border rounded-lg transition
              ${promotion.type === opt.type ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white hover:bg-gray-100"}
            `}
          >
            {opt.icon}
          </div>

          {/* Radio + Label outside and below */}
          <label className="mt-2 flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value={opt.type}
              checked={promotion.type === opt.type}
              onChange={handleChange}
            />
            <span className="text-sm">{opt.label}</span>
          </label>
        </div>
      ))}
    </div>
  </div>
</div>


{/* Products Box → always visible */}
<div className="col-span-2">
  <div className="bg-white border border-gray-200 p-4 shadow rounded-lg">
    <label className="block text-xl font-bold mb-3 text-left">
      Products
    </label>

    {/* Show data ONLY if Products radio is selected */}
    {promotion.type === "products" ? (
      <ul className="space-y-2">
        {[
          { id: 1, name: "Apple", price: "$2.00" },
          { id: 2, name: "Banana", price: "$1.00" },
          { id: 3, name: "Orange", price: "$1.50" },
          { id: 4, name: "Grapes", price: "$3.20" },
        ].map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-2 border rounded hover:bg-gray-50"
          >
            <span>{item.name}</span>
            <span className="text-gray-600">{item.price}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400 italic">Select "Products" promotion type to view products</p>
    )}
  </div>
</div>


          {/*branch */}
          <div className="col-span-2">
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 text-left">
      Branch
    </label>
    <input
      type="text"
      name="title"
      value={promotion.subDescription}
      onChange={handleChange}
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
      name="title"
      value={promotion.startDate}
      onChange={handleChange}
      
      className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
    />
  </div>
</div>

          {/* end date */}
          <div className="col-span-2">
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 text-left flex justify-between">
      <span>End date</span>
      <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="title"
      value={promotion.endDate}
      onChange={handleChange}
      required
      
      className="text-xl font-semibold pl-3 text-gray-500 w-full bg-transparent outline-none"
    />
  </div>
</div>
</div>

        {/* RIGHT COLUMN */}

        <div className="flex flex-col gap-10">
  {/* Image Box */}
  <div className="bg-white border border-gray-200 p-2 shadow">
    <label className="block text-xl font-bold mb-1 flex justify-between">
      <span>Image</span>
      <span className="text-red-500">*</span>
    </label>

    {/* Image Preview */}
    <img
      src="/fruits.jpg"
      alt="Preview"
      className="w-full h-80 object-cover border rounded mb-2"
    />

    {/* File Input */}
    <input
      type="file"
      onChange={(e) =>
        setPromotion({
          ...promotion,
          image: URL.createObjectURL(e.target.files[0]),
        })
      }
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      required
    />
  </div>

  {/* Phone Mockup */}
  <div className="relative w-64 h-128 mx-auto bg-black rounded-3xl border-4 border-gray-800 overflow-hidden shadow-lg">
    {/* Phone notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-xl"></div>

    {/* Image inside phone */}
    <img
      src="/fruits.jpg"
      alt="Phone Preview"
      className="w-full h-full object-cover"
    />

    {/* Title overlay */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-center text-sm">
      {promotion.title}
    </div>
  </div>
</div>



</form>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>

        <button
          type="button"
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
