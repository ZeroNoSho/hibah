import Heading from "@/components/atmos/heading";
import Paragraph from "@/components/atmos/paragraph";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function Beranda2() {
  const data = [
    {
      svg: <IconsImport.Dashboard1></IconsImport.Dashboard1>,
      judul: `Proposal`,
      subjudul: "Acara/Kegiatan",
      text: "Proposal untuk kegiatan ormawa",
    },
    {
      svg: <IconsImport.Dashboard2></IconsImport.Dashboard2>,
      judul: `Proposal `,
      subjudul: "Program Kerja",
      text: "Proposal program kerja ormawa",
    },
    {
      svg: <IconsImport.Dashboard3></IconsImport.Dashboard3>,
      judul: `Proposal`,
      subjudul: "Penggalangan Dana",
      text: "Proposal penggalanan dana oleh ormawa",
    },
    {
      svg: <IconsImport.Dashboard4></IconsImport.Dashboard4>,
      judul: `Proposal`,
      subjudul: "Penelitian",
      text: "Proposal penelitian yang dilakukan ormawa",
    },
    {
      svg: <IconsImport.Dashboard5></IconsImport.Dashboard5>,
      judul: `Proposal`,
      subjudul: "SarPra",
      text: "Proposal Pengadaan Sarana dan Prasarana",
    },
  ];
  return (
    <div className="w-[1200px] py-[40px] mx-auto">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="border-t-4 border-[#FFD600] w-5"></div>
          <Heading level={4} className={"text-sm"}>
            02.<span className={"font-[600]"}>PROPOSAL</span>
          </Heading>
        </div>
      </div>
      <Heading level={1} className={"text-[24px] font-[600]"}>
        JENIS - JENIS PROPOSAL
      </Heading>
      <div className="flex items-center justify-center py-[50px]">
        {data.map((e, i) => (
          <div className="w-[150px] h-[170px] mx-10 flex flex-col justify-center items-center text-center text-[14px]">
            {e.svg}
            <Paragraph className="font-[600] py-2">
              {e.judul}
              <br />
              {e.subjudul}
            </Paragraph>
            <Paragraph className="text-[12px]">{e.text}</Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
}
