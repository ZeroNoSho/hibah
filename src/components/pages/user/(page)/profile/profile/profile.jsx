import Image from "next/image";
import InputLaporan from "@/components/pages/user/(page)/laporan/form/input";
export default function Profile() {
  return (
    <>
      <div className="w-full max-md:mt-5">
        <div className="md:w-[562px] bg-white p-5 rounded-lg">
          <p className="text-[16px] font-[500]">PROFIL ORMAWA</p>
          <p className="text-[12px] font-[400]">
            Anda Dapat Mengubah Profil Ormawa Anda
          </p>
          <InputLaporan
            nama={"Nama Organisasi Mahasiswa"}
            placeholder={"BEM KEMA IT TELKOM PURWOKERTO"}
          />
          <InputLaporan
            nama={"Tingkat Organisasi Mahasiswa"}
            placeholder={"Institusi"}
          />
          <InputLaporan
            nama={"SK Organisasi Mahasiswa"}
            placeholder={"SK BEM KEMA"}
          />
          <InputLaporan
            nama={"Nama Pembina Organisasi Mahasiswa"}
            placeholder={"BEM KEMA IT TELKOM PURWOKERTO"}
          />
          <InputLaporan
            nama={"Nama Ketua Organisasi Mahasiswa"}
            placeholder={"UCOK BABA"}
          />
          <div className="w-full mt-8 flex items-center justify-center">
            <button className="ml-auto bg-[#014366] h-[40px] w-[160px] text-[12px] font-[600]  appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]">
              Perbarui Foto Profil
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:ml-20">
        <div className="w-[330px] m-auto  bg-white p-5 rounded-lg">
          <p className="text-[16px] font-[500]">FOTO PROFIL ORMAWA</p>
          <p className="text-[12px] font-[400]">
            Anda Dapat Mengubah Foto Profil Ormawa Anda
          </p>
          <Image
            className="mx-auto my-5 border-2 border-[#014366] rounded-full"
            width={150}
            height={150}
            src="/Ellipse1.png"
            alt=""
          />
          <div className="flex items-center justify-center">
            <button className=" bg-[#014366] h-[40px] w-[160px] text-[12px] font-[600] appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]">
              Perbarui Foto Profil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
