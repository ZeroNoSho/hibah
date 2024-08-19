"use client";
import Button from "@/components/atmos/button";
import { IconsImport } from "@/utils/icons/IconsImport";
import PopUpTabel from "../bodysuper/popup";
import { useState } from "react";
import Cookies from "js-cookie";

export default function BodyTabel({ data, type, type2 }) {
  const [datas, setDatas] = useState("");
  const id = Cookies.get("id");

  const admin_1 = data[0]?.admin_1 == id;
  const admin_2 = data[0]?.admin_2 == id;
  const admin_3 = data[0]?.admin_3 == id;

  return (
    <>
      {data?.map((e, i) => (
        <tr key={i} className="bg-gray-100 border-b ">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.created_at}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.judul}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.tingkat}
          </td>
          <td className="px-6 py-4 text-[#0284C7] whitespace-nowrap text-sm font-medium ">
            Download 
          </td>
          <td className="px-6 py-4 text-sm flex relative">
            <Button
              disabled={
                admin_1
                  ? e?.acc_1 == 1
                    ? true
                    : e?.acc_1 == 2
                    ? true
                    : ""
                  : admin_2
                  ? e?.acc_2 == 1
                    ? true
                    : e?.acc_2 == 2
                    ? true
                    : ""
                  : admin_3
                  ? e?.acc_3 == 1
                    ? true
                    : e?.acc_3 == 2
                    ? true
                    : ""
                  : ""
              }
              onClick={() => (datas === e?.id ? setDatas("") : setDatas(e.id))}
              className="flex rounded-lg bg-[#0284C7] py-3 px-6 text-xs font-bold uppercase text-white"
            >
              Aksi
              <IconsImport.Dropdown className={"h-5 w-5 ml-5"} />
              {datas === e?.id && (
                <PopUpTabel type={type} id={e.id} type2={type2}></PopUpTabel>
              )}
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}
