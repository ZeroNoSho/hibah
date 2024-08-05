import Nim from "./nim";
export default function InputLaporan({ nama, nim, placeholder }) {
  return (
    <div className="flex flex-row w-full">
      <div className="my-3 w-full">
        <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
          {nama}
        </label>
        <input
          placeholder={placeholder}
          type="text"
          className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
        />
      </div>
      {nim ? <Nim /> : ""}
    </div>
  );
}
