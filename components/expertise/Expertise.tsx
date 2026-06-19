"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { expertise } from "@/data/expertise";
import Reveal from "@/components/ui/Reveal";

export default function Expertise() {
  return (
    <Reveal>
    <section
      id="expertise"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-20">

          <p className="text-cyan-400 mb-4">
            EXPERTISE
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Building Intelligent
            <br />
            Systems End-to-End
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >

              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
              >
                <div
                  className="
                  h-full

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/5

                  backdrop-blur-xl

                  p-8

                  hover:border-violet-500/30

                  transition-all
                  "
                >

                  <p className="text-violet-400 text-sm mb-4">
                    {item.number}
                  </p>

                  <h3 className="text-2xl font-bold mb-6">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                        px-3
                        py-2

                        rounded-full

                        bg-white/5

                        border
                        border-white/10

                        text-sm
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              </Tilt>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}