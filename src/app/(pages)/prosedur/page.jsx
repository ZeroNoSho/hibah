"use client";
import Image from "next/image";
import { useState } from "react";
export default function page() {
  const [pilih, setPilih] = useState(1);
  const data = {
    TingkatInsitusi: [
      {
        head: "Kemahasiswaan ITTP",
        data: "Mengajukan permohonan pengesahan proposal ke Kemahasiswaan ITTP.",
        img: "/6.png",
      },
      {
        head: "Revisi dan perbaikan",
        data: "Apabila ada revisi dan perbaikan maka akan ada pemberitahuan untuk memperbaiki laporan sebelumnya.",
        img: "/5.png",
      },
      {
        head: "Bagian Keuangan",
        data: "Setelah diterima, kemudian proposal dibawa ke bagian Keuangan.",
        img: "/4.png",
      },
      {
        head: "Wakil Rektor III",
        data: "Setelah diterima, kemudian proposal dibawa ke Wakil Rektor III.",
        img: "/3.png",
      },
      {
        head: "Proposal",
        data: "Setelah semua prosedur dilalui maka proposal telah disahkan. Menunggu dana dicairkan.",
        img: "/5.png",
      },
    ],
    TingkatFakultas: [
      {
        head: "Pembina Organisasi Mahasiswa",
        data: "Mengajukan permohonan pengesahan proposal ke Pembina Organisasi Mahasiswa terkait",
        img: "/6.png",
      },
      {
        head: "Admin Fakultas",
        data: "Setelah diterima, kemudian proposal dibawa ke bagian Keuangan.",
        img: "/1.png",
      },
      {
        head: "Revisi dan perbaikan",
        data: "Apabila ada revisi dan perbaikan maka akan ada pemberitahuan untuk memperbaiki laporan sebelumnya.",
        img: "/5.png",
      },
      {
        head: "Dekan dan Wakil Dekan",
        data: "Setelah revisi sudah diselesaikan maka Dekan dan Wakil Dekan akan menerima dan menandatangani lembar pengesahan proposal.",
        img: "/3.png",
      },
      {
        head: "Proposal Sah",
        data: "Setelah semua prosedur dilalui maka proposal telah disahkan. Menunggu dana dicairkan.",
        img: "/2.png",
      },
    ],
    TingkatProdi: [
      {
        head: "Mengajukan Proposal Ke Kepala Program Studi",
        data: "Mengajukan permohonan pengesahan proposal ke Kaprodi",
        img: "/3.png",
      },
      {
        head: "Revisi dan perbaikan",
        data: "Apabila ada revisi dan perbaikan maka akan ada pemberitahuan untuk memperbaiki laporan sebelumnya.",
        img: "/5.png",
      },
      {
        head: "Pengesahan Proposal Oleh Kepala Program Studi",
        data: "Setelah revisi sudah diselesaikan maka Kaprodi akan menerima dan menandatangani lembar pengesahan proposal",
        img: "/3.png",
      },
      {
        head: "Proposal Sah",
        data: "Setelah semua prosedur dilalui maka proposal telah disahkan. Menunggu dana dicairkan.",
        img: "/2.png",
      },
    ],
  };
  return (
    <div>
      <p className="text-center text-[24px] font-[700] my-10">
        PROSEDUR PENGAJUAN PROPOSAL
      </p>
      <div className="w-full flex items-center justify-center my-10">
        <button
          className={`${
            pilih === 1
              ? "bg-[#014366] text-[#FFFF]"
              : "text-[#014366] border border-[#014366]"
          } mr-5 my-3 w-[116px]  p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium `}
          onClick={() => setPilih(1)}
        >
          Tingkat Insitusi
        </button>
        <button
          c
          className={`${
            pilih === 2
              ? "bg-[#014366] text-[#FFFF]"
              : "text-[#014366] border border-[#014366]"
          } mr-5 my my-3 w-[116px]  p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium `}
          onClick={() => setPilih(2)}
        >
          Tingkat Fakultas
        </button>
        <button
          className={`${
            pilih === 3
              ? "bg-[#014366] text-[#FFFF]"
              : "text-[#014366] border border-[#014366]"
          } mr-5 my my-3 w-[116px]  p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium `}
          onClick={() => setPilih(3)}
        >
          Tingkat Prodi
        </button>
      </div>
      <div className="flex items-center justify-center">
        {pilih === 1
          ? data.TingkatInsitusi.map((e, i) => (
              <div key={i} className="w-[200px] ">
                <p className="text-center text-[16px] font-[500]">
                  STEP {i + 1}
                </p>
                <div className="flex items-center justify-center mt-2">
                  <div className=" rounded-full bg-black w-3 h-3"></div>
                  <div className="border-t-2 border-black w-full"> </div>
                  {data.TingkatInsitusi.length - 1 === i ? (
                    <div className="rounded-full bg-black w-3 h-3"></div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="w-[168px] h-[103px] my-8">
                  <p className="text-[12px] font-[500]">{e.head}</p>
                  <p className="text-[12px] font-[400]">{e.data}</p>
                </div>
                <div className="rounded-lg mb-10 pt-5 pb-5 bg-[#E0F2FE] flex items-center justify-center w-[169px] h-[120px]">
                  <Image src={e.img} height={89} width={89} alt="Image"></Image>
                </div>
              </div>
            ))
          : pilih === 2
          ? data.TingkatFakultas.map((e, i) => (
              <div key={i} className="w-[200px] ">
                <p className="text-center text-[16px] font-[500]">
                  STEP {i + 1}
                </p>
                <div className="flex flex items-center justify-center mt-2">
                  <div className=" rounded-full bg-black w-3 h-3"></div>
                  <div className="border-t-2 border-black w-full"> </div>
                  {data.TingkatFakultas.length - 1 === i ? (
                    <div className="rounded-full bg-black w-3 h-3"></div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-[168px] h-[103px] my-8">
                  <p className="text-[12px] font-[500]">{e.head}</p>
                  <p className="text-[12px] font-[400]">{e.data}</p>
                </div>
                <div className="rounded-lg mb-10 pt-5 pb-5 bg-[#E0F2FE] flex items-center justify-center w-[169px] h-[120px]">
                  <Image src={e.img} height={89} width={89} alt="Image"></Image>
                </div>
              </div>
            ))
          : pilih === 3
          ? data.TingkatProdi.map((e, i) => (
              <div key={i} className="w-[200px] ">
                <p className="text-center text-[16px] font-[500]">
                  STEP {i + 1}
                </p>
                <div className="flex flex items-center justify-center mt-2">
                  <div className=" rounded-full bg-black w-3 h-3"></div>
                  <div className="border-t-2 border-black w-full"> </div>
                  {data.TingkatProdi.length - 1 === i ? (
                    <div className="rounded-full bg-black w-3 h-3"></div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-[168px] h-[103px] my-8">
                  <p className="text-[12px] font-[500]">{e.head}</p>
                  <p className="text-[12px] font-[400]">{e.data}</p>
                </div>
                <div className="rounded-lg mb-10 pt-5 pb-5 bg-[#E0F2FE] flex items-center justify-center w-[169px] h-[120px]">
                  <Image src={e.img} height={89} width={89} alt="Image"></Image>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
