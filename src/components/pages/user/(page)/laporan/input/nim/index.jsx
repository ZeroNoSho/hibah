export default function Nim({ onChangeNim, valueNim }) {
  return (
    <div className="my-3 md:ml-5 w-full">
      <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
        NIM :
      </label>

      <input
        onChange={onChangeNim}
        value={valueNim}
        type="text"
        className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
      />
    </div>
  );
}
