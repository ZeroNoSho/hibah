import Links from "@/components/atmos/link";
import { IconsImport } from "@/utils/icons/IconsImport";

export default function NavMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex">
        <div className="flex-1 group">
          <Links
            href="/beranda"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[#2F2D2D] group-hover:text-[#FF9900] border-b-2 border-transparent group-hover:border-[#FF9900]"
          >
            <span className="block px-1 pt-1 pb-2">
              <IconsImport.Home
                className={"text-[#2F2D2D] mx-auto"}
              ></IconsImport.Home>
              <span className="block text-xs pb-1">Beranda</span>
            </span>
          </Links>
        </div>
        <div className="flex-1 group">
          <Links
            href="/proposal"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[#2F2D2D] group-hover:text-[#FF9900] border-b-2 border-transparent group-hover:border-[#FF9900]"
          >
            <span className="block px-1 pt-1 pb-2">
              <IconsImport.ProposalNav
                className={"text-[#2F2D2D] mx-auto"}
              ></IconsImport.ProposalNav>
              <span className="block text-xs pb-1">Proposal</span>
            </span>
          </Links>
        </div>
        <div className="flex-1 group">
          <Links
            href="/laporan"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[#2F2D2D] group-hover:text-[#FF9900] border-b-2 border-transparent group-hover:border-[#FF9900]"
          >
            <span className="block px-1 pt-1 pb-2">
              <IconsImport.LaporanNav
                className={"text-[#2F2D2D] mx-auto"}
              ></IconsImport.LaporanNav>
              <span className="block text-xs pb-1">Laporan</span>
            </span>
          </Links>
        </div>
        <div className="flex-1 group">
          <Links
            href="/prosedur"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[#2F2D2D] group-hover:text-[#FF9900] border-b-2 border-transparent group-hover:border-[#FF9900]"
          >
            <span className="block px-1 pt-1 pb-2">
              <IconsImport.AlurNav
                className={"text-[#2F2D2D] mx-auto"}
              ></IconsImport.AlurNav>
              <span className="block text-xs pb-1">Prosedur</span>
            </span>
          </Links>
        </div>
        <div className="flex-1 group">
          <Links
            href="/profile"
            className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[#2F2D2D] group-hover:text-[#FF9900] border-b-2 border-transparent group-hover:border-[#FF9900]"
          >
            <span className="block px-1 pt-1 pb-2">
              <IconsImport.UserNav
                className={"text-[#2F2D2D] mx-auto"}
              ></IconsImport.UserNav>
              <span className="block text-xs pb-1">Akun</span>
            </span>
          </Links>
        </div>
      </div>
    </div>
  );
}
