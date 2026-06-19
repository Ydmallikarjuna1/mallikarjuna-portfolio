"use client";

import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Certifications() {
  return (
    <Reveal>
    <section
      id="certifications"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="text-center mb-20">

          <p className="text-cyan-400 mb-4">
            CERTIFICATIONS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Continuous Learning
            <br />
            and Professional Growth
          </h2>

        </div>

        <div className="space-y-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-cyan-400 mb-2">
                    {cert.year}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {cert.title}
                  </h3>

                </div>

                <div className="mt-4 md:mt-0">

                  <span
                    className="
                    px-4
                    py-2

                    rounded-full

                    bg-violet-500/10

                    border
                    border-violet-500/20
                    "
                  >
                    {cert.issuer}
                  </span>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
    </Reveal>
  );
}