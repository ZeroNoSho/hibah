"use client";
import Button from "@/components/atmos/button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function PopUpTabel({ type, id, type2 }) {
  const [token, setToken] = useState();
  useEffect(() => {
    function roles(params) {
      const token = Cookies.get("token");
      setToken(token);
    }
    roles();
  }, []);
  async function terima() {
    try {
      if (type2 === "laporan") {
        const data = await fetch(
          `https://admin.sipolma.id/api/lpj/terima/${id}?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data1 = await data.json();
        alert("berhasil menerima");
      } else {
        const data = await fetch(
          `https://admin.sipolma.id/api/proposal/terima/${id}?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data1 = await data.json();
        alert("berhasil menerima");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  async function tolak() {
    try {
      if (type2 === "laporan") {
        const data = await fetch(
          `https://admin.sipolma.id/api/lpj/tolak/${id}?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data1 = await data.json();
        alert("berhasil menolak");
      } else {
        const data = await fetch(
          `https://admin.sipolma.id/api/proposal/tolak/${id}?token=${token}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        const data1 = await data.json();
        alert("berhasil menolak");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="absolute z-50 left-[0px] top-[55px] w-[200px]">
      <div className="rounded-md outline-none bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg">
        <div className="relative rounded-md bg-white dark:bg-neutral-800 ">
          <div className="py-1">
            {type === "user" && (
              <>
                <Button className="mx-auto group block px-4 py-2 text-sm focus:outline-none group flex items-center text-neutral-700 dark:text-neutral-100 dark:hover:text-white">
                  Edit
                </Button>
                <Button className="mx-auto border-t-2  group block px-4 py-2 text-sm focus:outline-none group flex items-center text-neutral-700 dark:text-neutral-100 dark:hover:text-white">
                  Hapus
                </Button>
              </>
            )}
            {type === "Laporan" && (
              <>
                <Button
                  onClick={() => terima()}
                  className="group block px-4 py-2 text-sm focus:outline-none group flex items-center text-neutral-700 dark:text-neutral-100 dark:hover:text-white"
                >
                  Terima
                </Button>
                <Button
                  onClick={() => tolak()}
                  className="group block px-4 py-2 text-sm focus:outline-none group flex items-center text-neutral-700 dark:text-neutral-100 dark:hover:text-white"
                >
                  Tolak
                </Button>
                <Button className="group block px-4 py-2 text-sm focus:outline-none group flex items-center text-neutral-700 dark:text-neutral-100 dark:hover:text-white">
                  Revisi
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
