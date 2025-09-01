import Navbar from "../components/Navbar";
import HomeHero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
//import AboutImg from "../components/assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
