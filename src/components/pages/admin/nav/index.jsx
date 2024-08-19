"use client";
import Cookies from "js-cookie";
import Links from "@/components/atmos/link";
import Paragraph from "@/components/atmos/paragraph";

import { IconsImport } from "@/utils/icons/IconsImport";

import Image from "next/image";
import Link from "next/link";

export default function NavbarAdmin() {
  const role = Cookies.get("account_status");
  return (
    <div className="max-md:fixed max-md:z-[1300] max-md:w-screen max-md:bg-neutral-600 max-md:bg-opacity-75">
      <div className="flex h-dvh">
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
            <div className={role !== "1" ? "hidden my-5" : "my-5"}>
              <Link href="/admin/pengguna" className={`w-full`}>
                <IconsImport.User2 className="mx-auto mb-5 text-white"></IconsImport.User2>
                <Paragraph light={"text-white"} className="text-center text-sm">
                  Pengguna
                </Paragraph>
              </Link>
            </div>
            <div className={role !== "1" ? "hidden my-5" : "my-5"}>
              <Link href="/admin/ormawa" className="w-full">
                <IconsImport.User
                  className="mx-auto"
                  color="white"
                ></IconsImport.User>
                <Paragraph light={"text-white"} className="text-center text-sm">
                  Ormawa
                </Paragraph>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
