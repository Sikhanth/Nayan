import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Contact from "../components/home/Contact";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;