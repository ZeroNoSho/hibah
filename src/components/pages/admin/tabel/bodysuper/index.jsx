import Button from "@/components/atmos/button";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function SuperBodyTabel({ data }) {
  return (
    <>
      {data.body.map((e, i) => (
        <tr key={i} className="bg-gray-100 border-b">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.Nama}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.Email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.Password}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.Tingkat}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {e.Role}
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
