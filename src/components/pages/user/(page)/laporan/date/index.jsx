import React from "react";

export default function Date({
  nama,
  valueMulai,
  onChangeMulai,
  valueAkhir,
  onChangeAkhir,
}) {
  return (
    <div className="md:flex flex-col bg-gray-100 my-3">
      <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
        {nama}
      </label>
      <div className="md:flex">
        <input
          value={valueMulai}
          onChange={onChangeMulai}
          type="date"
          id="date"
          name="date"
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />

        <input
          value={valueAkhir}
          onChange={onChangeAkhir}
          type="date"
          id="date"
          name="date"
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />
      </div>
    </div>
  );
}
