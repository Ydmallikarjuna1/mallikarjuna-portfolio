"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-20">

          <p className="text-cyan-400 mb-4">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Engineering Solutions
            <br />
            Through Technology
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}