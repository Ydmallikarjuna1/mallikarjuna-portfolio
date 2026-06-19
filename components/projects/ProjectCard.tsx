"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  project: any;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
  y: -10,
  scale: 1.02,
}}
      className="
      rounded-3xl

      overflow-hidden

      border
      border-white/10

      bg-white/5

      backdrop-blur-xl
      "
    >
      <div className="relative h-56 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="
    object-cover
    transition-transform
    duration-500
    hover:scale-110
    "
  />
</div>

      <div className="p-6">

        <p className="text-cyan-400 text-sm mb-3">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">

          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="
              px-3
              py-1

              rounded-full

              bg-white/5

              border
              border-white/10

              text-xs
              "
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex justify-between items-center">

          <span className="text-violet-400">
            {project.metrics}
          </span>

          <div className="flex gap-4">

            <a href={project.github}>
              GitHub
            </a>

            <a href={project.demo}>
              Demo
            </a>

          </div>

        </div>

      </div>
    </motion.div>
  );
}