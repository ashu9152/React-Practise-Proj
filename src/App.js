import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactMeSection from "./components/ContactMeSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PortFolioCard from "./components/PortFolioCard";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PortFolioCard />
      <AboutSection />
      <ContactMeSection />
      <FooterSection />
    </>
  );
}

export default App;
