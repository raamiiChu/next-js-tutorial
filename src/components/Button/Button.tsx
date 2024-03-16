import React from "react";
import Link from "next/link";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link href={url}>
      <button className="w-max px-5 py-3 rounded bg-primary hover:bg-opacity-70">
        {text}
      </button>
    </Link>
  );
};

export default Button;
