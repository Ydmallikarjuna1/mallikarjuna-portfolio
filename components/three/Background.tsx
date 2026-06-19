"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("./Scene"),
  {
    ssr: false,
  }
);

export default function Background() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-10
      opacity-40
      "
    >
      <Scene />
    </div>
  );
}