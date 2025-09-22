'use client';
import React from 'react';
import {useState } from 'react';
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid';


export default function BulkUpdate(){
 const [file,setFile] = useState(null);
 const[branch,SetBranch] =useState("");
 const handleFileChange = (e) =>{
    setFile(e.target.files[0]);
 };
 return(
    <div className ="p-6">
        <div className ="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold">Bulk Update</h2>
<button className='flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'>
<ArrowDownTrayIcon className="h-4 w-4"/>Download Excel



</button>
        </div>
        {/* card*/}
        < div className="bg-white shadow-md rounded-lg p-6 w-full ">
        {/**file upload */}
        <label className='block mb-4'>

    

        <div className='mt-2 flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:border-blue-500 w-1/2'>
<ArrowUpTrayIcon className="h-5 w-5 text-gray-500"/><input type="file" accept=".xlsx,.xls" onChange={handleFileChange} className="hidden"/>

<span className="text-gray-700">
    {file?file.name:"please select excel file..."}
</span>

</div>
</label>


{/**Branch dropwdown */}

{/* Branch Dropdown styled like input with label */}
<label className="block mb-6 w-1/2 ">
  <div className="border border-gray-300 rounded-lg p-2">
    <span className="text-sm font-semibold block mb-1 ">Branch</span>
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

    



{/**Buttons */}
<div className="flex gap-4 ">
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update</button>
    <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Cancel</button>





</div>
        </div>

    </div>
 )




}
   

