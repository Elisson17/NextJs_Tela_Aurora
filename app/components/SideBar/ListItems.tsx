import Image from "next/image";
import Link from "next/link";

export default function ListItems({
  href,
  title,
  svg,
}: {
  href: string;
  title: string;
  svg: string;
}) {
  return (
    <div>
      <Link
        href={href}
        className={`p-[10px] inline-block relative text-left h-[44px] text-xs	w-full font-medium  hover:bg-zinc-300 focus:border-l-4 focus:border-orange-600 focus:text-orange-600 focus:bg-white`}
      >
        <span className="flex float-left mr-[6px] ">{svg}</span>
        {title}
      </Link>
    </div>
  );
}
