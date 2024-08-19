import BodyTabel from "./body";
import SuperBodyTabel from "./bodysuper";

export default function Tabel({ data, type, page, head }) {
  return (
    <table className="relative w-full">
      <thead className="bg-white border-b">
        <tr>
          {head.map((e, i) => (
            <th
              key={i}
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {e}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {page === "SuperAdmin" ? (
          <SuperBodyTabel data={data} type={type} />
        ) : (
          <BodyTabel data={data} type={type}></BodyTabel>
        )}
      </tbody>
    </table>
  );
}
