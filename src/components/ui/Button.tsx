"use client";
import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState("/");

  return (
    <button className="bg-[var(--theme-primary))] rounded p-2 text-white my-2"> Read more  </button>
  );
}