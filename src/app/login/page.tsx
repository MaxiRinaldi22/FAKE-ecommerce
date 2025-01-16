"use client";

import useAdminContext from "@/hooks/useAdminContext";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setAdmin } = useAdminContext();  

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const data = await response.json();

    if (response.ok) {
      setAdmin(true);
      redirect("/dashboard");
    } else {
      alert(data.message || "Incorrect password");
    }
  };

  return (
    <section className="flex h-[65vh] w-full items-center justify-center">
      <div className="relative flex flex-col rounded-md bg-white p-4 text-black">
        <form
          className="flex flex-col gap-3 md:w-[300px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative block">
            <label
              htmlFor="email"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="mail"
              id="email"
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-none"
            />
          </div>
          <div className="relative block">
            <label
              htmlFor="password"
              className="mb-2 block cursor-text text-sm font-normal leading-[140%] text-gray-600"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-none"
            />
          </div>
          <div className="flex w-full items-end justify-end">
            <button
              onClick={handleLogin}
              type="submit"
              className="w-max rounded bg-orange-500 px-6 py-2 text-sm font-normal text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
