import NavbarAdmin from "@/components/pages/admin/nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <NavbarAdmin></NavbarAdmin>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
