import Paragraph from "@/components/atmos/paragraph";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function page() {
  return (
    <div className="m-10 flex flex-wrap">
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px]  font-[500] px-5"
          >
            100
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">
            User Aktif
          </Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.User className={"w-[30px] h-[30px]"}></IconsImport.User>
        </div>
      </div>
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px] text-[#0284C7] font-[500] px-5"
          >
            10
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">
            Pengajuan Proposal
          </Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.Proposal
            className={"w-[30px] h-[30px] fill-[#2F2D2D]"}
          ></IconsImport.Proposal>
        </div>
      </div>
      <div className="flex mr-10 w-[250px] rounded-lg bg-white shadow-lg p-5 text-gray-800">
        <div className="w-max mr-auto">
          <Paragraph
            light="text-[#0284C7]"
            className="text-[24px] text-[#0284C7] font-[500] px-5"
          >
            5
          </Paragraph>
          <Paragraph className="text-[12px] font-[500] px-5">Laporan</Paragraph>
        </div>
        <div className="m-auto">
          <IconsImport.Laporan
            className={"w-[30px] h-[30px] fill-[#2F2D2D]"}
          ></IconsImport.Laporan>
        </div>
      </div>
    </div>
  );
}
