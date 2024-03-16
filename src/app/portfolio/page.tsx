import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <main>
      <h2 className="my-5 text-3xl">Choose a gallery</h2>

      <ul className="flex gap-12">
        <li>
          <Link
            href="/portfolio/illustrations"
            className="group block relative w-[300px] h-[400px] border-4 border-gray-300 rounded bg-cover bg-[url('/illustration.png')]"
          >
            <span className="absolute bottom-2.5 right-2.5 text-4xl font-bold text-white group-hover:text-primary">
              Illustrations
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio/websites"
            className="group block relative w-[300px] h-[400px] border-4 border-gray-300 rounded bg-cover bg-[url('/websites.jpg')]"
          >
            <span className="absolute bottom-2.5 right-2.5 text-4xl font-bold text-white group-hover:text-primary">
              Websites
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio/applications"
            className="group block relative w-[300px] h-[400px] border-4 border-gray-300 rounded bg-cover bg-[url('/apps.jpg')]"
          >
            <span className="absolute bottom-2.5 right-2.5 text-4xl font-bold text-white group-hover:text-primary">
              Application
            </span>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Portfolio;
