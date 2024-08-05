import Button from "@/components/atmos/button";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function BodyTabel({ data }) {
  return (
    <>
      {data.body.map((e, i) => (
        <tr key={i} className="bg-gray-100 border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.no}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.tgl}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.judul}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.user}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.tingkat}
          </td>
          <td className="px-6 py-4 text-[#0284C7] whitespace-nowrap text-sm font-medium ">
            Download
          </td>
          <td className="px-6 py-4 text-sm flex">
            <Button className="flex rounded-lg bg-[#0284C7] py-3 px-6 text-xs font-bold uppercase text-white">
              Aksi
              <IconsImport.Dropdown className={"h-5 w-5 ml-5"} />
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}
