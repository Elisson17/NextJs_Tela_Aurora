import Image from "next/image";
import ButtonMenu from "./Buttons/ButtonMenu";
import Filter_Input from "./filter_text/Filter_Input";
import ButtonDropProfile from "./Buttons/ButtonDropProfile";
import ButtonBell from "./Buttons/ButtonBell";
import ButtonTheme from "./Buttons/ButtonTheme";

export default function HeaderBar() {
  return (
    <div className=" p-5 w-full flex items-center shadow-xl		 h-[60px] bg-neutral-200">
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
      <Filter_Input />
      <ButtonTheme />
<ButtonBell />
      <ButtonDropProfile />
    </div>
  );
}
