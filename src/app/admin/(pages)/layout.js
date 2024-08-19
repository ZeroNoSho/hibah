import NavbarAdmin from "@/components/pages/admin/nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <NavbarAdmin></NavbarAdmin>
      <div className="w-full">{children}</div>
    </div>
  );
}
