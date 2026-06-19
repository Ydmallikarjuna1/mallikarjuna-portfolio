"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "About",
    "Expertise",
    "Projects",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        mt-4
        "
      >
        <div
          className="
          flex
          items-center
          justify-between

          rounded-2xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          px-6
          py-4
          "
        >
          <h1 className="font-bold text-lg">
            Y.D. Mallikarjuna
          </h1>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                text-sm
                text-zinc-300
                hover:text-white
                transition-colors
                "
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="hidden md:block px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all"
          >
            Resume
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div
            className="
            md:hidden

            mt-2

            rounded-2xl

            border
            border-white/10

            bg-black/60

            backdrop-blur-xl

            p-6
            "
          >
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}