import Footers from "@/components/pages/user/foot";
import Navbar from "@/components/pages/user/nav";
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footers></Footers>
    </div>
  );
}
