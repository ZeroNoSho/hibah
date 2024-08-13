import Image from "next/image";
import Link from "next/link";
export default function Footers() {
  //
  return (
    <footer className="w-full bg-[#042235] text-white py-6 px-20 max-md:hidden">
      <div className="flex py-10">
        <div className="flex">
          <div className="text-[16px] mr-3">
            <p className="font-bold">Fitur Kami</p>
            <div className="mt-2">
              <p>Pengajuan Proposal</p>
              <p>Riwayat Pengajuan</p>
            </div>
          </div>
          <div className="text-[16px] mx-3">
            <p className="font-bold">Informasi</p>
            <div className="mt-2">
              <p>Prosedur Pengajuan</p>
              <p>Tentang Kami</p>
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <Link href="#">
            <Image
              className="ml-auto py-5"
              width={178.5}
              height={42}
              src="/Logo.png"
              alt=""
            />
          </Link>
          <p className="text-right">
            Unit Kemahasiswaan Institut Teknologi Telkom Purwokerto
          </p>
          <p className="text-right">
            Gedung Rektorat 407, IT Telkom Purwokerto
          </p>
        </div>
      </div>
      <div className="flex border-t border-white ">
        <Image
          width={158}
          height={32}
          src="/sosialmedia.png"
          alt=""
          className="py-10"
        />
        <p className="my-auto ml-auto">Sipolma © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
