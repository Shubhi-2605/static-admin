export const stores = [
    { id: 1, name: "MBK Tower - Business Bay" },
    { id: 2, name: "Barsha South - Near Dubai Science Park 3 Tower" }
  ];
  
  export const deliveryZones = {
    1: [
      {
        id: 1,
        name: "Zone A",
        freeAmount: 50,
        minOrder: 20,
        slotTime: 60,
        startTime: "09:00",
        endTime: "21:00",
        chargePerKm: 2,
        chargeAfterKm: 5,
        payment: ["Card", "Online", "Cash"]
      }
    ],
    2: [
      {
        id: 2,
        name: "Zone B",
        freeAmount: 30,
        minOrder: 15,
        slotTime: 45,
        startTime: "10:00",
        endTime: "22:00",
        chargePerKm: 1.5,
        chargeAfterKm: 3,
        payment: ["Card", "Cash"]
      }
    ]
  };
  