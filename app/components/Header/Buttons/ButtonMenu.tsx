"use client";
import { FiMenu } from "react-icons/fi";
import { PiChartBarDuotone } from "react-icons/pi";
import { DiApple } from "react-icons/di";
import dashboard from "./bar-chart.svg";

//acima estão os icones


import { useState } from "react";
import  BeakerIcon  from "@heroicons/react/20/solid";
import ListItem from "../../SideBar/ListItem";

export default function ButtonMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <FiMenu
        className=" hover:bg-gray-300 hover:rounded-full block h-7 w-7 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      <nav
        className={`${open ? "block" : "hidden"} mt-[67px] inset-y-0 left-0
        z-40 fixed  h-full bg-neutral-200 w-[192px] animate-fade-right animate-duration-[250ms]    `}
      >
        <div className=" flex flex-col">
         <ListItem />
        </div>
      </nav>
    </div>
  );
}
