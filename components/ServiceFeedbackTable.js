'use client'
 import { useEffect,useState } from "react";
 import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

 export default function ServiceFeedbackTable(){
    const [serviceData,setServiceData] = useState([]);

useEffect (()=>{
    const fakeData = [
        

        

        {
          name: 'Ai Quizon',
          emailPhone: 'duty.waffles@.com/+9712678767667',
         branch:'AI sa ad2 Abu dhabi',
         comment:'whatsapp has been proven to be useless   ' ,
         reasonOfFeedback:'late Delivery',
         serviceRating:'2',
         qualityRating:'4',
         deliveryRating : '2',
         date:'5/09/2025',
         orderId:'#CcC345u1z',
         status:'pending',
  
  
          },
        
    
           
             
      























    ];
    setServiceData(fakeData);
},[]);
return(

    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold  text-gray-500 mb-6">Service Feedback List</h1>
  <div className="bg-white p-6">


      <div className="flex justify-between mb-4">
            <input type ="text" placeholder="feedback search" className= "border rounded border-gray-300 px-4 py-2 w-full"
            />

        </div>
    
        <div className='flex justify-end mb-4  border-rounded'>
          <button className='flex items-center text-gray-500 bg-gray-200 px-4 py-3  rounded '><MagnifyingGlassIcon className="h-5 w-5 stroke-3"/>Search</button>

        </div>



      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-white  border-t  border-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
             
              <th className="px-4 py-2">Email/Phone</th>
              <th className="px-4 py-2">Branch</th>
              <th className="px-4 py-2">Comment</th>
              <th className="px-4 py-2">Reason of Feedback</th>
              <th className="px-4 py-2">Service Rating</th>
              <th className="px-4 py-2">Quality Rating</th>
              <th className="px-4 py-2">Delivery Rating</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Order Id</th>
              <th className="px-4 py-2">Status</th>



            </tr>
          </thead>
          <tbody>
            {serviceData.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 odd:bg-gray-100">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 text-blue-500">{item.emailPhone}</td>
                <td className="px-4 py-2">{item.branch}</td>
                <td className="px-4 py-2">{item.comment}</td>
                <td className="px-4 py-2">{item.reasonOfFeedback }</td>
                <td className="px-4 py-2">{item.serviceRating}</td>
                <td className="px-4 py-2">{item.qualityRating}</td>
                <td className="px-4 py-2">{item.deliveryRating}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.orderId}</td>
                <td className="px-4 py-2">{item.status}</td>




              </tr>
            ))}
          </tbody>



          <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="13" className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side: info text */}
          <span className="text-sm text-gray-600">
            Showing 1 to {serviceData.length} of {serviceData.length} entries
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









 