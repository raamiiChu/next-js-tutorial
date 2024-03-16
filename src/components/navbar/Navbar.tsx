"use client";

import React from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession, signOut } from "next-auth/react";

interface Link {
  id: number;
  title: string;
  url: string;
}

const links: Link[] = [
  { id: 0, title: "Home", url: "/" },
  { id: 1, title: "Portfolio", url: "/portfolio" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="sticky h-24 grid grid-cols-12 items-center">
      <Link href={"/"} className="col-span-3 text-2xl font-bold">
        lamamia
      </Link>

      <ul className="col-start-5 col-span-8 grid gap-3 grid-cols-8">
        <DarkModeToggle />

        {links.map((link: Link) => {
          const { id, title, url } = link;
          return (
            <li key={id}>
              <Link href={url} className="block p-1 text-center">
                {title}
              </Link>
            </li>
          );
        })}

        {status === "authenticated" && (
          <button
            className=" bg-primary rounded"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
