"use client";
import { useEffect, useState } from "react";
import Profile from "@/components/pages/user/(page)/profile/profile/profile";
import Proposal from "@/components/pages/user/(page)/profile/proposal/proposal";
import Paragraph from "@/components/atmos/paragraph";
import Button from "@/components/atmos/button";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const [pilih, setPilih] = useState(1);
  const [proposal, setProposal] = useState([]);
  const [lpj, setLpj] = useState([]);

  useEffect(() => {
    const data = async () => {
      const token = Cookies.get("token");
      try {
        const proposal = await fetch(
          `https://admin.sipolma.id/api/proposal?token=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const LPJ = await fetch(
          `https://admin.sipolma.id/api/lpj?token=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await proposal.json();
        const data2 = await LPJ.json();

        setProposal(data.data);
        setLpj(data2.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    data();
  }, []);

  function Logout(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
  return (
    <div className="flex max-md:flex-col md:p-20 max-md:m-5">
      <div className="w-auto max-md:w-full mr-20">
        <div className="bg-white p-5 rounded-lg w-full md:w-fit max-md:m-auto">
          <div className="px-2  ">
            <Paragraph className="text-[16px] font-[500]">PENGATURAN</Paragraph>
            <Paragraph className="w-[210px] text-[12px] font-[400]">
              Ini adalah halaman pengguna. Anda dapat mengkustomisasi data anda
              disini
            </Paragraph>
          </div>

          <div className="my-5">
            <div
              onClick={() => setPilih(1)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 1 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <Paragraph className={`text-[12px] font-[500]  `}>
                PROFIL ORMAWA
              </Paragraph>
            </div>
            <div
              onClick={() => setPilih(2)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 2 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <Paragraph className={`text-[12px] font-[500]`}>
                PROPOSAL
              </Paragraph>
            </div>
            <div
              onClick={() => setPilih(3)}
              className={`flex items-center h-[25px] w-[210px] ${
                pilih === 3 ? "bg-[#E0F2FE] border-l-2 border-[#014366]" : ""
              } pl-2`}
            >
              <Paragraph className={`text-[12px] font-[500] `}>
                LAPORAN
              </Paragraph>
            </div>
            <Button
              onClick={() => {
                Logout("token");
                Logout("account_status");
                router.push(`/`);
              }}
              className={`flex items-center h-[25px] w-[210px] pl-2`}
            >
              <Paragraph className={`text-[12px] font-[500] `}>
                LOGOUT
              </Paragraph>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex max-md:mt-5 max-md:flex-col-reverse">
        {pilih === 1 && <Profile />}
        {pilih === 2 && (
          <div className="w-full">
            {proposal?.map((e, i) => (
              <Proposal
                key={i}
                name={e.judul}
                tanggal={e.created_at.split(" ")[0]}
                acc_1={e.acc_1}
                acc_2={e.acc_2}
                acc_3={e.acc_3}
              />
            ))}
          </div>
        )}
        {pilih === 3 && (
          <div className="w-full">
            {lpj?.map((e, i) => (
              <Proposal
                key={i}
                name={e.judul}
                tanggal={e.created_at.split(" ")[0]}
                acc_1={e.acc_1}
                acc_2={e.acc_2}
                acc_3={e.acc_3}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
