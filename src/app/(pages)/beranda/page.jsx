import Heading from "@/components/atmos/heading";
import Paragraph from "@/components/atmos/paragraph";
import Beranda1 from "@/components/pages/user/beranda/beranda1";
import Beranda2 from "@/components/pages/user/beranda/beranda2";
import Beranda3 from "@/components/pages/user/beranda/beranda3";
import Faq from "@/components/pages/user/beranda/beranda4";
import BerandaHome from "@/components/pages/user/beranda/home";
import { ImageImport } from "@/utils/image/ImageImport";

export default function page() {
  return (
    <div className="">
      <BerandaHome></BerandaHome>
      <div className="bg-white">
        <Beranda1></Beranda1>
        <Beranda2></Beranda2>
        <Beranda3></Beranda3>
       
        <Faq></Faq>
      </div>
    </div>
  );
}
