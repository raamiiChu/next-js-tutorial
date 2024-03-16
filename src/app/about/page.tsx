import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <main className="grid gap-12 mb-12">
      <article className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover grayscale"
        />

        <section className="absolute bottom-5 left-5 p-1.5 bg-[#53c28b]">
          <h1 className="text-4xl font-bold mb-2">Digital Storytellers</h1>
          <h2 className="text-xl">
            Handcrafting award winning digital experiences
          </h2>
        </section>
      </article>

      <section className="grid grid-cols-2 gap-24">
        <article>
          <h1 className="mb-7 text-4xl font-bold">Who Are We?</h1>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </article>

        <article>
          <h1 className="mb-7 text-4xl font-bold">What We Do?</h1>
          <p className="mb-7 text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </article>
      </section>
    </main>
  );
};

export default About;
