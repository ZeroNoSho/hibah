import Button from "@/components/atmos/button";
import Paragraph from "@/components/atmos/paragraph";
import Image from "next/image";

export default function BerandaHome() {
  return (
    <div className="overflow-hidden relative max-md:h-[400px] md:h-screen bg-[#042235] z-0">
      <div className="absolute md:top-[100px] md:left-[80px] z-50 w-[630px]">
        <div className="max-md:mx-10">
          <Paragraph
            light={"text-white"}
            className={"md:text-[45px] max-md:text-[25px] font-[600]"}
          >
            Ajukan Proposal Ormawa <br className="md:hidden"></br> Dengan Sistem
            Terintegrasi
          </Paragraph>
          <Paragraph light={"text-white  w-3/4 max-md:text-sm"}>
            Sipolma adalah website yang mempermudah Ormawa{" "}
            <br className="md:hidden"></br> untuk mengajukan proposal ke
            kemahasiswaan
          </Paragraph>
          <div className="md:flex">
            <div>
              <Button
                className={`md:bg-[#FFD600] max-md:bg-white text-[#014366] mr-5 my-3  py-5 px-7 appearance-none rounded-[28px] text-[12px] font-medium `}
              >
                AJUKAN PROPOSAL
              </Button>
            </div>
            <div>
              <Button
                className={`bg-transparent border border-white text-white mr-5 my-3  py-5 px-7 appearance-none rounded-[28px] text-[12px] font-medium `}
              >
                PROSEDUR PENGAJUAN
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[100px] right-[-150px] z-10">
        <div className="w-[360px] h-[1060px] rounded-[203px] bg-[#FF9900]"></div>
      </div>
      <div className="absolute top-[-20px] right-[160px] z-0">
        <div className="w-[360px] h-[1080px] rounded-full bg-[#FFD600] rotate-[40.79deg]"></div>
      </div>
      <div className="absolute md:top-[0px] max-md:bottom-[0px] md:right-[160px] z-20">
        <Image
          className="w-[900px] h-full"
          width={1000}
          height={1000}
          src={"/home.png"}
          alt="Image"
        ></Image>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-[-10px] left-0 z-20"
      >
        <path
          fill="#ffff"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,261.3C640,267,800,245,960,202.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
