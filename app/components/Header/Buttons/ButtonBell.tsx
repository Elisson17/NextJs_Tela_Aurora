import { GoBell } from "react-icons/go";
export default function ButtonBell() {
  return (
    <div className="">
      <button className="inline-block absolute right-[184px] top-[18px] cursor-pointer hover:bg-gray-300 hover:rounded-full float-left ">
        <div className="h-[13px] bg-red-600 rounded-full 	absolute    border-solid left-3 top-0	 border-2	  w-[13px] "></div>
        <GoBell size={25} />
      </button>
    </div>
  );
}
