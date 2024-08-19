import Paragraph from "@/components/atmos/paragraph";
import React from "react";
import InputLaporan from "../../laporan/input";

export default function ProposalUtama({
  setNamaPendaftar,
  namaPendaftar,
  nimPendaftar,
  setNimPendaftar,
  organisasi,
  telpPendaftar,
  setTelpPendaftar,
  emailPendaftar,
  setEmailPendaftar,
}) {
  return (
    <>
      <Paragraph className="text-[16px] font-bold">Informasi Umum</Paragraph>
      <div className="md:flex flex-row w-full">
        <InputLaporan
          value={namaPendaftar}
          onChange={(e) => setNamaPendaftar(e.target.value)}
          nama={"Nama Lengkap Pengaju :"}
        />
        <InputLaporan
          value={nimPendaftar}
          onChange={(e) => setNimPendaftar(e.target.value)}
          nama={"NIM : "}
        />
      </div>
      <div className="md:flex flex-row w-full">
        <InputLaporan
          value={emailPendaftar}
          onChange={(e) => setEmailPendaftar(e.target.value)}
          nama={"E-mail :"}
        />
        <InputLaporan
          value={telpPendaftar}
          onChange={(e) => setTelpPendaftar(e.target.value)}
          nama={"No. Telepon :"}
        />
      </div>
      <div>
        <div className="my-3">
          <InputLaporan
            value={organisasi}
            disabled={true}
            nama={" Nama Organisasi Mahasiswa :"}
          />
        </div>
        <div className="my-3">
          <InputLaporan nama={"Jurusan / Program Studi :"} />
        </div>
      </div>
    </>
  );
}
