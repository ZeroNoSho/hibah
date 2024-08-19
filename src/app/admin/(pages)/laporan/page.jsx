"use client";
import FootLaporan from "@/components/pages/admin/foot";
import HeadInput from "@/components/pages/admin/head";
import Tabel from "@/components/pages/admin/tabel";
import { useEffect, useState } from "react";
export default function page() {
  const [head, setHead] = useState([
    "No",
    "Tanggal",
    "Judul Laporan",
    "Pengusul",
    "Tingkat",
    "Proposal",
    "Aksi",
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.sipolma.id/api/lpj?token=fgnXi61cca7gqTpSPjGpBhh7y2TjjN3zax2R5LSouP91TyV7RG",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeadInput></HeadInput>
      <div className="m-5 bg-white my-4 dark:bg-neutral-900 ring-1 ring-neutral-600 ring-opacity-5 dark:ring-opacity-50 dark:ring-neutral-700 rounded-lg shadow overflow-x-auto text">
        <div className="max-h-[10000px] w-full">
          <Tabel data={data} type={"Laporan"} head={head}></Tabel>
        </div>
      </div>
      <FootLaporan></FootLaporan>
    </>
  );
}
