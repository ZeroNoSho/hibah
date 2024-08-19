import React from "react";

export default function TextArea({ nama }) {
  return (
    <div className="my-3">
      <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
        {nama}
      </label>

      <textarea
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
    </div>
  );
}
