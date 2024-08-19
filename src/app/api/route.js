import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch("http://sipolma.wuaze.com/api/user?i=1", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const data2 = await JSON.parse(data);
    return NextResponse.json({ data, data2 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
