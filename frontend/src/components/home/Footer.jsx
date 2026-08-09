import {
  HiOutlineEnvelope,
} from "react-icons/hi2";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[#947865]/20 bg-[#2A211C]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-bold text-white">
            Nayan
          </h2>

          <p className="mt-2 uppercase tracking-[0.3em] text-[#9C7860]">
            The Eye Guardian
          </p>

          <p className="mt-6 max-w-xl leading-7 text-[#D6C6BA]">
            Helping people build healthier digital habits through
            intelligent eye monitoring powered by computer vision.
          </p>

          {/* Navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#D6C6BA]">
            <a href="#" className="transition hover:text-[#9C7860]">
              Home
            </a>

            <a href="#features" className="transition hover:text-[#9C7860]">
              Features
            </a>

            <a href="#contact" className="transition hover:text-[#9C7860]">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-2xl text-[#D6C6BA]">

            <a
              href="#"
              className="transition hover:text-[#9C7860]"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="transition hover:text-[#9C7860]"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="transition hover:text-[#9C7860]"
            >
              <HiOutlineEnvelope />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-12 w-full border-t border-[#947865]/20 pt-6 text-center text-sm text-[#B8A89C]">
            © 2026 Nayan. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;