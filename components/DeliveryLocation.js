"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function DeliveryLocation() {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/branches");
        setBranches(res.data.branches || []);
      } catch (err) {
        console.error("Error fetching branches:", err.message);
      }
    };

    fetchBranches();
  }, []);

  const handleBranchChange = async (e) => {
    const id = e.target.value;
    setSelectedBranchId(id);

    if (id) {
      try {
        const res = await axios.get(`http://localhost:5000/api/branches/${id}`);
        setSelectedBranch(res.data.branch);
      } catch (err) {
        console.error("Error fetching branch data:", err.message);
      }
    } else {
      setSelectedBranch(null);
    }
  };

  const center = selectedBranch?.location?.coordinates
    ? [selectedBranch.location.coordinates[1], selectedBranch.location.coordinates[0]]
    : [20.5937, 78.9629]; // Default center (India)

  return (
    <div className="p-6 min-h-screen bg-neutral-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Delivery Location Management
      </h1>

      {/* Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="border rounded p-2 w-[500px]"
          onChange={handleBranchChange}
          value={selectedBranchId}
        >
          <option value="">Select a Branch...</option>
          {branches.map((branch) => (
            <option key={branch._id} value={branch._id}>
              {branch.branchName}
            </option>
          ))}
        </select>
      </div>

      {/* Map and Form */}
      {selectedBranch && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map */}
          <div className="border border-white h-[500px] bg-gray-100 shadow">
            <MapContainer center={center} zoom={16} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              <Marker position={center}>
                <Popup>{selectedBranch.branchName}</Popup>
              </Marker>

              {selectedBranch.stores?.map((store, index) =>
                store.zones?.map((zone, idx) => (
                  <Polygon
                    key={`${index}-${idx}`}
                    positions={zone.polygon.coordinates[0].map(([lng, lat]) => [lat, lng])}
                    pathOptions={{ color: "blue" }}
                  />
                ))
              )}
            </MapContainer>
          </div>

          {/* Form */}
          <div className="border border-white p-4 bg-white shadow">
            <h2 className="text-lg font-semibold mb-4 text-center">Add New Delivery Zone</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1">New Delivery Zone Name</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block mb-1">Free Delivery Amount</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block mb-1">Minimum Order Value</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block mb-1">Delivery Time Slot (in minutes)</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-1">Start Time</label>
                  <input type="time" className="w-full border rounded p-2" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1">End Time</label>
                  <input type="time" className="w-full border rounded p-2" />
                </div>
              </div>

              <div>
                <label className="block mb-1">Delivery Charge per KM</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block mb-1">Delivery Charge After KM</label>
                <input type="text" className="w-full border rounded p-2" />
              </div>

              <div>
                <label className="block mb-2">Payment Methods</label>
                <div className="flex gap-4">
                  <label><input type="checkbox" className="mr-1" /> Card</label>
                  <label><input type="checkbox" className="mr-1" /> Cash</label>
                  <label><input type="checkbox" className="mr-1" /> UPI</label>
                </div>
              </div>

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Zone
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
