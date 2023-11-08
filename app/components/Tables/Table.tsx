import { RiExpandUpDownFill } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Pagination } from "../Pagination/Pagination";
import TrashButton from "../IconsAction/TrashButton";
import EditButton from "../IconsAction/EditButton";

export default function Table() {
  
  
  
  const dados = [
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Deus", cod: "#54654" },
    { nome: "Item 2", cod: "#65445" },
    { nome: "Item 3", cod: "#99876" },
  ];

  return (


    <div className="mt-0 mb-10  w-screen flex items-center 	justify-center">
      <div className=" mb-14 rounded-lg mt-[40px] shrink w-3/4 border-[1px] rounded-t-3xl   text-orange-600">
        <h2 className="bg-gray-200 text-2xl font-bold text-left	  pb-2 pl-1 flex space-x-0 p-1 rounded-t-3xl border-3">
          <p className="inline-flex mt-2 ml-3"> Empresas</p>
          <div className="pt-[2px] pl-2 relative  inline-flex">
            <AiOutlinePlusCircle size={43} />
          </div>
        </h2>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full h-auto mb-2  scale-95   text-black">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className=" border-gray-200 text-sm pl-3 text-left "
                >
                  Empresas
                  <div className=" inline-flex">
                    <RiExpandUpDownFill />
                  </div>
                </th>
                <th
                  scope="col"
                  className="border-gray-200 text-sm px-5 py-3 text-left "
                >
                  Código externo
                  <div className="  inline-flex">
                    <RiExpandUpDownFill />
                  </div>
                </th>

                <th
                  scope="col"
                  className="border-gray-200 text-sm px-5 py-3 text-left "
                >
                  Ações
                </th>
              </tr>
            </thead>

            <tbody className=" w-full text-sm font-normal ">
              {dados.map((item, index) => (
                <tr
                  key={index}
                  className={`    ${
                    index % 2 === 0 ? "bg-violet-100" : "bg-white"
                  }`}
                >
                  <td className="  p-1 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3 mr-1 pr-2">
                        <p className="whitespace-nowrap">{item.nome}</p>
                      </div>
                    </div>
                  </td>
                  <td className="  p-6 text-sm">
                    <p className="whitespace-nowrap">{item.cod}</p>
                  </td>
                  <td className="  p-1 flex space-x-0">
                    <EditButton />
                    <TrashButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
