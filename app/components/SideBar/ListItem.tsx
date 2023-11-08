import AtendIcon from "./icon/AtendIcon";
import DashIcon from "./icon/DashboarIcon";
import EmpreIcon from "./icon/EmpresIcon";
import ClientIcon from "./icon/ClientIcon";
import TicketIcon from "./icon/TicketIcon";
import CampanhaIcon from "./icon/CampanhasIcon";
import QuadrosIcon from "./icon/QuadrosIcon";
import ChatIcon from "./icon/ChatIcon";
import ConfigIcon from "./icon/ConfigIcon";
import RelatoriIcon from "./icon/RelatorioIcon";
import SetDown from "./icon/SetDown";

// Acima os Icons

import ListItems from "./ListItems";

export default function ListItem() {
  return (
    <div>
      <ul className="m-0 p-0 overflow-hidden 	">
        <li className="">
          <ListItems svg={<DashIcon />} title="Dashboard" href={"#1"} />
        </li>
        <li>
          <ListItems svg={<AtendIcon />} title="Atendimento" href={"#2"} />
        </li>
        <li>
          <ListItems svg={<EmpreIcon />} title="Empresas" href={"#3"} />
        </li>
        <li>
          <ListItems svg={<ClientIcon />} title="Clientes" href={"#4"} />
        </li>
        <li>
          <ListItems svg={<TicketIcon />} title="Tickets" href={"#5"} />
        </li>
        <li>
          <ListItems svg={<CampanhaIcon />} title="Campanhas" href={"#6"} />
        </li>
        <li>
          <ListItems svg={<QuadrosIcon />} title="Quadros" href={"#7"} />
        </li>
        <li>
          <ListItems svg={<ChatIcon />} title="Chat Interno" href={"#8"} />
        </li>
        <li>
          <ListItems svg={<ConfigIcon />} title="Configurações" href={"#9"} />
        </li>
        <li>
          <ListItems svg={<RelatoriIcon />} title="Rélatorio" href={"#10"} />
        </li>
      </ul>
      <div className="mb-20 mt-[58px]  pr-10">
        <div className=" flex flex-col text-center  py-4">
          <p className="text-xs   ">Powered by</p>
          <img
            src="https://www.npxtech.com.br/images/logo.png"
            alt="Logo"
            className="mx-auto h-7"
          />
        </div>
      </div>
    </div>
  );
}
