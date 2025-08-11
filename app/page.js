import Image from "next/image";
import Navbar from "./Components/UI/Navbar";
import Hero from "./Components/UI/Hero";
import Portfolio from "./Components/UI/Portfolio";
import Packages from "./Components/UI/Packages";
import Services from "./Components/UI/Services";
import Clients from "./Components/UI/Clients";
import Footer from "./Components/UI/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <Hero/>
      <Portfolio/>
      <Packages/>
      <Services/>
      <Clients/>
      <Footer/>
    </div>
  );
}
