import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between w-full bg-[#042235] text-white py-6 px-20">
      <Link href="/beranda">
        <Image width={178.5} height={42} src="/Logo.png" alt="logo" />
      </Link>
      <div className="md:items-center md:w-auto flex">
        <div className="md:flex hidden">
          <Link className="block md:text-white mx-4" href="/beranda">
            BERANDA
          </Link>
          <Link className="block md:text-white mx-4" href="/proposal">
            PROPOSAL
          </Link>
          <Link className="block md:text-white mx-4" href="/laporan">
            LAPORAN
          </Link>
          <Link className="block md:text-white mx-4" href="/prosedur">
            PROSEDUR
          </Link>
        </div>
        <div className="flex text-sm">
          <Link className="p-2 mx-2" href="/profile">
            <Image width={32} height={42} src="/userlogo.png" alt="profile" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
