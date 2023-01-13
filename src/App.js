import "./App.css";
import AboutSection from "./components/AboutSection";
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
    </>
  );
}

export default App;
