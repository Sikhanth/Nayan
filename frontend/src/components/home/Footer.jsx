import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="border-t border-[#947865]/20 bg-[#2A211C]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white">Nayan</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#9C7860] sm:text-sm sm:tracking-[0.3em]">
            The Eye Guardian
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#D6C6BA] sm:text-base">
            Helping people build healthier digital habits through intelligent eye
            monitoring powered by computer vision.
          </p>
          {/* Navigation */}
          <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-[#D6C6BA] sm:mt-10 sm:gap-8 sm:text-base">
            <a
              href="#"
              className="rounded-md px-1 py-2 transition hover:text-[#9C7860]"
            >
              Home
            </a>
            <a
              href="#features"
              className="rounded-md px-1 py-2 transition hover:text-[#9C7860]"
            >
              Features
            </a>
            <a
              href="#contact"
              className="rounded-md px-1 py-2 transition hover:text-[#9C7860]"
            >
              Contact
            </a>
          </nav>
          {/* Social Icons */}
          <div className="mt-8 flex gap-4 text-2xl text-[#D6C6BA] sm:mt-10 sm:gap-6">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full transition hover:text-[#9C7860]"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full transition hover:text-[#9C7860]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full transition hover:text-[#9C7860]"
            >
              <HiOutlineEnvelope />
            </a>
          </div>
          {/* Copyright */}
          <div className="mt-10 w-full border-t border-[#947865]/20 pt-6 text-center text-xs text-[#B8A89C] sm:mt-12 sm:text-sm">
            © 2026 Nayan. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
