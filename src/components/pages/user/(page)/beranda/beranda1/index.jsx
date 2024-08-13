import Heading from "@/components/atmos/heading";
import Paragraph from "@/components/atmos/paragraph";
import { ImageImport } from "@/utils/image/ImageImport";
import React from "react";

export default function Beranda1() {
  return (
    <div className="md:flex items-center md:w-[1200px] py-[40px] max-md:p-10 mx-auto">
      <ImageImport.BerandaUser1
        width={300}
        height={300}
        className="md:w-[50%] max-md:mx-auto "
        alt="Image"
      ></ImageImport.BerandaUser1>
      <div className="w-full md:ml-[100px] max-md:pt-10">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="border-t-4 border-[#FFD600] w-5"></div>
            <Heading level={4} className={"text-sm"}>
              01. <span className={"font-[600]"}>SELAMAT DATANG</span>
            </Heading>
          </div>
        </div>

        <Heading level={1} className={"text-[24px] font-[600]"}>
          SIPOLMA adalah Sistem Manajemen Proposal Pendanaan Organisasi
          Mahasiswa
        </Heading>
        <Paragraph className="text-sm">
          Sipolma memudahkan kamu mengajukan proposal pendanaan ke Unit
          Kemahasiswaan IT Telkom Purwokerto sehingga kamu tidak perlu
          menghabiskan banyak waktu hanya untuk mengurus proposal saja.
        </Paragraph>
      </div>
    </div>
  );
}
