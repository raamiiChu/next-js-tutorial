"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div className="space-y-5 w-1/2 mx-auto">
      <form className="grid gap-5" onSubmit={handlerSubmit}>
        <input
          type="email"
          placeholder="email"
          className="p-5 border-2 border-gray-300 outline-none rounded text-xl font-bold bg-transparent focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="p-5 border-2 border-gray-300 outline-none rounded text-xl font-bold bg-transparent focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full p-5 bg-primary text-xl font-bold rounded hover:bg-opacity-70"
        >
          Login
        </button>
      </form>

      <button
        className="w-max px-5 py-3 rounded bg-primary hover:bg-opacity-70"
        onClick={() => {
          signIn("github");
        }}
      >
        Login with Github
      </button>
    </div>
  );
};

export default Login;
