"use client";
import FootLaporan from "@/components/pages/admin/foot";
import HeadInput from "@/components/pages/admin/head";
import Tabel from "@/components/pages/admin/tabel";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function page() {
  const token = Cookies.get("token");
  const [head, setHead] = useState([
    "No",
    "Tanggal",
    "Judul Proposal",
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
          `https://admin.sipolma.id/api/proposal?token=${token}`,
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
      <div className="z-0 m-5 bg-white my-4 dark:bg-neutral-900 ring-1 ring-neutral-600 ring-opacity-5 dark:ring-opacity-50 dark:ring-neutral-700 rounded-lg shadow overflow-x-auto text">
        <div className="max-h-[10000px] w-full">
          <Tabel
            data={data}
            type={"Laporan"}
            head={head}
            type2={"proposal"}
          ></Tabel>
        </div>
      </div>
      <FootLaporan></FootLaporan>
    </>
  );
}
