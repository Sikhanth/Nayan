import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/eye_blink_video.mp4";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Soft bottom gradient — just enough for text contrast,
          fully gone by mid-frame so the eye itself stays unobstructed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,14,10,0.85) 0%, rgba(20,14,10,0.35) 32%, transparent 60%)",
        }}
      />

      {/* Content — anchored bottom-left, out of the eye's way */}
      <div className="relative flex h-full items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#A99077]">
            Nayan — The Eye Guard
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl">
            See more.
            <br />
            Strain less.
          </h1>
          <p className="mt-5 max-w-sm leading-7 text-[#E3D5C8]">
            Real-time blink and eye-strain detection, built to protect your
            eyes during long hours on screen.
          </p>

          <a
            href="#features"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3B3933] px-7 py-3.5 text-base font-semibold text-[#FCF9F3] transition hover:bg-[#4A2A1F]"
          >
            Start Monitoring
          </a>
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;