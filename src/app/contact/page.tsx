import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Contact Information",
  description: "Contact page",
};

const Contact = () => {
  return (
    <main>
      <h1 className="text-6xl mb-24 text-center font-bold">
        Let&apos;s Keep in Touch
      </h1>

      <section className="grid grid-cols-2 items-center gap-24">
        <div className="h-[500px] relative">
          <Image
            src={"/contact.png"}
            fill={true}
            alt="contact us"
            className="object-contain animate-bounce-slow"
          />
        </div>

        <form className="grid gap-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="p-5 border-2 border-gray-300 outline-none font-bold bg-transparent focus:border-blue-500"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            className="p-5 border-2 border-gray-300 outline-none font-bold bg-transparent focus:border-blue-500"
          />
          <textarea
            name="message"
            id="message"
            placeholder="message"
            cols={30}
            rows={10}
            className="p-5 border-2 border-gray-300 outline-none font-bold bg-transparent focus:border-blue-500"
          ></textarea>
          <Button text="Send" url="#" />
        </form>
      </section>
    </main>
  );
};

export default Contact;
