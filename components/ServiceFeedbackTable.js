'use client'
 import { useEffect,useState } from "react"

 export default function ServiceFeedbackTable(){
    const [serviceData,setServiceData] = useState([]);

useEffect (()=>{
    const fakeData = [
        {
        name: 'AI Quizon',
        emailPhone: 'duty.wales@icloud.com/+9712678767667',
       branch:'AI sa adah-Zone1-Moroor 2 Abu dhabi',
       comment:'contacting stores whatsapp has been proven to be useless   ' ,
       reasonOfFeedback:'late Delivery',
       serviceRating:'2',
       qualityRating:'4',
       deliveryRating : '2',
       date:'2/09/2025',
       orderId:'#CcC4erfu1z',
       status:'pending',


        },

        {
          name: 'aryan',
          emailPhone: 'ary@.com/+9712678767667',
         branch:'AI sa ad2 Abu dhabi',
         comment:'whatsapp has been proven to be useless   ' ,
         reasonOfFeedback:'late Delivery',
         serviceRating:'2',
         qualityRating:'4',
         deliveryRating : '2',
         date:'5/09/2025',
         orderId:'#CcC345u1z',
         status:'active',
  
  
          },
          {
            name: 'beam',
            emailPhone: 'bbream@.com/+9712678767667',
           branch:'centrel perk',
           comment:'contacting stores whatsapp has been proven to be useless   ' ,
           reasonOfFeedback:'late Delivery',
           serviceRating:'2',
           qualityRating:'4',
           deliveryRating : '2',
           date:'3/09/2025',
           orderId:'#CcC4erfu1z',
           status:'pending',
    
    
            },
            {
              name: 'chitra',
              emailPhone: 'chitra@.com/+9712678767667',
             branch:'urban clould volt',
             comment:'contacting stores whatsapp has been proven to be useless   ' ,
             reasonOfFeedback:'late Delivery',
             serviceRating:'2',
             qualityRating:'4',
             deliveryRating : '2',
             date:'6/09/2025',
             orderId:'#ATYGUerfu1z',
             status:'active',
      
      
              },
              {
                name: 'diven',
                emailPhone: 'duty.wales@icloud.com/+9712678767667',
               branch:'kernel mussorie',
               comment:'contacting stores whatsapp has been proven to be useless   ' ,
               reasonOfFeedback:'late Delivery',
               serviceRating:'2',
               qualityRating:'4',
               deliveryRating : '2',
               date:'7/09/2025',
               orderId:'#CcC4erfu1z',
               status:'pending',
        
        
                },
                    























    ];
    setServiceData(fakeData);
},[]);
return(

    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">Service Feedback List</h1>
  
      <div className="flex justify-between mb-4">
            <input type ="text" placeholder="feedback search" className= "border rounded px-4 py-2 w-1/3"
            />

        </div>


      <div className="overflow-x-auto border rounded">
        <table className="min-w-full table-auto text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase border-b">
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
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.emailPhone}</td>
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
        </table>
      </div>


<p  className="mt-4 text-sm text-gray-500">Showing{ serviceData.length} enteries</p>
   </div>
)









}









 