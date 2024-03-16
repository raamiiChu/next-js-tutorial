import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";

interface Params {
  id: string;
}

interface Post {
  _id: string;
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { title, desc } = await getData(params.id);

  return {
    title,
    description: desc,
  };
}

async function getData(_id: string) {
  const res = await axios.get(`http://localhost:3000/api/posts/${_id}`);

  if (res.status !== 200) {
    return notFound();
  }

  return res.data;
}

const BlogPost = async ({ params }: { params: Params }) => {
  const post: Post = await getData(params.id);
  const { title, desc, image, content, username } = post;

  return (
    <main>
      <article className="grid grid-cols-2 gap-5">
        <section className="grid">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg font-light">{desc}</p>

          <div className="flex items-center gap-2.5">
            <Image
              src="/instagram.png"
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="">{username}</span>
          </div>
        </section>

        <div className="relative h-[300px]">
          <Image src={image} alt="" fill={true} className="object-cover" />
        </div>
      </article>

      <div className="mt-12 text-xl text-justify font-light color-[#999]">
        <p className="">{content}</p>
      </div>
    </main>
  );
};

export default BlogPost;
