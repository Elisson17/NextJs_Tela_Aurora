import React from "react";

export function Pagination() {
  return(
<div className="xs:flex-row  xs:justify-between flex flex-col items-center p-5">
<div className="flex items-center scale-75  space-x-2">
  <button
    type="button"
    className="w-full  bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
  >
  Anterior
  </button>
  <button
    type="button"
    className="px-[13px]  py-[6px] rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white  focus:bg-orange-600 focus:text-white focus:outline-none"
  >
    1
  </button>
  <button
    type="button"
    className="px-[13px] py-[6px] rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus:outline-none"
  >
    2
  </button>
  <button
    type="button"
    className="px-[13px] py-[6px] rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus:outline-none"
  >
    3
  </button>
  <button
    type="button"
    className="px-[13px] py-[6px] rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus:outline-none"
  >
    4
  </button>
  <button
    type="button"
    className="w-full  bg-white p-4  text-base text-gray-600 hover:bg-gray-100"
  >
    Próximo
  </button>
</div>
</div>
  );
}
