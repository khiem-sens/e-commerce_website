import { MenuItemType } from "@/lib/interface";
import Link from "next/link";
import React from "react";
import Cart from "../ShoppingCart/Cart";

interface MenuProps {
  links: MenuItemType[];
}

export const DesktopMenu: React.FC<MenuProps> = ({ links }) => {
  return (
    <>
      <ul className="col-start-1 flex items-center gap-6 md:text-[1.25rem]">
        {links.map((link: MenuItemType) => (
          <Link key={link.id} href={link.url} className="">
            {link.title}
          </Link>
        ))}
      </ul>
      <Link href="/" className="col-start-2 justify-self-center object-fit md:w-36">
        <img src="/logo.svg" alt="Logo" />
      </Link>
      <Cart/>
    </>
  );
};

export const MobileMenu: React.FC<MenuProps> = ({ links }) => {
  return <div>MobileMenu</div>;
};
