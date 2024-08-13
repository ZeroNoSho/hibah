import Image from "next/image";

export default function ProsedurTingkatInsitusi({ e, i, data, status }) {
  return (
    <div className="w-[200px] max-md:mx-auto text-center">
      <p className="text-center text-[16px] font-[500]">STEP {i + 1}</p>
      <div className="flex items-center justify-center mt-2 mx-auto">
        <div className=" rounded-full bg-black w-3 h-3 max-md:hidden"></div>
        <div className="border-t-2 border-black w-full max-md:hidden"></div>
        {status === "TingkatInsitusi" &&
          data.TingkatInsitusi.length - 1 === i && (
            <div className="rounded-full bg-black w-3 h-3 max-md:hidden"></div>
          )}
        {status === "TingkatFakultas" &&
          data.TingkatFakultas.length - 1 === i && (
            <div className="rounded-full bg-black w-3 h-3 max-md:hidden"></div>
          )}
        {status === "TingkatProdi" && data.TingkatProdi.length - 1 === i && (
          <div className="rounded-full bg-black w-3 h-3 max-md:hidden"></div>
        )}
      </div>
      <div className="md:hidden mx-auto rounded-lg mb-10 pt-5 pb-5 bg-[#E0F2FE] flex items-center justify-center w-[169px] h-[120px]">
        <Image src={e.img} height={89} width={89} alt="Image"></Image>
      </div>
      <div className="w-[168px] h-[103px] my-8 mx-auto">
        <p className="text-[12px] font-[500]">{e.head}</p>
        <p className="text-[12px] font-[400]">{e.data}</p>
      </div>
      <div className="max-md:hidden mx-auto rounded-lg mb-10 pt-5 pb-5 bg-[#E0F2FE] flex items-center justify-center w-[169px] h-[120px]">
        <Image src={e.img} height={89} width={89} alt="Image"></Image>
      </div>
    </div>
  );
}
