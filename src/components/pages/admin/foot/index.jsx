export default function FootLaporan() {
  return (
    <div className="flex items-center">
      <div className="mx-5 mr-auto">
        <p>Menampilkan 10 dari 15 Proposal</p>
      </div>
      <div className="flex select-none space-x-1 text-gray-700">
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          Previous
        </a>
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          1
        </a>
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          2
        </a>
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          3
        </a>
        <span className="flex w-20 justify-center items-center rounded-md px-4 py-2">
          ...
        </span>
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          10
        </a>
        <a
          href="#"
          className="flex w-20 justify-center items-center rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"
        >
          Next
        </a>
      </div>
    </div>
  );
}
