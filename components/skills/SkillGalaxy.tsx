"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillGalaxy() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-20">

          <p className="text-cyan-400 mb-4">
            SKILLS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Technologies I Use
            <br />
            To Build Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="
              rounded-3xl

              border
              border-white/10

              bg-white/5

              backdrop-blur-xl

              p-8
              "
            >

              <h3 className="text-2xl font-bold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="
                    px-4
                    py-2

                    rounded-full

                    bg-violet-500/10

                    border
                    border-violet-500/20

                    text-sm

                    cursor-pointer
                    "
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}