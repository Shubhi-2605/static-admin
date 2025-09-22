// app/promotions/page.js
'use client'

import Navbar from '../../components/Navbar';
import PromotionTable from '../../components/PromotionTable';



export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <PromotionTable />
      
    
    </div>
  );
}
