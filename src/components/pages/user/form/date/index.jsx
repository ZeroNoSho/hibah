import React from "react";

export default function Date({ nama }) {
  return (
    <div className="flex flex-col bg-gray-100 my-3">
      <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
        {nama}
      </label>
      <div className="flex">
        <input
          type="date"
          id="date"
          name="date"
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />

        <input
          type="date"
          id="date"
          name="date"
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />
      </div>
    </div>
  );
}
