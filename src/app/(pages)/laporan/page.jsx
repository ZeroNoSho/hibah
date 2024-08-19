"use client";
import Image from "next/image";
import InputLaporan from "@/components/pages/user/(page)/laporan/input";
import TextArea from "@/components/pages/user/(page)/laporan/textarea";
import Date from "@/components/pages/user/(page)/laporan/date";
import Paragraph from "@/components/atmos/paragraph";
import Input from "@/components/atmos/input";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Time from "@/components/pages/user/(page)/laporan/time";
import Button from "@/components/atmos/button";
export default function page() {
  const token = Cookies.get("token");
  const [id, setId] = useState();
  const [proposal, setProposal] = useState([]);
  const [namaKetua, setNamaKetua] = useState("");
  const [nimKetua, setNimKetua] = useState("");
  const [namaSekretaris, setNamaSekretaris] = useState("");
  const [nimSekretaris, setNimSekretaris] = useState("");
  const [namaBendahara, setNamaBendahara] = useState("");
  const [nimBendahara, setNimBendahara] = useState("");
  const [namaKetuaOrmawa, setNamaKetuaOrmawa] = useState("");
  const [nimKetuaOrmawa, setNimKetuaOrmawa] = useState("");
  const [judul, setJudul] = useState("");
  const [desc, setDesc] = useState("");
  const [kendala, setKendala] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tglMulai, setTglMulai] = useState("");
  const [tglSelesai, setTglSelesai] = useState("");
  const [wktMulai, setWktMulai] = useState("");
  const [wktSelesai, setWktSelesai] = useState("");
  const [biaya, setBiaya] = useState("");
  const [file, setFile] = useState();

  useEffect(() => {
    async function propsal(params) {
      const proposals = await fetch(
        `https://admin.sipolma.id/api/proposal?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!proposals.ok) {
        const errorData = await proposals.json();
        throw new Error(errorData.msg);
      }

      const data = await proposals.json();
      setProposal(data.data);
    }
    propsal();
  }, []);

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append("token", token);
    formdata.append("nama_ketua", namaKetua);
    formdata.append("nim_ketua", nimKetua);
    formdata.append("nama_sekretaris", namaSekretaris);
    formdata.append("nim_sekretaris", nimSekretaris);
    formdata.append("nama_bendahara", namaBendahara);
    formdata.append("nim_bendahara", nimBendahara);
    formdata.append("nama_ketua_ormawa", namaKetuaOrmawa);
    formdata.append("nim_ketua_ormawa", nimKetuaOrmawa);
    formdata.append("judul", judul);
    formdata.append("desc", desc);
    formdata.append("kendala", kendala);
    formdata.append("lokasi", lokasi);
    formdata.append("tgl_mulai", tglMulai);
    formdata.append("tgl_selesai", tglSelesai);
    formdata.append("wkt_mulai", wktMulai);
    formdata.append("wkt_selesai", wktSelesai);
    formdata.append("biaya", biaya);
    formdata.append("file", file[0]);

    try {
      const response = await fetch(`https://admin.sipolma.id/api/lpj/${id}`, {
        method: "POST",
        body: formdata,
      });

      if (response.ok) {
        alert("berhasil");
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
          FORM PENGISIAN LAPORAN PROPOSAL
        </h1>
      </div>
      <div className="flex w-auto mx-5 md:mx-20 border-dashed border-2 border-slate-500 rounded-lg">
        <form className="md:w-[626px] w-full md:p-10 p-5 border-dashed md:border-r-2 border-slate-500">
          <Paragraph className="text-[16px] font-bold">Pilih Propsal</Paragraph>
          <select
            onChange={(e) => setId(e.target.value)}
            className="text-[12px] my-2 w-full h-[29px] appearance-none rounded-[3px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
          >
            {proposal?.map((e, i) => (
              <option key={i} value={e?.id}>
                {e?.nama}
              </option>
            ))}
          </select>
          <Paragraph className="text-[16px] font-bold">
            Detail Laporan
          </Paragraph>

          <div className="border-dashed border-2 border-slate-500 rounded-lg my-3 relative">
            <Input
              onChange={(e) => setFile(e.target.files)}
              type="file"
              multiple
              className="cursor-pointer relative block opacity-0 md:w-[554px] h-[78px] p-2 z-50"
            />
            <div className="text-center p-10 absolute top-[-10px] right-0 left-0 m-auto">
              <Paragraph className="text-[12px] font-[500]">
                <span className="text-[#0284C7]"> UPLOAD LAPORAN</span> ATAU
                PINDAHKAN FILENYA KESINI
              </Paragraph>
            </div>
          </div>
          <InputLaporan
            value={namaKetua}
            onChange={(e) => setNamaKetua(e.target.value)}
            valueNim={nimKetua}
            onChangeNim={(e) => setNimKetua(e.target.value)}
            nama={"Nama Ketua Pelaksana :"}
            nim={true}
          />
          <InputLaporan
            value={namaSekretaris}
            onChange={(e) => setNamaSekretaris(e.target.value)}
            valueNim={nimSekretaris}
            onChangeNim={(e) => setNimSekretaris(e.target.value)}
            nama={"Nama Sekretaris Pelaksana :"}
            nim={true}
          />
          <InputLaporan
            value={namaBendahara}
            onChange={(e) => setNamaBendahara(e.target.value)}
            valueNim={nimBendahara}
            onChangeNim={(e) => setNimBendahara(e.target.value)}
            nama={"Nama Bendahara Pelaksana :"}
            nim={true}
          />
          <InputLaporan
            value={namaKetuaOrmawa}
            onChange={(e) => setNamaKetuaOrmawa(e.target.value)}
            valueNim={nimKetuaOrmawa}
            onChangeNim={(e) => setNimKetuaOrmawa(e.target.value)}
            nama={"Nama Ketua Ormawa :"}
            nim={true}
          />
          <InputLaporan
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            nama={"Judul Laporan :"}
          />
          <TextArea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            nama={"Deskripsi Singkat Laporan :"}
          />
          <TextArea
            value={kendala}
            onChange={(e) => setKendala(e.target.value)}
            nama={"Kendala Ketika Pelaksanaan :"}
          />
          <InputLaporan
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            nama={"Lokasi Pelaksanaan :"}
          />
          <Date
            valueMulai={tglMulai}
            onChangeMulai={(e) => setTglMulai(e.target.value)}
            valueAkhir={tglSelesai}
            onChangeAkhir={(e) => setTglSelesai(e.target.value)}
            nama={"Tanggal Pelaksanaan :"}
          />
          <Time
            valueMulai={wktMulai}
            onChangeMulai={(e) => setWktMulai(e.target.value + ":00")}
            valueAkhir={wktSelesai}
            onChangeAkhir={(e) => setWktSelesai(e.target.value + ":00")}
            nama={"Waktu Pelaksanaan :"}
          />
          <InputLaporan
            value={biaya}
            onChange={(e) => setBiaya(e.target.value)}
            nama={"Biaya Pelaksanaan :"}
          />
          <div className="flex py-3 ">
            <div className="flex flex-col items-center justify-center mr-3">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="w-[15px] h-[15px] text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
            </div>

            <Paragraph className="text-[12px] font-[400]">
              Dengan mengisi formulir ini, saya menyatakan bahwa saya telah
              membaca dan memahami persyaratan serta prosedur pelaporan
              proposal. Saya juga bersedia untuk memberikan informasi tambahan
              jika diperlukan
            </Paragraph>
          </div>
          <div className="w-full text-right">
            <Button
              onClick={() => handleSubmit()}
              className="my-3 w-[111px] bg-[#014366] p-2 appearance-none rounded-[28px] border border-[#e0e0e0]  text-[12px] font-medium text-[#FFFF]"
            >
              Kirim
            </Button>
          </div>
        </form>
        <div className="max-md:hidden w-[254px]  m-auto">
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
