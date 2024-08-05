import InputAdmin from "@/components/pages/admin/head/Input";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function HeadInput() {
  return (
    <div className="m-5">
      <div className="flex">
        <div className="w-full">
          <p className="mb-2">Status</p>
          <InputAdmin placeholder={"Semua"}></InputAdmin>
        </div>
        <div className="w-full">
          <p className="mb-2">Tanggal</p>
          <InputAdmin
            placeholder={"Select date"}
            svg={
              <IconsImport.Date className="h-6 w-6 text-gray-400"></IconsImport.Date>
            }
          ></InputAdmin>
        </div>

        <div className="w-full">
          <p className="mb-2">Cari</p>
          <InputAdmin
            placeholder={"Cari.."}
            svg={
              <IconsImport.Search className="h-6 w-6 text-gray-400"></IconsImport.Search>
            }
          ></InputAdmin>
        </div>
      </div>
    </div>
  );
}
