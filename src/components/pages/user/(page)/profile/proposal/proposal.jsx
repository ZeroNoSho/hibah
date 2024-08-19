import Paragraph from "@/components/atmos/paragraph";
import Image from "next/image";
import { useState } from "react";
export default function Proposal({ name, tanggal, acc_1, acc_2, acc_3 }) {
  const [hidden, sethidden] = useState(false);
  const [persen, setPersen] = useState(20);
  const acc01 = acc_1 === 1 ? 20 : 0;
  const acc02 = acc_2 === 1 ? 20 : 0;
  const acc03 = acc_3 === 1 ? 40 : 0;
  const total = persen + acc01 + acc02 + acc03;

  return (
    <div className="W-full max-md:mb-5 md:mb-10">
      <div className="w-fit bg-white p-5 rounded-lg md:w-[600px]">
        <div className="flex">
          <div className=" mr-10">
            <Paragraph className="text-[18px] font-[500]">{name}</Paragraph>
            <Paragraph className="text-[12px] font-[400] text-[#757575]">
              Diajukan Tanggal {tanggal}
            </Paragraph>
            <Paragraph className="text-[12px] font-[400]  text-[#757575]">
              Kategori :
              <span className="text-[12px] font-[600]">Proposal Institusi</span>
            </Paragraph>
          </div>
          <div className="ml-auto">
            <Paragraph className="text-[32px] font-[700]">{total}%</Paragraph>

            <div className="w-full bg-gray-200 rounded-full h-[4px] dark:bg-gray-700">
              <div
                className={`bg-[#0C4A6E] h-[4px]  ${
                  total === 20
                    ? "w-[20%]"
                    : total === 40
                    ? "w-[40%]"
                    : total === 60
                    ? "w-[60%]"
                    : total === 80
                    ? "w-[80%]"
                    : ""
                } `}
              ></div>
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
              <Paragraph className="w-[98px] font-[500] text-[12px]">
                Proposal Di Submit
              </Paragraph>
            </div>
            <div className="w-[200px]">
              <div className="flex items-center justify-center mt-2">
                <div
                  className={`rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px] ${
                    acc_1 === 1 ? "" : acc_1 === 2 ? "" : "opacity-50"
                  } ${acc_1 > 1 ? "border-[#C62121]" : "border-[#0C4A6E]"}`}
                ></div>
                <div
                  className={`border-t-2 border-[#0C4A6E] w-full ${
                    acc_1 === 1 ? "" : "opacity-50"
                  }`}
                ></div>
              </div>
              <Paragraph className="w-[98px] font-[500] text-[12px]">
                Review Kemahasiswaan
              </Paragraph>
            </div>
            <div className="w-[200px] ">
              <div className="flex items-center justify-center mt-2">
                <div
                  className={`rounded-full bg-white border-8 ${
                    acc_2 === 1 ? "" : acc_2 === 2 ? "" : "opacity-50"
                  } ${
                    acc_2 > 1 ? "border-[#C62121]" : "border-[#0C4A6E]"
                  }  w-[22px] h-[22px] `}
                ></div>
                <div
                  className={`border-t-2 border-[#0C4A6E] w-full ${
                    acc_2 === 1 ? "" : "opacity-50"
                  }
                  `}
                ></div>
              </div>
              <Paragraph className="w-[98px] font-[500] text-[12px]">
                Review Bagian Keuangan
              </Paragraph>
            </div>
            <div className="w-[200px] ">
              <div className="flex items-center justify-center mt-2">
                <div
                  className={`rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px] ${
                    acc_3 === 1 ? "" : acc_3 === 2 ? "" : "opacity-50"
                  } ${acc_3 > 1 ? "border-[#C62121]" : "border-[#0C4A6E]"}`}
                ></div>
                <div
                  className={`border-t-2 border-[#0C4A6E] w-full ${
                    acc_3 === 1 ? "" : "opacity-50"
                  }`}
                ></div>
              </div>
              <Paragraph className="w-[98px] font-[500] text-[12px]">
                Review <br></br>Warek III
              </Paragraph>
            </div>
            <div className="w-fit">
              <div className="flex items-center justify-center w-fit mt-2">
                <div
                  className={`rounded-full bg-white border-8  border-[#0C4A6E] w-[22px] h-[22px] ${
                    acc_3 === 1 ? "" : acc_3 === 2 ? "" : "opacity-50"
                  } ${acc_3 > 1 ? "border-[#C62121]" : "border-[#0C4A6E]"}`}
                ></div>
              </div>
              <Paragraph className="w-[58px] font-[500] text-[12px]">
                Proposal Diterima
              </Paragraph>
            </div>
          </div>
          <div className="">
            <button
              disabled
              className={`md:ml-auto max-md:w-full max-md:mt-2 ${
                [acc_1, acc_2, acc_3].some((element) => element !== 1)
                  ? "bg-[#D3D6E1] text-[#7B7E8C]"
                  : "bg-[#014366] text-[#FFFF]"
              }  h-[40px] w-[200px] text-[12px] font-[600]  appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium`}
            >
              Cetak Lembar Pengesahan
            </button>
            <button
              disabled={[acc_1, acc_2, acc_3].includes(2)}
              className={`md:ml-5 max-md:w-full max-md:mt-2 ${
                [acc_1, acc_2, acc_3].includes(2)
                  ? "bg-[#D5212E] text-[#FFFF]"
                  : "bg-[#D3D6E1] text-[#7B7E8C]"
              }  h-[40px] w-[200px] text-[12px] font-[600]  appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium`}
            >
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
