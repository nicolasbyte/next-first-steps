"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface Props {
  href: string;
  label: string;
}

export const ActiveLink = ({ href, label }: Props) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        key={href}
        href={href}
        className={`${style.link} ${ pathName == href && style["active-link"]}`}
      >
        <span>{label}</span>
      </Link>
    </div>
  );
};
