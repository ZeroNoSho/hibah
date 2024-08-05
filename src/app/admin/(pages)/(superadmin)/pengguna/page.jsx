import Button from "@/components/atmos/button";
import Heading from "@/components/atmos/heading";
import FootLaporan from "@/components/pages/admin/foot";
import InputAdmin from "@/components/pages/admin/head/Input";
import Tabel from "@/components/pages/admin/tabel";
import { IconsImport } from "@/utils/icons/IconsImport";
export default function page() {
  const data = {
    head: ["Nama", "Email", "Password", "Tingkat", "Role", "Aksi"],
    type: "SuperAdmin",
    body: [
      {
        Nama: "Username",
        Email: "Username@mail.com",
        Password: "*********",
        Role: "User",
        Tingkat: "Prodi",
      },
    ],
  };
  return (
    <div className="m-5">
      <div className="m-5 flex">
        <div>
          <Heading level={1} className={"text-[24px] font-[600]"}>
            Manajemen Pengguna
          </Heading>
          <Heading level={3} className={"text-[12px] font-[400]"}>
            Atur Pengguna Disini.
          </Heading>
        </div>
        <div className="flex ml-auto">
          <InputAdmin
            placeholder="Cari.."
            svg={
              <IconsImport.Search className="h-6 w-6 text-gray-400"></IconsImport.Search>
            }
          />
          <Button className="ml-5 rounded-lg bg-[#0284C7] py-3 px-6 text-xs font-bold text-white">
            Tambah Pengguna
          </Button>
        </div>
      </div>
      <Tabel data={data}></Tabel>
      <FootLaporan></FootLaporan>
    </div>
  );
}
