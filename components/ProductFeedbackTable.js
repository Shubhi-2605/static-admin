'use client'
 import { useEffect,useState } from "react"

 export default function ProductFeedbackTable(){
    const [productData,setProductData] = useState([]);

useEffect (()=>{
    const fakeData = [
        {

        name: 'AI Quizon',
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


        {

            name: 'bishnoi',
            emailPhone: 'duty.wales@icloud.com/+9712678767667',
           review:'average price',
           rating:'2',
           packingRating:'43',
           qualityRating:'4',
           productName:'ongs sesame oil    ',
           price:'0',
           barcode:'567678',
           storeId:'west Zone',
           reasonCode:'0',
           status:'pending',
           date:'30/08/2025    02:30',
           
            },
            {

                name: 'camela',
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
                    {

                        name: 'ekam',
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

    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6"> Product feedback list</h1>
  
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
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.emailPhone}</td>
                <td className="px-4 py-2">{item.review}</td>
                <td className="px-4 py-2">{item.rating}</td>
               
                <td className="px-4 py-2">{item.packingRating}</td>
                <td className="px-4 py-2">{item.priceRating}</td>
                <td className="px-4 py-2">{item.barcode}</td>
                <td className="px-4 py-2">{item.storeId}</td>
                <td className="px-4 py-2">{item.reasonCode}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">{item. date}</td>





              </tr>
            ))}
          </tbody>
        </table>
      </div>


<p  className="mt-4 text-sm text-gray-500">Showing{ productData.length} enteries</p>
   </div>
)









}









 