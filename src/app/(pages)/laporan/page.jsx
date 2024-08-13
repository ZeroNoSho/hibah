import Image from "next/image";
import InputLaporan from "@/components/pages/user/(page)/laporan/form/input";
import TextArea from "@/components/pages/user/(page)/laporan/form/textarea";
import Date from "@/components/pages/user/(page)/laporan/form/date";
export default function page() {
  return (
    <div className="md:mx-[300px] mb-20">
      <div className="py-20 ">
        <h1 className="text-center text-[24px] font-semibold">
          FORM PENGISIAN LAPORAN PROPOSAL
        </h1>
      </div>
      <div className="flex w-auto mx-5 md:mx-20 border-dashed border-2 border-slate-500 rounded-lg">
        <form className="md:w-[626px] w-full md:p-10 p-5 border-dashed md:border-r-2 border-slate-500">
          <p className="text-[16px] font-bold">Detail Laporan</p>

          <div className="border-dashed border-2 border-slate-500 rounded-lg my-3 relative  w-auto">
            <input
              type="file"
              multiple
              className="cursor-pointer block opacity-0 md:w-[554px] w-max h-[78px] p-2 z-50"
            />
            <div className="text-center p-10 absolute top-[-10px] right-0 left-0 m-auto">
              <p className="text-[12px] font-[500]">
                <span className="text-[#0284C7]"> UPLOAD LAPORAN</span> ATAU
                PINDAHKAN FILENYA KESINI
              </p>
            </div>
          </div>
          <InputLaporan nama={"Nama Ketua Pelaksana :"} nim={true} />
          <InputLaporan nama={"Nama Sekretaris Pelaksana :"} nim={true} />
          <InputLaporan nama={"Nama Bendahara Pelaksana :"} nim={true} />
          <InputLaporan nama={"Nama Ketua Ormawa :"} nim={true} />
          <InputLaporan nama={"Judul Laporan :"} />
          <TextArea nama={"Deskripsi Singkat Laporan :"} />
          <TextArea nama={"Kendala Ketika Pelaksanaan :"} />
          <InputLaporan nama={"Lokasi Pelaksanaan :"} />
          <Date nama={"Tanggal Pelaksanaan :"} />
          <Date nama={"Waktu Pelaksanaan :"} />
          <InputLaporan nama={"Biaya Pelaksanaan :"} />
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
            <button className="my-3 w-[111px] bg-[#014366] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]">
              Kirim
            </button>
          </div>
        </form>
        <div className="max-md:hidden w-[254px]  m-auto">
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
