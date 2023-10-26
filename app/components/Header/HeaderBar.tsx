import Image from "next/image";
import ButtonMenu from "./ButtonMenu/ButtonMenu";

export default function HeaderBar() {
  return (
    <div className=" p-5 w-full flex items-center shadow-md h-16 bg-neutral-200">
      <div>
        <ButtonMenu />
      </div>
      <Image
        src="/image/logo_aurora.png"
        className="m-5"
        alt="Image Logo"
        width="170"
        height="270"
      />
    </div>
  );
}
