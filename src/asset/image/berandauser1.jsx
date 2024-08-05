import Image from "next/image";

const Berandauser1 = ({ className, width, height }) => {
  return (
    <Image
      className={className}
      src={"/berandauser1.png"}
      width={width}
      height={height}
      alt="gambar"
    ></Image>
  );
};

export default Berandauser1;
