import Paragraph from "@/components/atmos/paragraph";
import Image from "next/image";
import Link from "next/link";
export default function Propasal() {
  return (
    <div className="md:mx-[300px] mb-20">
      <div className="py-20 ">
        <h1 className="text-center text-[24px] font-semibold">
          FORM PENGISIAN PENGAJUAN PROPOSAL
        </h1>
      </div>
      <div className="md:flex mx-5 md:mx-20 flex-row border-dashed border-2 border-slate-500 rounded-lg">
        <form className="w-full basis-4/6 px-10 py-10 border-dashed  md:border-r-2 border-slate-500">
          <Paragraph className="text-[16px] font-bold">
            Informasi Umum
          </Paragraph>
          <div className="md:flex flex-row w-full">
            <div className="my-3 w-full">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Nama Lengkap Pengaju :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3 md:ml-5 w-full">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                NIM :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
          </div>
          <div className="md:flex flex-row w-full">
            <div className="my-3 w-full">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                E-mail :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3 md:ml-5 w-full">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                No. Telepon :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
          </div>
          <div>
            <div className="my-3">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Nama Organisasi Mahasiswa :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Jurusan / Program Studi :
              </label>

              <input
                type="text"
                className="text-[12px] w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
          </div>
          <div className="w-full text-right mt-10">
            <Link
              href={"/proposal/rincian"}
              className="my-3 p-3 bg-[#014366] w-[111px] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]"
            >
              Selanjutnya
            </Link>
          </div>
        </form>
        <div className="w-full basis-1/6 m-auto border-dashed max-md:border-t-2 border-slate-500">
          <div className="flex py-10">
            <div className="ml-auto mr-3 w-[26px] h-[26px] border border-[#0284C7]  rounded-full flex items-center justify-center text-[#0284C7] text-[12px]">
              1
            </div>
            <div className="mr-auto w-[26px] h-[26px] border  rounded-full flex items-center justify-center text-gray-600 text-[12px]">
              2
            </div>
          </div>
          <div className="border-t-2 border-[#757575] w-[29px] m-auto"></div>
          <div className="py-[50px]">
            <Image
              className="m-auto"
              width={33.75}
              height={30}
              src="/proposalvector.png"
              alt="Image"
            />
            <Paragraph className="text-center my-3 text-[12px]">
              Informasi Umum
            </Paragraph>
            <Paragraph className="text-center text-[12px]">
              Isi data dengan teliti dan benar. Setelah di input, data tidak
              dapat diubah.
            </Paragraph>
          </div>
          <div className="border-t-2 border-[#757575] w-[29px] m-auto"></div>
          <Paragraph className="text-center text-[12px] py-10">
            Butuh Bantuan?
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
