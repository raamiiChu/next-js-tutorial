"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user?.name}`,
    fetcher
  );
  console.log(data);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.user?.name,
        }),
      });

      mutate();

      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handlerDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, { method: "DELETE" });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "authenticated") {
    return (
      <div className="grid grid-cols-2 gap-y-24">
        <section className="space-y-12 my-12">
          {isLoading
            ? "Loading..."
            : data?.map((post) => {
                const { _id, image, title } = post;
                return (
                  <article
                    key={_id}
                    className="grid grid-cols-3 justify-center items-center gap-x-5 mx-2.5"
                  >
                    <div className="col-span-1 relative h-40">
                      <Image
                        src={image}
                        alt={title}
                        fill={true}
                        className="object-cover"
                      ></Image>
                    </div>

                    <section className="col-span-2 grid grid-cols-12">
                      <h2 className="col-span-10 text-xl font-bold">{title}</h2>
                      <span
                        className="col-span-2 text-center text-red-500 border cursor-pointer"
                        onClick={() => {
                          handlerDelete(_id);
                        }}
                      >
                        X
                      </span>
                    </section>
                  </article>
                );
              })}
        </section>

        <form className="grid gap-5" onSubmit={handlerSubmit}>
          <h2 className="text-2xl font-bold">Add New Post</h2>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            className="p-5 border-2 border-gray-500 text-xl font-bold text-gray-500 bg-transparent rounded"
          />
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="desc"
            className="p-5 border-2 border-gray-500 text-xl font-bold text-gray-500 bg-transparent rounded"
          />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="image"
            className="p-5 border-2 border-gray-500 text-xl font-bold text-gray-500 bg-transparent rounded"
          />
          <textarea
            name="content"
            id="context"
            placeholder="content"
            cols={30}
            rows={10}
            className="p-5 border-2 border-gray-500 text-xl font-bold text-gray-500 bg-transparent rounded"
          ></textarea>
          <button
            type="submit"
            className="p-5 bg-primary text-[#eee] font-bold rounded cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
