'use client'
 import { useEffect,useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
 export default function ProductFeedbackTable(){
    const [productData,setProductData] = useState([]);

useEffect (()=>{
    const fakeData = [
     
      
     
                {

                    name: 'dwarf',
                    emailPhone: 'duty.wales@icloud.com/+9712678767667',
                   review:'Good quality and fair price',
                   rating:'4',
                   packingRating:'4',
                   qualityRating:'4',
                   productName:'ongs sesame oil    ',
                   price:'0',
                   barcode:'567678',
                   storeId:'west Zone',
                   reasonCode:'0',
                   status:'pending',
                   date:'30/08/2025    02:30',
                   
                    },
                  
                                        
    ];
    setProductData(fakeData);
},[]);
return(

    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6"> Product feedback list</h1>
  


  <div className="bg-white p-6">
      <div className="flex justify-between mb-4 border border-gray-200">
            <input type ="text" placeholder="feedback search" className= " px-4 py-2 w-full"
            />

        </div>
        <div className='flex justify-end mb-4  border-rounded'>
          <button className='flex items-center text-gray-500 bg-gray-200 px-4 py-3  rounded '><MagnifyingGlassIcon className="h-5 w-5 stroke-3"/>Search</button>

        </div>


      <div className="overflow-x-auto border-collapse border-t border-gray-200">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-white ">
            <tr>
              <th className="px-4 py-2">Name</th>
             
              <th className="px-4 py-2">Email/Phone</th>
           
              <th className="px-4 py-2">Review</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">packaging Rating</th>
              <th className="px-4 py-2">Quality Rating</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Barcode</th>
              <th className="px-4 py-2">StoreId</th>
              <th className="px-4 py-2">Reason COde</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>





            </tr>
          </thead>
          <tbody>
            {productData.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-200 odd:bg-gray-100 hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 text-blue-500">{item.emailPhone}</td>
                <td className="px-4 py-2">{item.review}</td>
                <td className="px-4 py-2">{item.rating}</td>
               
                <td className="px-4 py-2">{item.packingRating}</td>
                <td className="px-4 py-2">{item.qualityRating}</td>
                <td className="px-4 py-2">{item.productName}</td>
                <td className="px-4 py-2">{item.price}</td>

                <td className="px-4 py-2">{item.barcode}</td>
                <td className="px-4 py-2">{item.storeId}</td>
                <td className="px-4 py-2">{item.reasonCode}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">{item.date}</td>





              </tr>
            ))}
          </tbody>


          <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="14" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {productData.length} of {productData.length} entries
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


   </div>

   </div>
)









}









 