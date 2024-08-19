"use client";
import Image from "next/image";
import InputLaporan from "@/components/pages/user/(page)/laporan/input";
import Paragraph from "@/components/atmos/paragraph";
import { useEffect, useState } from "react";
export default function Profile() {
  const [data, setData] = useState();
  useEffect(() => {
    const data = async () => {
      try {
        const profile = await fetch(
          "https://admin.sipolma.id/api/profil?token=ptBdvQ0aOIediql9CRjwd71DNDhbSZdNmi5LfR5D64qqRhy1y9",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!profile.ok) {
          const errorData = await profile.json();
          throw new Error(errorData.msg);
        }
        const data = await profile.json();
        setData(data.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    data();
  }, []);
  return (
    <>
      <div className="w-full max-md:mt-5">
        <div className="md:w-[562px] bg-white p-5 rounded-lg">
          <Paragraph className="text-[16px] font-[500]">
            PROFIL ORMAWA
          </Paragraph>
          <Paragraph className="text-[12px] font-[400]">
            Anda Dapat Mengubah Profil Ormawa Anda
          </Paragraph>
          <InputLaporan
            disabled={true}
            nama={"Nama Organisasi Mahasiswa"}
            placeholder={data?.nama}
          />
          <InputLaporan
            disabled={true}
            nama={"Tingkat Organisasi Mahasiswa"}
            placeholder={"Institusi"}
          />
          <InputLaporan
            disabled={true}
            nama={"SK Organisasi Mahasiswa"}
            placeholder={data?.sk}
          />
          <InputLaporan
            disabled={true}
            nama={"Nama Pembina Organisasi Mahasiswa"}
            placeholder={data?.nama_pembina}
          />
          <InputLaporan
            disabled={true}
            nama={"Nama Ketua Organisasi Mahasiswa"}
            placeholder={data?.nama_ketua}
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
          <Paragraph className="text-[16px] font-[500]">
            FOTO PROFIL ORMAWA
          </Paragraph>
          <Paragraph className="text-[12px] font-[400]">
            Anda Dapat Mengubah Foto Profil Ormawa Anda
          </Paragraph>
          <div className="mx-auto my-5 w-[150px] h-[150px] border-2 border-[#014366] rounded-full overflow-hidden">
            <Image
              width={100}
              height={100}
              src={data?.lokasi_logo || "/Ellipse1.png"}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

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
