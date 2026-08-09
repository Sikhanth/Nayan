import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";

const Menubar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Side Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 z-50 h-screen w-72 bg-[#FCF9F3] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-xl font-bold text-[#5A3E2B]">Nayan</h2>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              The Eye Guardian
            </p>
          </div>

          <button onClick={onClose}>
            <HiOutlineX className="text-3xl text-[#5A3E2B]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 text-lg">
          <Link to="/" onClick={onClose} className="py-3 hover:text-[#8B684A]">
            Home
          </Link>

          <Link
            to="/whynayan"
            onClick={onClose}
            className="py-3 hover:text-[#8B684A]"
          >
            Why Nayan
          </Link>

          <Link
            to="/howitworks"
            onClick={onClose}
            className="py-3 hover:text-[#8B684A]"
          >
            How It Works
          </Link>

          <Link
            to="/faq"
            onClick={onClose}
            className="py-3 hover:text-[#8B684A]"
          >
            FAQ
          </Link>

          <Link
            to="/dashboard"
            onClick={onClose}
            className="py-3 hover:text-[#8B684A]"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            onClick={onClose}
            className="mt-6 rounded-xl bg-[#5A3E2B] py-3 text-center font-semibold text-white transition hover:bg-[#8B684A]"
          >
            Login
          </Link>
        </nav>
      </motion.div>
    </>
  );
};

export default Menubar;