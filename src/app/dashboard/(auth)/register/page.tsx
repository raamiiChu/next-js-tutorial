"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login");
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="grid justify-center items-center gap-5">
      <form className="grid gap-5" onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="username"
          className="p-5 border-2 border-gray-300 outline-none rounded text-xl font-bold bg-transparent focus:border-blue-500"
          required
        />
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
          Register
        </button>
        {error && "Something went wrong!"}
      </form>

      <Link
        className="w-full text-center underline hover:opacity-70"
        href="/dashboard/login"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
