import Navbar from "../components/Navbar";
import HomeHero from "../components/Hero";
//import AboutImg from "../components/assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg="https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
