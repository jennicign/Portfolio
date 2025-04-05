// import { NavLink } from "react-router-dom";
// import PlaceholderHero from '../assets/placeholder_hero_background.jpg'
import WindowSection from "../components/WindowSection";
import Headshot from '../assets/headshot 2.jpeg';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

const fullName = 'Jennifer Ignacio';


const Home = () => {
  return (
    <main id ="main-container">
      
        <section className="flex flex-col md:flex-row items-start md:items-center justify-center px-6 py-24 md:py-36 gap-8 md:gap-12 max-w-[1100px] mx-auto">

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <img 
              src={Headshot}
              alt="Jennifer Ignacio Headshot" 
              className="w-[13rem] h-[13rem] rounded-full object-cover border-2 border-black"
            />
          </div>

          <div className="text-left flex-1 min-w-[300px] max-w-[600px] overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">Hi I’m Jenn</h2>
            <br />
            <TypeAnimation
              sequence={[
                'Full-Stack Engineer 🖥️ ', 2000,
                'Data Analyst 📈🔍', 2000,
                'Part-Time Debugger, Full-Time Problem Solver 🐛🛠️', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-lg md:text-xl font-semibold text-gridBlack"
              repeat={Infinity}
            />
            <br />
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="hover:text-serenity transition" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-serenity transition" />
              </a>
              <a href="https://public.tableau.com/app/profile/yourusername" target="_blank" rel="noopener noreferrer">
                <SiTableau size={24} className="hover:text-serenity transition" />
              </a>
            </div>
            
            {/* <a
              href="#contact"
              className="inline-block border border-black px-4 py-2 mt-4 bg-black text-white font-pixel hover:bg-roseQuartz hover:text-black transition"
            >
              Contact Me
            </a> */}
          </div>
            

          {/* <p className="text-md md:text-lg italic text-gray-600 max-w-xl">{personalQuote}</p> */}
          {/* <p className="text-base md:text-lg text-black max-w-2xl whitespace-pre-line">{professionalSummary}</p> */}

          
        </section>

      
      
    </main>
  )
}

export default Home