// context/FormContext.js
'use client';

import React, { createContext, useContext, useState,useEffect } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [productHoverData, setProductHoverData] = useState(null);

  useEffect(() => {
    const handleHover = (e) => {
      console.log("Received event data:", e.detail); 

      setProductHoverData(e.detail); // This will now include startDate and endDate
    };

    window.addEventListener('nav:productsClicked', handleHover);
    return () => window.removeEventListener('nav:productsClicked', handleHover);
  }, []);





  return (



    <FormContext.Provider value={{ productHoverData, setProductHoverData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormData must be used within a FormProvider');
  return ctx;
}
