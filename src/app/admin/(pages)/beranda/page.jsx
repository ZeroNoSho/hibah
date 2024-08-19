"use client";
import Paragraph from "@/components/atmos/paragraph";
import { IconsImport } from "@/utils/icons/IconsImport";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function page() {
  const token = Cookies.get("token");
  const [data, setData] = useState(0);
  const [laporan, setLaporan] = useState(0);
  const [lpj, setLpj] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("https://admin.sipolma.id/api/user", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const response2 = await fetch(
          `https://admin.sipolma.id/api/proposal?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const response3 = await fetch(
          `https://admin.sipolma.id/api/lpj?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        setData(data1.data.length);
        setLpj(data2.data.length);
        setLaporan(data3.data.length);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="m-10 flex flex-wrap">
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px]  font-[500] px-5"
          >
            {data}
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">
            User Aktif
          </Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.User className={"w-[30px] h-[30px]"}></IconsImport.User>
        </div>
      </div>
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px] text-[#0284C7] font-[500] px-5"
          >
            {lpj}
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">
            Pengajuan Proposal
          </Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.Proposal
            className={"w-[30px] h-[30px] fill-[#2F2D2D]"}
          ></IconsImport.Proposal>
        </div>
      </div>
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px] text-[#0284C7] font-[500] px-5"
          >
            {laporan}
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">Laporan</Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.Laporan
            className={"w-[30px] h-[30px] fill-[#2F2D2D]"}
          ></IconsImport.Laporan>
        </div>
      </div>
    </div>
  );
}
