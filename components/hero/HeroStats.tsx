"use client";

import { stats } from "@/data/stats";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-5
          "
        >
          <h3 className="text-2xl font-bold">
            {item.value}
          </h3>

          <p className="text-zinc-400 text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}