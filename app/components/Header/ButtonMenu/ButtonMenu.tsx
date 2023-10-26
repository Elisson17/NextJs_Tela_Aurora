"use client";
import { FiMenu } from "react-icons/fi";
import { PiChartBarDuotone } from "react-icons/pi";
import { DiApple } from "react-icons/di";
import dashboard from "./bar_chart"
//acima estão os icones

import ListItems from "../ListItems/ListItems";

import { useState } from "react";

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
       absolute z-40  h-full bg-neutral-200 w-[192px] animate-fade-right animate-duration-[250ms]    `}
      >
        <div className=" flex flex-col ">
          <ul className="m-0 p-0 overflow-hidden 	">
            <li className="">
              <ListItems
                title="Aqui teste"
                icon={dashboard}
                path="#"
              ></ListItems>
            </li>
            <li>
              <ListItems
                title="Aqui teste"
                icon={<PiChartBarDuotone />}
                path="#2"
              ></ListItems>
            </li>
            <li>
              <ListItems
                title="Aqui teste"
                icon={<PiChartBarDuotone />}
                path="#3"
              />
            </li>
            <li>
              <ListItems title="Aqui teste" icon={<DiApple />} path="#4" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
