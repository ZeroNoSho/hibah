import Image from "next/image";
import InputLaporan from "@/components/pages/user/form/input";
import TextArea from "@/components/pages/user/form/textarea";
import Date from "@/components/pages/user/form/date";
import Link from "next/link";
export default function page() {
  return (
    <div className="mx-[300px] mb-20">
      <div className="py-20 ">
        <h1 className="text-center text-[24px] font-semibold">
          FORM PENGISIAN LAPORAN PROPOSAL
        </h1>
      </div>
      <div className="flex mx-20 border-dashed border-2 border-slate-500 rounded-lg">
        <form className="w-[626px] px-10 py-10 border-dashed border-r-2 border-slate-500">
          <p className="text-[16px] font-bold">Detail Laporan</p>

          <div className="border-dashed border-2 border-slate-500 rounded-lg my-3 relative">
            <input
              type="file"
              multiple
              className="cursor-pointer relative block opacity-0 w-[554px] h-[78px] p-2 z-50"
            />
            <div className="text-center p-10 absolute top-[-10px] right-0 left-0 m-auto">
              <p className="text-[12px] font-[500]">
                <span className="text-[#0284C7]"> UPLOAD LAPORAN</span> ATAU
                PINDAHKAN FILENYA KESINI
              </p>
            </div>
          </div>
          <InputLaporan nama={"Judul Proposal :"} />
          <TextArea nama={"Deskripsi Singkat Proposal :"} />
          <TextArea nama={"Tujuan Proposal :"} />

          <InputLaporan nama={"Lokasi Pelaksanaan :"} />
          <Date nama={"Tanggal Pelaksanaan :"} />
          <Date nama={"Waktu Pelaksanaan :"} />
          <InputLaporan nama={"Anggaran Biaya :"} />
          <div className="flex py-3 ">
            <div className="flex flex-col items-center justify-center mr-3">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="w-[15px] h-[15px] text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
            </div>

            <p className="text-[12px] font-[400]">
              Dengan mengisi formulir ini, saya menyatakan bahwa saya telah
              membaca dan memahami persyaratan serta prosedur pelaporan
              proposal. Saya juga bersedia untuk memberikan informasi tambahan
              jika diperlukan
            </p>
          </div>
          <div className="w-full text-right">
            <Link
              href={"/proposal"}
              className="my-3 py-3 px-4 w-[111px] bg-[#B2B2B2] p-2 appearance-none rounded-[28px] border border-[#e0e0e0] bg-[#0284C7]  text-[12px] font-medium text-[#FFFF]"
            >
              Sebelumnya
            </Link>
            <button className="my-3 w-[111px] bg-[#014366] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]">
              Kirim
            </button>
          </div>
        </form>
        <div className="w-[254px]  m-auto">
          <div className="flex py-10">
            <div className=" ml-auto mr-3 w-[26px] h-[26px] border  rounded-full flex items-center justify-center text-gray-600 text-[12px]">
              1
            </div>
            <div className="mr-auto  w-[26px] h-[26px] border border-[#0284C7]  rounded-full flex items-center justify-center text-[#0284C7] text-[12px]">
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
            <p className="text-center my-3 text-[12px]">Informasi Umum</p>
            <p className="text-center text-[12px]">
              Isi data dengan teliti dan benar. Setelah di input, data tidak
              dapat diubah.
            </p>
          </div>
          <div className="border-t-2 border-[#757575] w-[29px] m-auto"></div>
          <p className="text-center text-[12px] py-10">Butuh Bantuan?</p>
        </div>
      </div>
    </div>
  );
}
