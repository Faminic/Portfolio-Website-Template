import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bgColor">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4 mb-16">
        <HeroSection/>
      </div>
      <div className="container mx-auto px-12 py-4">
        <Education/>
      </div>
      <div className="container mx-auto px-12">
        <WorkExperience/>
      </div>
      <div className="container mx-auto px-12">
        <Projects/>
      </div>
      <div className="container mx-auto px-12">
        <Skills/>
      </div>
      <div className="container mx-auto px-12">
        <Certifications/>
      </div>
      <div className="container mx-auto px-12 mb-4">
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
