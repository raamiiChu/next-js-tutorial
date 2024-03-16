import Image from "next/image";
import Hero from "/public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className="grid grid-cols-2 items-center gap-24">
      <section className="grid gap-12">
        <h1 className="py-5 text-7xl font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-2xl font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See Our Works" url="/portfolio" />
      </section>

      <Image
        src={Hero}
        alt="img"
        className="w-full h-[500px] object-contain animate-bounce-slow"
      />
    </main>
  );
}
