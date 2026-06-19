import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}

          <div>
            <p className="text-cyan-400 mb-4">
              CONTACT
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let's Build
              <br />
              Something Impactful.
            </h2>

            <p className="text-zinc-400 text-lg mb-10">
              I'm always interested in discussing AI,
              Machine Learning, Full Stack Development,
              Research Projects, Internships, and innovative
              technology solutions.
            </p>

            <div className="space-y-4">

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/yaravampalli-dharmapalappagari-mallikarjuna/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                hover:bg-white/10
                transition-all
                "
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/Ydmallikarjuna1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                hover:bg-white/10
                transition-all
                "
              >
               <FaGithub size={20} />
                GitHub
              </a>

              {/* Email */}

              <a
                href="mailto:ydmallikarjuna0@gmail.com"
                className="
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/5
                p-4
                hover:bg-white/10
                transition-all
                "
              >
                <MdEmail size={20} />
                ydmallikarjuna0@gmail.com
              </a>


            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            "
          >
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                rounded-xl
                bg-black/20
                border border-white/10
                px-4 py-3
                outline-none
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                rounded-xl
                bg-black/20
                border border-white/10
                px-4 py-3
                outline-none
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                w-full
                rounded-xl
                bg-black/20
                border border-white/10
                px-4 py-3
                outline-none
                "
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="
                w-full
                rounded-xl
                bg-black/20
                border border-white/10
                px-4 py-3
                outline-none
                "
              />

              <button
                type="submit"
                className="
                w-full
                rounded-xl
                bg-violet-600
                py-3
                hover:bg-violet-500
                transition-all
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
}