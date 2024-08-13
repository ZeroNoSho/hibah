import Button from "@/components/atmos/button";
import Heading from "@/components/atmos/heading";
import Paragraph from "@/components/atmos/paragraph";
import { ImageImport } from "@/utils/image/ImageImport";
import React from "react";

export default function Beranda3() {
  return (
    <div className="md:w-[1200px] py-[40px] mx-auto flex max-md:flex-col-reverse  ">
      <div className="w-[50%] my-auto max-md:mx-auto max-md:mt-10">
        <ImageImport.BerandaUser3 width={300} height={300} className="w-full" />
      </div>

      <div className="my-auto md:ml-10 max-md:p-10">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="border-t-4 border-[#FFD600] w-5"></div>
            <Heading level={4} className={"text-sm"}>
              03. <span className={"font-[600]"}>PROSEDUR PENGAJUAN</span>
            </Heading>
          </div>
        </div>
        <Heading level={1} className={"text-[24px] font-[600]"}>
          PROSEDUR PENGAJUAN PROPOSAL
        </Heading>
        <div>
          <Button
            className={`bg-[#014366] border-2 border-[#014366] text-[#FFFF] md:mr-5 my-3 md:w-[116px]  p-2 appearance-none rounded-[28px] text-[12px] font-medium `}
          >
            Tingkat Insitusi
          </Button>
          <Button
            className={`text-[#014366] border-2 border-[#014366] md:mr-5 my-3 md:w-[116px]  p-2 appearance-none rounded-[28px] text-[12px] font-medium `}
          >
            Tingkat Fakultas
          </Button>
          <Button
            className={`text-[#014366] border-2 border-[#014366] md:mr-5 my-3 md:w-[116px]  p-2 appearance-none rounded-[28px] text-[12px] font-medium `}
          >
            Tingkat Prodi
          </Button>
        </div>
        <div>
          <div className="flex items-center space-x-4 py-4">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#014366] text-white text-[13px] rounded-full">
              1
            </div>
            <div>
              <h1 className="text-lg font-semibold">Kemahasiswaan ITTP</h1>
              <Paragraph>
                Mengajukan permohonan pengesahan proposal ke Kemahasiswaan ITTP.
              </Paragraph>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-4">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#014366] text-white text-[13px] rounded-full">
              2
            </div>
            <div>
              <h1 className="text-lg font-semibold">Revisi dan perbaikan</h1>
              <Paragraph>
                Apabila ada revisi dan perbaikan maka akan ada pemberitahuan
                untuk memperbaiki laporan sebelumnya.
              </Paragraph>
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4 py-4">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#014366] text-white text-[13px] rounded-full">
              3
            </div>
            <div>
              <h1 className="text-lg font-semibold">Bagian Keuangan</h1>
              <Paragraph>
                Setelah diterima, kemudian proposal dibawa ke bagian Keuangan.
              </Paragraph>
            </div>
          </div>{" "}
          <div className="flex items-center space-x-4 py-4">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#014366] text-white text-[13px] rounded-full">
              4
            </div>
            <div>
              <h1 className="text-lg font-semibold">Wakil Rektor III</h1>
              <Paragraph>
                Setelah diterima, kemudian proposal dibawa ke Wakil Rektor III.
              </Paragraph>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-4">
            <div className="flex items-center justify-center w-5 h-5 p-4 bg-[#014366] text-white text-[13px] rounded-full">
              5
            </div>
            <div>
              <h1 className="text-lg font-semibold">Proposal Sah</h1>
              <Paragraph>
                Setelah semua prosedur dilalui maka proposal telah disahkan.
                Menunggu dana dicairkan.
              </Paragraph>
            </div>
          </div>
        </div>
        <Button
          className={`bg-[#014366] text-[#FFFF] mr-5 my-3  py-5 px-7 appearance-none rounded-[28px] text-[12px] font-medium `}
        >
          AJUKAN PROPOSAL
        </Button>
      </div>
    </div>
  );
}
