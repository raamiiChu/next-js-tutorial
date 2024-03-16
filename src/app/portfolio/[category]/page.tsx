import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { items } from "./data";
import { notFound } from "next/navigation";

interface Params {
  category: string;
}

const getData = (category: string) => {
  const data = items[category];

  if (data) return data;

  return notFound();
};

const Category = ({ params }: { params: Params }) => {
  const { category } = params;

  const data = getData(category);

  return (
    <main>
      <h2 className="my-5 text-3xl text-primary font-bold">{category}</h2>
      {data.map((item) => {
        const { id, title, desc, image } = item;

        return (
          <article
            key={id}
            className="flex odd:flex-row-reverse items-center gap-12 my-16"
          >
            <section className="flex flex-1 flex-col gap-5">
              <h3 className="text-5xl font-bold">{title}</h3>
              <p className="text-xl">{desc}</p>
              <Button text="See More" url="#" />
            </section>

            <div className="relative h-[500px] flex flex-1 object-cover">
              <Image src={image} fill={true} alt="" />
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Category;
