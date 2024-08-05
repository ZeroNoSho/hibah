import BodyTabel from "./body";
import SuperBodyTabel from "./bodysuper";

export default function Tabel({ data }) {
  return (
    <div className="m-5">
      <table className="min-w-full ">
        <thead className="bg-white border-b">
          <tr>
            {data.head.map((e, i) => (
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
          {data.type === "SuperAdmin" ? (
            <SuperBodyTabel data={data} />
          ) : (
            <BodyTabel data={data}></BodyTabel>
          )}
        </tbody>
      </table>
    </div>
  );
}
