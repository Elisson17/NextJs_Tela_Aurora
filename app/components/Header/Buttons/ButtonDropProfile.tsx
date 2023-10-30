"use client ";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
export default function ButtonDropProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="items-center	text-center  inline-block">
      <button
        className="hover:bg-gray-300 rounded-lg absolute right-3  top-0  content-center       
         h-[60px] w-[160px] cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/image/profile.jpg"
          alt="profile"
          className="float-left rounded-full"
          width="30"
          height="30"
        />{" "}
        Bruno Lopes
        <div className=" float-right p-1    ">
          <BiChevronDown size={22} />
        </div>
      </button>
      <nav
        className={`${
          open
            ? "block animate-fade-down animate-once animate-duration-[400ms] "
            : "hidden animate-fade-up animate-once animate-duration-[400ms]"
        }  
       absolute   right-3  top-5     bg-neutral-200 w-[160px] rounded-b-md mt-10  `}
      >
        <div className=" flex flex-col">
          <ul className="m-0 p-0 overflow-hidden 	">
            <li className="">cccc</li>
            <li>aaaa</li>
            <li>ssss</li>
            <li>dddd</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
