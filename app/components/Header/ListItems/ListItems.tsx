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
      className="p-4 inline-block relative text-left h-[60px]	w-full hover:bg-zinc-300 focus:border-l-4 focus:border-orange-600 focus:text-orange-600 focus:bg-white"
    >
      <Image
        className="float-left  m-1"
        src={icon}
        alt=".."
        width={20}
        height={20}
      />{" "}
      {title}
    </a>
  );
}
