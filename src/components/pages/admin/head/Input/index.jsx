"use client";
import Input from "@/components/atmos/input";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function InputAdmin({ svg, placeholder }) {
  return (
    <div className="relative w-fit">
      <Input
        type="text"
        className=" pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
        placeholder={placeholder}
      />
      {svg && <div className="absolute top-0 right-0 px-3 py-2">{svg}</div>}
    </div>
  );
}
