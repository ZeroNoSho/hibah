import React from "react";

export default function Time({
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
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          type="time"
          id="time"
          name="time"
          min="01:00"
          max="23:59"
        />

        <input
          value={valueAkhir}
          onChange={onChangeAkhir}
          type="time"
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          id="time"
          name="time"
          min="01:00"
          max="23:59"
        />
      </div>
    </div>
  );
}
