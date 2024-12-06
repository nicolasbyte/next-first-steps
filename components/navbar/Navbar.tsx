import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];
export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"}>
        <HomeIcon className="mr-2 text-white hover:text-blue-200 " />
        <span className="text-white hover:text-blue-200 mr-2">Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((item) => (
        <ActiveLink key={item.href} {...item} />
      ))}
    </nav>
  );
};
