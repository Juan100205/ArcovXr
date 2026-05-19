
import './App.css'
import Header from '../Components/Global/Header.tsx'
import Home from '../Components/Home/Home.tsx'
import About_me from '../Components/Home/About_me.tsx'
import Projects from '../Components/Home/Projecs.tsx'
import CaseStudies from '../Components/Home/CaseStudies.tsx'
import Experiences from '../Components/Home/Experiences.tsx'
import Services from '../Components/Home/Services.tsx'
import Footer from '../Components/Global/Footer.tsx'
import { useEffect } from 'react'


function Home_Main() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      }, []);
  return (
    <div className="scroll-smooth"> 
      <Header />

      <div id="Home_Main">
        <Home />
      </div>

      <div id="services">
        <Services/>
      </div>

            <div id="projects">
        <Projects />
      </div>

      <div id="cases">
        <CaseStudies />
      </div>

      <div id="about">
        <About_me />
      </div>


      <div id="experiences">
        <Experiences />
      </div>

    
      <Footer />
    </div>
  );
}


export default Home_Main;
