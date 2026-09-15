import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/videos/eye_blink_video.mp4";
function Hero() {
  const navigate = useNavigate();
  const handleStartMonitoring = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };
  return (
    <section className="relative min-h-[100svh] overflow-hidden lg:h-screen">
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
      {/* Soft bottom gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,14,10,0.85) 0%, rgba(20,14,10,0.35) 32%, transparent 60%)",
        }}
      />
      {/* Content */}
      <div className="relative flex min-h-[100svh] items-end lg:h-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-xl px-5 pb-12 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#A99077] sm:text-sm sm:tracking-[0.4em]">
            Nayan — The Eye Guard
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            See more.
            <br />
            Strain less.
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#E3D5C8] sm:text-base">
            Real-time blink and eye-strain detection, built to protect your
            eyes during long hours on screen.
          </p>
          <button
            onClick={handleStartMonitoring}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#3B3933] px-6 py-3.5 text-base font-semibold text-[#FCF9F3] transition hover:bg-[#4A2A1F] sm:px-7"
          >
            Start Monitoring
          </button>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;