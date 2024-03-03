"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navitems = () => {
  const pathname = usePathname();
  return (
    <ul className="w-full flex flex-col items-start gap-5 md:flex-row md:justify-between">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            className={`${
              isActive && "text-primary-500"
            } flex justify-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} key={link.route}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
