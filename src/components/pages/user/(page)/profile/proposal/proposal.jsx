import Image from "next/image";
import { useState } from "react";
export default function Proposal() {
  const [hidden, sethidden] = useState(false);
  return (
    <div className="W-full max-md:mb-5 md:mb-10">
      <div className="w-fit bg-white p-5 rounded-lg md:w-[600px]">
        <div className="flex">
          <div className=" mr-10">
            <p className="text-[18px] font-[500]">Proposal Berkemah</p>
            <p className="text-[12px] font-[400] text-[#757575]">
              Diajukan Tanggal 24 Februari 2024
            </p>
            <p className="text-[12px] font-[400]  text-[#757575]">
              Kategori :{" "}
              <span className="text-[12px] font-[600]">Proposal Institusi</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-[32px] font-[700]">55%</p>

            <div className="w-full bg-gray-200 rounded-full h-[4px] dark:bg-gray-700">
              <div className="bg-[#0C4A6E] h-[4px] w-[45%]"></div>
            </div>
          </div>
        </div>
        <div className={`${hidden ? "hidden" : ""} `}>
          <div className="W-full flex my-10 max-md:hidden">
            <div className="w-[200px]">
              <div className="flex items-center justify-center mt-2">
                <div className="rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px]"></div>
                <div className="border-t-2 border-[#0C4A6E] w-full"> </div>
              </div>
              <p className="w-[98px] font-[500] text-[12px]">
                Proposal Di Submit
              </p>
            </div>
            <div className="w-[200px]">
              <div className="flex items-center justify-center mt-2">
                <div className="rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px]"></div>
                <div className="border-t-2 border-[#0C4A6E] w-full opacity-50">
                  {" "}
                </div>
              </div>
              <p className="w-[98px] font-[500] text-[12px]">
                Review Kemahasiswaan
              </p>
            </div>
            <div className="w-[200px] ">
              <div className="flex items-center justify-center mt-2">
                <div className="rounded-full bg-white border-8  border-[#C62121] w-[22px] h-[22px] "></div>
                <div className="border-t-2 border-[#0C4A6E] w-full opacity-50">
                  {" "}
                </div>
              </div>
              <p className="w-[98px] font-[500] text-[12px]">
                Review Bagian Keuangan
              </p>
            </div>
            <div className="w-[200px] ">
              <div className="flex items-center justify-center mt-2">
                <div className="rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px] opacity-50"></div>
                <div className="border-t-2 border-[#0C4A6E] w-full opacity-50">
                  {" "}
                </div>
              </div>
              <p className="w-[98px] font-[500] text-[12px]">
                Review <br></br>Warek III
              </p>
            </div>
            <div className="w-fit">
              <div className="flex items-center justify-center w-fit mt-2">
                <div className="rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px] opacity-50"></div>
              </div>
              <p className="w-[58px] font-[500] text-[12px]">
                Proposal Diterima
              </p>
            </div>
          </div>
          <div className="">
            <button className="md:ml-auto max-md:w-full max-md:mt-2 bg-[#D3D6E1] h-[40px] w-[200px] text-[12px] font-[600]  appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#7B7E8C]">
              Cetak Lembar Pengesahan
            </button>
            <button className="md:ml-5 max-md:w-full max-md:mt-2 bg-[#D5212E] h-[40px] w-[200px] text-[12px] font-[600]  appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]">
              Lihat Revisi
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center my-4">
          <p
            onClick={() => (hidden ? sethidden(false) : sethidden(true))}
            className="text-[12px] font-[400]"
          >
            Minimize
          </p>
          <div className="flex items-center justify-center ml-3">
            {hidden ? (
              <Image width={9} height={9} src="/Polygon2.png" alt="" />
            ) : (
              <Image width={9} height={9} src="/Polygon.png" alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
