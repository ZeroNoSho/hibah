"use client";
import Button from "@/components/atmos/button";
import Paragraph from "@/components/atmos/paragraph";
import ProposalRincian from "@/components/pages/user/(page)/proposal/rincian";
import ProposalUtama from "@/components/pages/user/(page)/proposal/utama";
import Cookies from "js-cookie";
import Image from "next/image";
import { useState } from "react";

export default function Propasal() {
  const [page, setPage] = useState(false);
  const [namaPendaftar, setNamaPendaftar] = useState("");
  const [nimPendaftar, setNimPendaftar] = useState("");
  const [emailPendaftar, setEmailPendaftar] = useState("");
  const [telpPendaftar, setTelpPendaftar] = useState("");
  const [organisasi, setOrganisasi] = useState("");
  const [token, setToken] = useState("");

  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tglMulai, setTglMulai] = useState("");
  const [tglSelesai, setTglSelesai] = useState("");
  const [wktMulai, setWktMulai] = useState("");
  const [wktSelesai, setWktSelesai] = useState("");
  const [biaya, setBiaya] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    function roles() {
      const organisasi = Cookies.get("nama");
      const token = Cookies.get("token");
      setToken(token);
      setOrganisasi(organisasi);
    }
    roles();
  }, []);

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("token", token);
    formdata.append("nama_pengaju", namaPendaftar);
    formdata.append("nim_pengaju", nimPendaftar);
    formdata.append("email_pengaju", emailPendaftar);
    formdata.append("telp_pengaju", telpPendaftar);
    formdata.append("judul", judul);
    formdata.append("deskripsi", deskripsi);
    formdata.append("tujuan", tujuan);
    formdata.append("tgl_mulai", tglMulai);
    formdata.append("tgl_selesai", tglSelesai);
    formdata.append("wkt_mulai", wktMulai);
    formdata.append("wkt_selesai", wktSelesai);
    formdata.append("biaya", biaya);
    formdata.append("file", file[0]);

    try {
      const response = await fetch("https://admin.sipolma.id/api/proposal", {
        method: "POST",
        body: formdata,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="md:mx-[300px] mb-20">
      <div className="py-20 ">
        <h1 className="text-center text-[24px] font-semibold">
          FORM PENGISIAN PENGAJUAN PROPOSAL
        </h1>
      </div>
      <div className="md:flex mx-5 md:mx-20 flex-row border-dashed border-2 border-slate-500 rounded-lg">
        <form className="w-full basis-4/6 px-10 py-10 border-dashed  md:border-r-2 border-slate-500">
          {page ? (
            <ProposalRincian
              judul={judul}
              setJudul={setJudul}
              deskripsi={deskripsi}
              setDeskripsi={setDeskripsi}
              tujuan={tujuan}
              setTujuan={setTujuan}
              tglMulai={tglMulai}
              setTglMulai={setTglMulai}
              tglSelesai={tglSelesai}
              setTglSelesai={setTglSelesai}
              wktMulai={wktMulai}
              setWktMulai={setWktMulai}
              wktSelesai={wktSelesai}
              setWktSelesai={setWktSelesai}
              biaya={biaya}
              setBiaya={setBiaya}
              file={file}
              setFile={setFile}
            ></ProposalRincian>
          ) : (
            <ProposalUtama
              setNamaPendaftar={setNamaPendaftar}
              namaPendaftar={namaPendaftar}
              nimPendaftar={nimPendaftar}
              setNimPendaftar={setNimPendaftar}
              emailPendaftar={emailPendaftar}
              setEmailPendaftar={setEmailPendaftar}
              organisasi={organisasi}
              telpPendaftar={telpPendaftar}
              setTelpPendaftar={setTelpPendaftar}
            ></ProposalUtama>
          )}
          <div className="w-full text-right mt-10">
            {page ? (
              <>
                <Button
                  onClick={() => setPage(false)}
                  className="my-3 w-[111px] bg-[#B2B2B2] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]"
                >
                  Sebelumnya
                </Button>
                <Button
                  onClick={() => handleSubmit()}
                  className="my-3 w-[111px] bg-[#014366] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]"
                >
                  Kirim
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setPage(true)}
                className="my-3 w-[111px] bg-[#014366] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]"
              >
                Selanjutnya
              </Button>
            )}
          </div>
        </form>
        <div className="w-full basis-1/6 m-auto border-dashed max-md:border-t-2 border-slate-500">
          <div className="flex py-10">
            <div className="ml-auto mr-3 w-[26px] h-[26px] border border-[#0284C7]  rounded-full flex items-center justify-center text-[#0284C7] text-[12px]">
              1
            </div>
            <div className="mr-auto w-[26px] h-[26px] border  rounded-full flex items-center justify-center text-gray-600 text-[12px]">
              2
            </div>
          </div>
          <div className="border-t-2 border-[#757575] w-[29px] m-auto"></div>
          <div className="py-[50px]">
            <Image
              className="m-auto"
              width={33.75}
              height={30}
              src="/proposalvector.png"
              alt="Image"
            />
            <Paragraph className="text-center my-3 text-[12px]">
              Informasi Umum
            </Paragraph>
            <Paragraph className="text-center text-[12px]">
              Isi data dengan teliti dan benar. Setelah di input, data tidak
              dapat diubah.
            </Paragraph>
          </div>
          <div className="border-t-2 border-[#757575] w-[29px] m-auto"></div>
          <Paragraph className="text-center text-[12px] py-10">
            Butuh Bantuan?
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
