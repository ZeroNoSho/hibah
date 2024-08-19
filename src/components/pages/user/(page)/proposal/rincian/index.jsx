import InputLaporan from "@/components/pages/user/(page)/laporan/input";
import TextArea from "@/components/pages/user/(page)/laporan/textarea";
import Date from "@/components/pages/user/(page)/laporan/date";
import Paragraph from "@/components/atmos/paragraph";
import Input from "@/components/atmos/input";
import Time from "../../laporan/time";
export default function ProposalRincian({
  judul,
  setJudul,
  deskripsi,
  setDeskripsi,
  tujuan,
  setTujuan,
  tglMulai,
  setTglMulai,
  tglSelesai,
  setTglSelesai,
  wktMulai,
  setWktMulai,
  wktSelesai,
  setWktSelesai,
  biaya,
  setBiaya,
  file,
  setFile,
}) {
  return (
    <>
      <Paragraph className="text-[16px] font-bold">Detail Laporan</Paragraph>
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
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        nama={"Judul Proposal :"}
      />
      <TextArea
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        nama={"Deskripsi Singkat Proposal :"}
      />
      <TextArea
        value={tujuan}
        onChange={(e) => setTujuan(e.target.value)}
        nama={"Tujuan Proposal :"}
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
      ></Time>

      <InputLaporan
        value={biaya}
        onChange={(e) => setBiaya(e.target.value)}
        nama={"Anggaran Biaya :"}
      />
      <div className="flex py-3 ">
        <div className="flex flex-col items-center justify-center mr-3">
          <input
            type="checkbox"
            className="w-[15px] h-[15px] text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
        </div>

        <Paragraph className="text-[12px] font-[400]">
          Dengan mengisi formulir ini, saya menyatakan bahwa saya telah membaca
          dan memahami persyaratan serta prosedur pelaporan proposal. Saya juga
          bersedia untuk memberikan informasi tambahan jika diperlukan
        </Paragraph>
      </div>
    </>
  );
}
