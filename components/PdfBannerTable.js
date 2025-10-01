'use client'
 import { useEffect,useState } from "react";
 import { MagnifyingGlassIcon,PlusIcon,ArrowLeftIcon,ArrowsUpDownIcon ,PauseIcon, TrashIcon,} from "@heroicons/react/24/outline";
import {PlayIcon,PencilIcon} from "@heroicons/react/24/solid";
 import Link from "next/link";


 export default function PdfBannerTable(){
    const [pdfData,setPdfData] = useState([]);
    const[showModal,setShowModal] = useState(false);
    const[selectedRow,setSelectedRow] = useState(null)

    useEffect(() => {
      const fetchPdfData = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/pdf-banners");
          const json = await res.json();
          if (json.success) {
            setPdfData(json.data); // Use the data from the backend
          } else {
            console.error("Failed to fetch PDF banners");
          }
        } catch (error) {
          console.error("Error fetching PDF banners:", error);
        }
      };
    
      fetchPdfData();
    }, []);

    const handleDelete = async (id) => {
      if (!confirm("Are you sure you want to delete this PDF?")) return;
    
      try {
        const res = await fetch(`http://localhost:5000/api/pdf-banners/${id}`, {
          method: "DELETE",
        });
    
        const result = await res.json();
        if (result.success) {
          // Remove the deleted item from the state
          setPdfData((prev) => prev.filter((item) => item._id !== id));
        } else {
          alert("Failed to delete PDF");
        }
      } catch (err) {
        console.error("Delete error:", err);
      }
    };
    
    

return(

  <div className="p-6  bg-gray-100 min-h-screen">

      <h2 className="text-2xl font-semibold mb-6 text-gray-400">Pdf Banner List</h2>
  

  <div className="bg-white p-4 mb-4">
      <div className=" flex justify-between mb-4">
            <input type ="text" placeholder=" Pdf Banner Title" className= "border border-gray-200 shadow-sm px-4 py-2 w-full"
            />

        </div>


        <div className="flex flex-col space-y-4 border-b border-gray-200">
       
        <div className="flex justify-end space-x-2">
          <button className="flex justify-between bg-gray-100 text-gray-800 px-4 py-2 mb-4 rounded hover:bg-gray-500">
            <PlusIcon className="h-5 w-5 stroke-[3] text-gray-700"/>
            <span className="text-gray-700 pl-1 ">Pdf Upload</span>
          </button>
          <button className="flex justify-between bg-gray-100 text-gray-800 px-4 py-2 mb-4 rounded hover:bg-gray-500">
            <MagnifyingGlassIcon className="h-5 w-5 stroke-[3] text-gray-700"/>
          
          <span className="text-gray-700">Search</span>
          </button>

          <button className="flex justify-between bg-red-500 text-white px-4 py-2 mb-4 rounded hover:bg-gray-500">
            <ArrowLeftIcon className="h-4 w-4 stroke-[3] mt-1"/>
            <span className="pl-1 font-bold">Clear</span>
          </button>


        </div>
      </div>




<div className=" ">
<table className=" overflow-x-auto min-w-full bg-white border-collapse border-b border-gray-200">


          <thead className=" text-l font-bold border-b border-gray-200 ">
            <tr>
        <th className="px-4 py-4">
          <div className="flex items-center gap-2">Name<ArrowsUpDownIcon className="h-4 w-4 stroke-[3] text-gray-500"/></div>

        </th>


            </tr>
          </thead>

          <tbody>
  {pdfData.map((item, idx) => (
    <tr key={item._id || idx} className="...">
      <td className="px-4 py-2">
        <a
          href={`http://localhost:5000${item.pdfUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {item.name}
        </a>
      </td>

      <td className="px-4 py-2">
        <div className="flex justify-end gap-2">
          <button
            title="Edit"
            onClick={() => {
              setSelectedRow(item);
              setShowModal(true);
            }}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center text-sm"
          >
            <PencilIcon className="h-4 w-4 mr-1" />
            Edit
          </button>

          <Link
            href={`http://localhost:5000${item.pdfUrl}`}
            target="_blank"
            className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2 hover:bg-green-600"
          >
            <PlayIcon className="h-4 w-4" />
            Start
          </Link>

          <button
  onClick={() => handleDelete(item._id)}
  className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
>
  <TrashIcon className="h-5 w-5 stroke-[3]" />
</button>


        
        </div>
      </td>
    </tr>
  ))}
</tbody>




          <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="4" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {pdfData.length} of {pdfData.length} entries
          </span>

          {/* Right side: pagination buttons */}
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



      {showModal && (
  <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 backdrop-blur-none bg-black/5">
    <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md mx-auto border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Branch</h3>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-600 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Modal Content */}
      <ul className="space-y-2 bg-gray-50  font-semibold ">
  {['Abu Dhabi Mall', 'Marina Walk', 'Al Wahda City Center','silver mall','Gravity mall','Phoenix mall','Hogwarts','Hogsmade Station','Diagon Alley'].map((branch, index) => (
    <li
      key={index}
      className="flex items-center justify-between border-collapse p-2"
    >
      <span>{branch}</span>
      <button
        onClick={() => console.log('Remove branch:', branch)}
        className="text-gray-400 hover:text-red-600 text-lg font-bold"
      >
        ✕
      </button>
    </li>
  ))}
</ul>






    </div>
  </div>
)}
















   </div>
</div>
   
   
)

}









 