"use client";
import { useState } from "react";
import Profile from "@/components/pages/user/profile_components/profile";
import Proposal from "@/components/pages/user/profile_components/proposal";

export default function page() {
  const [pilih, setPilih] = useState(1);
  return (
    <div className="flex p-20">
      <div className="w-auto mr-20">
        <div className="bg-white p-5 rounded-lg w-fit">
          <div className="px-2  ">
            <p className="text-[16px] font-[500]">PENGATURAN</p>
            <p className="w-[210px] text-[12px] font-[400]">
              Ini adalah halaman pengguna. Anda dapat mengkustomisasi data anda
              disini
            </p>
          </div>

          <div className="my-5">
            <div
              onClick={() => setPilih(1)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 1 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <p className={`text-[12px] font-[500]  `}>PROFIL ORMAWA</p>
            </div>
            <div
              onClick={() => setPilih(2)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 2 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <p className={`text-[12px] font-[500]`}>PROPOSAL</p>
            </div>
            <div
              onClick={() => setPilih(3)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 3 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <p className={`text-[12px] font-[500] `}>LAPORAN</p>
            </div>
          </div>
        </div>
      </div>
      {pilih === 1 ? (
        <Profile />
      ) : pilih === 2 ? (
        <div className="w-full">
          <Proposal />
          <Proposal />
          <Proposal />
        </div>
      ) : pilih === 3 ? (
        <div className="w-full">
          <Proposal />
          <Proposal />
          <Proposal />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
