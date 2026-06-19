"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroStats from "./HeroStats";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-violet-500/10
        blur-[150px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[120px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div className="flex justify-center">

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-violet-500
                to-cyan-500
                blur-3xl
                opacity-20
                "
              />

              {/* Profile Card */}

              <div
                className="
                relative
                w-80
                h-96
                md:w-[360px]
                md:h-[430px]

                rounded-3xl

                overflow-hidden

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                shadow-2xl
                "
              >
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Availability Badge */}

              <div
                className="
                absolute
                bottom-4
                left-4

                px-4
                py-2

                rounded-full

                bg-black/50

                backdrop-blur-md

                border
                border-white/10
                "
              >
                <div className="flex items-center gap-2">

                  <div
                    className="
                    w-2
                    h-2

                    rounded-full

                    bg-green-500

                    animate-pulse
                    "
                  />

                  <span className="text-sm text-white">
                    Open to Opportunities
                  </span>

                </div>
              </div>

            </motion.div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <p className="text-cyan-400 font-medium mb-4">
              AI/ML Engineer • Full Stack Developer
            </p>

            {/* Availability Pill */}

            <div
              className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              border
              border-green-500/20

              bg-green-500/10

              text-green-400

              text-sm

              mb-6
              "
            >
              <div
                className="
                w-2
                h-2

                rounded-full

                bg-green-400

                animate-pulse
                "
              />

              Open to Internship Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building Intelligent
              <br />
              Digital Experiences
            </h1>

            {/* Animated Roles */}

            <div className="text-xl md:text-2xl text-violet-400 h-12 mb-8">

              <TypeAnimation
                sequence={[
                  "AI/ML Engineer",
                  2000,

                  "Full Stack Developer",
                  2000,

                  "Deep Learning Enthusiast",
                  2000,

                  "Research-Oriented Builder",
                  2000,

                  "Problem Solver",
                  2000,
                ]}
                repeat={Infinity}
              />

            </div>

            {/* Description */}

            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
              Building intelligent applications that combine machine
              learning, scalable backend systems, and modern user
              experiences. Passionate about AI research, full-stack
              development, and solving real-world problems through
              technology.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-4 mb-10">

              <MagneticButton
                className="
                px-7
                py-3

                rounded-xl

                bg-violet-600

                hover:bg-violet-500

                transition-all

                hover:scale-105
                "
              >
                View Projects
              </MagneticButton>

              <MagneticButton
                className="
                px-7
                py-3

                rounded-xl

                border
                border-white/10

                hover:bg-white/5

                transition-all

                hover:scale-105
                "
              >
                Download Resume
              </MagneticButton>

            </div>

            {/* Trust Badges */}

            <div className="flex flex-wrap gap-4 mb-10">

              <span
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
                Chandigarh University
              </span>

              <span
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
                Oracle Certified
              </span>

              <span
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
                AI/ML Research
              </span>

            </div>

            {/* Hero Stats */}

            <HeroStats />

          </div>

        </div>

        {/* Scroll Indicator */}

        <div className="flex justify-center mt-20">

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
            w-7
            h-12

            border
            border-white/20

            rounded-full

            flex
            justify-center
            "
          >
            <div
              className="
              w-1
              h-3

              bg-white/50

              rounded-full

              mt-2
              "
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}