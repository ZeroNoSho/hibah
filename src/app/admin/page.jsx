import Image from "next/image";
export default function Login() {
  return (
    <div className="bg-[url('/bglogin.png')] h-screen bg-no-repeat bg-left-bottom bg-cover flex justify-center items-center">
      <div className="bg-[#F0F9FF] w-[1182px] h-[770px] rounded-[14px] flex">
        <div className="m-auto">
          <Image width={643.5} height={650} src="/login.png" alt="" />
        </div>
        <div className="m-auto text-black">
          <h1 className="text-[31px] font-bold mt-5">Admin Sipolma</h1>
          <p className="text-[12px] my-3">
            Silahkan Masuk Dengan Akun Ormawa Anda
          </p>
          <form className="block w-full">
            <div className="my-3">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Username
              </label>

              <input
                type="text"
                placeholder="Masukkan Username Anda"
                className="text-[12px] w-[316px] h-[29px] appearance-none rounded-[10px] border border-[#e0e0e0] bg-white px-3  font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                Password
              </label>
              <input
                type="text"
                placeholder="Masukkan Password Anda"
                className="text-[12px] w-[316px] h-[29px] appearance-none rounded-[10px] border border-[#e0e0e0] bg-white px-3 font-medium text-[#6B7280]"
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-[14px] font-medium text-[#07074D]">
                NIP
              </label>
              <input
                type="text"
                placeholder="Masukkan NIP Anda"
                className="text-[12px] w-[316px] h-[29px] appearance-none rounded-[10px] border border-[#e0e0e0] bg-white px-3 font-medium text-[#6B7280]"
              />
            </div>
            <div>
              <input type="checkbox" />
              <label className="mx-1 my-auto text-[10px]">
                Simpan Info Login Saya
              </label>
            </div>
            <button className="my-3 w-[316px] p-2 appearance-none rounded-[10px] border border-[#e0e0e0] bg-black  text-base font-medium text-[#FFFF]">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
