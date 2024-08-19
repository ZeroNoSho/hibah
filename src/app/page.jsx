"use client";
import Button from "@/components/atmos/button";
import Input from "@/components/atmos/input";
import Label from "@/components/atmos/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  const auth = async () => {
    try {
      const response = await fetch("http://admin.sipolma.id/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg);
      }
      const data = await response.json();
      setCookie("token", data.token, 7);
      setCookie("account_status", data.account_status, 7);

      if (data.account_status === 2) router.push(`/beranda`);
      if (data.account_status === 1 || data.account_status === 3)
        router.push(`/admin/beranda`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[url('/bglogin.png')] h-screen bg-no-repeat bg-left-bottom bg-cover flex justify-center items-center">
      <div className="bg-[#F0F9FF] md:w-[1182px] md:h-[770px] max-md:p-5 rounded-[14px] flex">
        <div className="m-auto max-md:hidden">
          <Image width={643.5} height={650} src="/login.png" alt="Image" />
        </div>
        <div className="m-auto text-black">
          <h1 className="text-[31px] font-bold mt-5">Masuk</h1>
          <p className="text-[12px] my-3">
            Silahkan Masuk Dengan Akun Ormawa Anda
          </p>
          <form className="block w-full">
            <div className="my-3">
              <Label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Username
              </Label>

              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Masukkan Username Anda"
                className="text-[12px] w-[316px] h-[29px] appearance-none rounded-[10px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3">
              <Label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Password
              </Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Masukkan Password Anda"
                className="text-[12px] w-[316px] h-[29px] appearance-none rounded-[10px] border border-[#e0e0e0] bg-white px-3 font-medium text-[#6B7280]"
              />
            </div>
            <div>
              <Input type="checkbox" />
              <Label className="mx-1 my-auto text-[10px]">
                Simpan Info Login Saya
              </Label>
            </div>
            <Button
              onClick={() => auth()}
              className="my-3 w-[316px] p-2 appearance-none rounded-[10px] border border-[#e0e0e0] bg-black  text-base font-medium text-[#FFFF]"
            >
              Masuk
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
