import { NextResponse } from "next/server";
export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const onlyuser = [
    "/beranda",
    "/proposal",
    "/proposal",
    "/prosedur",
    "/profile",
  ];
  const onlyadmin = ["/admin/beranda", "/admin/proposal", "/admin/laporan"];
  const onlysuperadmin = ["/admin/pengguna", "/admin/ormawa"];
  const authPage = ["/", "/admin"];

  const token = request.cookies.get("token");
  const account_status = request.cookies.get("account_status");

  //jika tidak login
  if (!token && [...onlyuser, ...onlyadmin].includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //jika login
  if (account_status?.value == 1 && [...authPage].includes(pathname)) {
    return NextResponse.redirect(new URL("/admin/beranda", request.url));
  }
  if (
    account_status?.value == 2 &&
    [...authPage, ...onlyuser, ...onlysuperadmin].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/admin/beranda", request.url));
  }

  if (
    account_status?.value == 3 &&
    [...authPage, ...onlyadmin, ...onlysuperadmin].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/beranda", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/admin",
    "/beranda",
    "/proposal",
    "/proposal",
    "/prosedur",
    "/profile",
    "/admin/beranda",
    "/admin/proposal",
    "/admin/laporan",
    "/admin/pengguna",
    "/admin/ormawa",
  ],
};
