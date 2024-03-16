import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-12 flex justify-between items-center">
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className="flex gap-2.5">
        <Image
          src={"/facebook.png"}
          width={20}
          height={20}
          className="opacity-75 cursor-pointer hover:opacity-100"
          alt="Lama Dev"
        />
        <Image
          src={"/instagram.png"}
          width={20}
          height={20}
          className="opacity-75 cursor-pointer hover:opacity-100"
          alt="Lama Dev"
        />
        <Image
          src={"/twitter.png"}
          width={20}
          height={20}
          className="opacity-75 cursor-pointer hover:opacity-100"
          alt="Lama Dev"
        />
        <Image
          src={"/youtube.png"}
          width={20}
          height={20}
          className="opacity-75 cursor-pointer hover:opacity-100"
          alt="Lama Dev"
        />
      </div>
    </footer>
  );
};

export default Footer;
