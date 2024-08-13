import Footers from "@/components/pages/user/foot";
import Navbar from "@/components/pages/user/nav";
import NavMobile from "@/components/pages/user/navmobile";
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footers></Footers>
      <NavMobile></NavMobile>
    </div>
  );
}
