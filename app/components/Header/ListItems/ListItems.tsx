import Image from "next/image";

export default function ListItems({
  title,
  icon,
  path,
}: {
  icon: string;
  title: string;
  path: string;
}) {
  return (
    <a
      href={path}
      className="p-4 inline-block relative text-left	w-full  focus:border-l-4 focus:border-orange-600 focus:text-orange-600 focus:bg-white"
    >
<Image src={icon} className="focus:text-orange-600 float-left mt-1 mr-4 " width={27} height={27} alt="fds" />
      {title}
    </a>
  );
}
