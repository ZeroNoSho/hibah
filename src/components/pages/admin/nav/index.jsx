"use client";
import Cookies from "js-cookie";
import Links from "@/components/atmos/link";
import Paragraph from "@/components/atmos/paragraph";

import { IconsImport } from "@/utils/icons/IconsImport";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/atmos/button";
import { useEffect, useState } from "react";

export default function NavbarAdmin() {
  const router = useRouter();
  const [role, setRole] = useState();
  useEffect(() => {
    function roles(params) {
      const roles = Cookies.get("account_status");
      setRole(roles);
    }
    roles();
  }, []);
  function Logout(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
  return (
    <div className="max-md:fixed max-md:z-[1300] h-lvh max-md:bg-neutral-600 max-md:bg-opacity-75">
      <div className="flex">
        <div className="min-h-auto bg-neutral-800 dark:bg-neutral-900 md:flex md:shrink-0 w-[94px]">
          <div className="flex grow flex-col overflow-y-auto pb-4 pt-5 ">
            <Links
              href="/admin/beranda"
              className="w-full border-b border-white"
            >
              <Image
                className="mx-auto mb-5"
                width={40}
                height={40}
                src={"/telkom.png"}
                alt="Image"
              ></Image>
            </Links>
            <Links href="/admin/beranda" className="w-full my-5">
              <Image
                className="mx-auto mb-5"
                width={30}
                height={30}
                src="/navadmin/Beranda.png"
                alt="Image"
              ></Image>
              <Paragraph
                className="text-center text-sm"
                light="text-neutral-100"
              >
                Beranda
              </Paragraph>
            </Links>
            <Links href="/admin/proposal" className="w-full my-5">
              <IconsImport.Proposal className="mx-auto mb-5 fill-white"></IconsImport.Proposal>
              <Paragraph
                className="text-center text-sm"
                light="text-neutral-100"
              >
                Proposal
              </Paragraph>
            </Links>
            <Links href="/admin/laporan" className="w-full my-5">
              <IconsImport.Laporan className="mx-auto mb-5 fill-white"></IconsImport.Laporan>
              <Paragraph
                className="text-center text-sm"
                light="text-neutral-100"
              >
                Laporan
              </Paragraph>
            </Links>

            <Link
              href="/admin/pengguna"
              className={role == "1" ? "my-5 w-full" : "hidden my-5 w-full"}
            >
              <IconsImport.User2 className="mx-auto mb-5 text-white"></IconsImport.User2>
              <Paragraph light={"text-white"} className="text-center text-sm">
                Pengguna
              </Paragraph>
            </Link>
            <div></div>
            <Link
              className={role == "1" ? "my-5 w-full" : "hidden my-5 w-full"}
              href="/admin/ormawa"
            >
              <IconsImport.User
                className="mx-auto"
                color="white"
              ></IconsImport.User>
              <Paragraph light={"text-white"} className="text-center text-sm">
                Ormawa
              </Paragraph>
            </Link>
            <Button
              onClick={() => {
                Logout("account_status");
                Logout("token");
                router.push("/");
              }}
              className="w-full my-5"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white h-8 w-8 mx-auto mb-2"
              >
                <path
                  d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Paragraph
                className="text-center text-sm"
                light="text-neutral-100"
              >
                LogOut
              </Paragraph>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
