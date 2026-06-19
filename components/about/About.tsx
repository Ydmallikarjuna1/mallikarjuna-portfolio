"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid lg:grid-cols-2 gap-20">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-cyan-400 mb-4">
                ABOUT ME
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Engineering Solutions
                <br />
                at the Intersection
                <br />
                of AI and Software.
              </h2>

              <div className="space-y-6 text-zinc-400 leading-relaxed">

                <p>
                  I'm a Computer Science student at
                  Chandigarh University focused on
                  Data Science, Machine Learning,
                  and Full Stack Development.
                </p>

                <p>
                  My journey began with curiosity about
                  how software systems work and evolved
                  into building intelligent applications
                  powered by machine learning.
                </p>

                <p>
                  Through technical projects,
                  certifications, and research,
                  I've developed technical skills and
                  a problem-solving mindset.
                </p>

                <p>
                  Today, I'm focused on AI research,
                  scalable software systems,
                  and creating technology that
                  solves meaningful problems.
                </p>

              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="relative">

                <div
                  className="
                  absolute
                  left-4
                  top-0
                  bottom-0
                  w-[2px]
                  bg-white/10
                  "
                />

                <div className="space-y-10">

                  {timeline.map((item) => (
                    <div
                      key={item.title}
                      className="relative pl-14"
                    >

                      <div
                        className="
                        absolute
                        left-0
                        top-2

                        w-8
                        h-8

                        rounded-full

                        bg-violet-600

                        border
                        border-white/20
                        "
                      />

                      <p className="text-cyan-400 text-sm mb-1">
                        {item.year}
                      </p>

                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-zinc-400">
                        {item.description}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}