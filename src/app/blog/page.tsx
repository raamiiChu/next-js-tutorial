import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  image: string;
  content: string;
}

async function getData() {
  const res = await axios.get("http://localhost:3000/api/posts");

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const Blog = async () => {
  const posts: Post[] = await getData();
  console.log(posts);
  return (
    <main>
      {posts.map((post: Post) => {
        const { _id, title, image, content } = post;

        return (
          <Link
            key={_id}
            href={`/blog/${_id}`}
            className="grid grid-cols-6 items-center gap-12 mb-12"
          >
            <div className="col-span-2">
              <Image
                src={image}
                alt=""
                width={400}
                height={250}
                className="object-cover"
              />
            </div>

            <section className="col-span-4">
              <h1 className="text-3xl mb-2.5">{title}</h1>
              <p className="text-lg text-gray-500">{content}</p>
            </section>
          </Link>
        );
      })}
    </main>
  );
};

export default Blog;
