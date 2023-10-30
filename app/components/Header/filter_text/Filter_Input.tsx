import Image from "next/image";
import search from "./search-svgrepo-com-removebg-preview.png";
export default function Filter_Input() {
  return (
    <div className=" ml-[280px] justify-center bg-white m-0 text-center border-2 relative rounded-lg border-gray-300  items-center float-left">
      <Image
        className="inline-block  rounded-lg relative"
        src={search}
        alt="..."
        width={30}
        height={30}
      />
      <input
        className="p-1 border-0 outline-none w-[160px] focus:border-none rounded-lg "
        placeholder="Pesquisa"
        type="text"
        name="filter"
        id="filter"
      />
    </div>
  );
}
