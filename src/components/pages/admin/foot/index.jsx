import Links from "@/components/atmos/link";
import Paragraph from "@/components/atmos/paragraph";
import Span from "@/components/atmos/span";

export default function FootLaporan() {
  return (
    <div className="flex items-center">
      <div className="mx-5 mr-auto">
        <Paragraph>Menampilkan 10 dari 15 Proposal</Paragraph>
      </div>
      <div className="flex select-none space-x-1 text-gray-700">
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          Previous
        </Links>
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          1
        </Links>
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          2
        </Links>
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          3
        </Links>
        <Span className="flex w-20 justify-center items-center rounded-md px-4 py-2">
          ...
        </Span>
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          10
        </Links>
        <Links
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          Next
        </Links>
      </div>
    </div>
  );
}
