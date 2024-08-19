"use client";
import Button from "@/components/atmos/button";
import Heading from "@/components/atmos/heading";
import FootLaporan from "@/components/pages/admin/foot";
import InputAdmin from "@/components/pages/admin/head/Input";
import Tabel from "@/components/pages/admin/tabel";
import { IconsImport } from "@/utils/icons/IconsImport";
import { useEffect, useState } from "react";
export default function page() {
  const [user, setUser] = useState([]);
  const [head, setHead] = useState([
    "Nama",
    "Email",
    "Password",
    "Tingkat",
    "Role",
    "Aksi",
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.sipolma.id/api/dosen", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
      <div className="m-5 bg-white my-4 dark:bg-neutral-900 ring-1 ring-neutral-600 ring-opacity-5 dark:ring-opacity-50 dark:ring-neutral-700 rounded-lg shadow overflow-x-auto text">
        <div className="max-h-[10000px] w-[10px]">
          <Tabel
            data={user}
            type={"user"}
            page={"SuperAdmin"}
            head={head}
          ></Tabel>
        </div>
      </div>
      <FootLaporan></FootLaporan>
    </>
  );
}
