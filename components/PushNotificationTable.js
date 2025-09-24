'use client'
 import { useEffect,useState } from "react";
 import {PlusIcon,ArrowsUpDownIcon,MagnifyingGlassIcon } from "@heroicons/react/24/outline";
 import{PencilIcon} from "@heroicons/react/24/solid"
import Link from "next/link";


 export default function PushNotificationTable(){
    const [pushData,setPushData] = useState([]);

useEffect (()=>{
    const fakeData = [
        {
          username: 'AI Quizon',
          emailPhone: 'duty.wales@icloud.com/+9712678767667',
          phone:'0',
          title:'free delivery',
          message:'no subscription',
          date:'2/09/2025',
      },
      {
        username: 'AI Quizon',
        emailPhone: 'duty.wales@icloud.com/+9712678767667',
        phone:'0',
        title:'free delivery',
        message:'no subscription',
        date:'2/09/2025',
    },
    {
        username: 'AI Quizon',
        email: 'duty.wales@icloud.com/+9712678767667',
        phone:'0',
        title:'free delivery',
        message:'no subscription',
        date:'2/09/2025',
    },
    {
        username: 'AI Quizon',
        email: 'duty.wales@icloud.com/+9712678767667',
        phone:'0',
        title:'free delivery',
        message:'no subscription',
        date:'2/09/2025',
    },
    {
        username: 'AI Quizon',
        email: 'duty.wales@icloud.com/+9712678767667',
        phone:'0',
        title:'free delivery',
        message:'no subscription',
        date:'2/09/2025',
    },
    {
        username: 'AI Quizon',
        email: 'duty.wales@icloud.com/+9712678767667',
        phone:'0',
        title:'free delivery',
        message:'no subscription',
        date:'2/09/2025',
    },
];
    setPushData(fakeData);
},[]);
return(

    <div className="p-6 min-h-screen  bg-gray-40">
      <h2 className="text-xl text-gray-400 font-bold mb-4">Sent Push Notification List</h2>
  <div className="bg-white p-4 mb-4 ">
      <div className="flex justify-between mb-4">
            <input type ="text" placeholder="Sent Push Notification Title Search" className= "border border-gray-200 shadow-sm px-4 py-2 w-full"
            />

        </div>



        <div className="flex flex-col space-y-4 border-b border-gray-200 shadow-sm">
       
        <div className="flex justify-end space-x-2">
        <button className="flex justify-between bg-gray-100 text-gray-800 px-4 py-2 mb-4 rounded hover:bg-gray-500">
            <PlusIcon className="h-5 w-5 stroke-[3] text-gray-700"/>
          
          <span className="text-gray-700 pl-1">Send New</span>
          </button>

     
          <button className="flex justify-between bg-gray-100 text-gray-800 px-4 py-2 mb-4 rounded hover:bg-gray-500">
            <MagnifyingGlassIcon className="h-5 w-5 stroke-[3] text-gray-700"/>
          
          <span className="text-gray-700">Search</span>
          </button>


        </div>
      </div>


 <div className="overflow-x-auto  shadow-sm">
        <table className="min-w-full table-auto text-sm text-left border-collapse ">
          <thead className="bg-white text-black font-semibold text-l border-b border-gray-200 p-20">
            <tr>
              <th className="px-4 py-4">User Name</th>
             
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Phone</th>
              <th className="px-4 py-4">
                <div className="flex items-justify-between">
               <span>Title</span>
               <ArrowsUpDownIcon className="h-5 w-5 stroke-[3] text-gray-400 pl-1"/>
                        </div>
                        </th>
                        <th className="px-4 py-4">
                <div className="flex items-justify-between">
               <span>Message</span>
               <ArrowsUpDownIcon className="h-5 w-5 stroke-[3] text-gray-400 pl-1"/>
                        </div>
                        </th>

               <th className="px-4 py-4">
                <div className="flex items-justify-between gap-1">
               <span>Date</span>
               <ArrowsUpDownIcon className="h-5 w-5 stroke-[3] text-gray-400 pl-1"/>
                        </div>
                        </th>


            </tr>
          </thead>
          <tbody>
            {pushData.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200 border-collapse shadow-sm hover:bg-gray-50">
                <td className="px-4 py-2">{item.username}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.phone}</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.message}</td>
                <td className="px-4 py-2">{item.date}</td>
                
              <td className="px-1 py-1">
    



    <Link
href={`/promotionregister/${idx+1}`} 
className="bg-blue-600 text-white px-1 py-2 mr-1 rounded hover:bg-blue-300 flex items-center "
>
<PencilIcon className='h-5  mr-1'/>Edit
</Link>
</td>



              </tr>
            ))}
          </tbody>
        </table>
      </div>


<p  className="mt-4 text-sm text-gray-500">Showing{ pushData.length} enteries</p>
   
   </div>
   </div>
)

}









 