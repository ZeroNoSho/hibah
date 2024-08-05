import FootLaporan from "@/components/pages/admin/foot";
import HeadInput from "@/components/pages/admin/head";
import Tabel from "@/components/pages/admin/tabel";
export default function page() {
  const data = {
    head: [
      "No",
      "Tanggal",
      "Judul Proposal",
      "Pengusul",
      "Tingkat",
      "Proposal",
      "Aksi",
    ],
    type: "Admin",
    body: [
      {
        no: "01",
        tgl: "12/12/2026",
        judul: "Proposal Todays",
        user: "Username",
        tingkat: "Prodi",
      },
    ],
  };
  return (
    <div className="m-5">
      <HeadInput></HeadInput>
      <Tabel data={data}></Tabel>
      <FootLaporan></FootLaporan>
    </div>
  );
}
