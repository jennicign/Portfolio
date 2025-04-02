// import { NavLink } from "react-router-dom";
// import PlaceholderHero from '../assets/placeholder_hero_background.jpg'
import WindowSection from "../components/WindowSection";

const fullName = 'Jennifer Ignacio';
const personalQuote = 'I enjoy solving problems — especially the ones that try to stay hidden.';
const professionalSummary = `
I'm a data-minded software developer based in the NJ/NYC metro area. I come from a background in public health, where I developed a sharp eye for detail, a deep respect for systems that serve people, and a problem-solver’s mindset rooted in empathy. In my current role, I work with financial data – helping make sense of messy numbers and complex vendor data to guide the best course of action. I often find myself thinking about how to build tools that make the whole process feel cleaner, more intuitive, and less overwhelming.

Whether I'm writing a SQL query, debugging a frontend component, or just quietly noticing a pattern others missed, I approach my work the way I grew up approaching puzzles: with curiosity, focus, and a quiet kind of joy. I'm still early in my career, but I bring depth to every role by asking thoughtful questions and genuinely wanting to make things better — not just more efficient, but more seamlessly impactful.
`;

const Home = () => {
  return (
    <main id ="main-container">
      <section className="home-hero home-subsection">
        <WindowSection title="Welcome to My Portfolio!">
        <h2 className="text-2xl font-semibold mb-2">Hi, I’m {fullName}</h2>
        <p className="mb-2 italic">{personalQuote}</p>
        <p className="mb-4 whitespace-pre-line">{professionalSummary}</p>
        <a
          href="#contact"
          className="inline-block border border-black px-3 py-1 bg-roseQuartz font-pixel text-black hover:bg-serenity hover:text-white transition"
        >
          Contact Me
        </a>
        </WindowSection>

        <WindowSection title="Projects">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <p className="mb-2">
          I’ve worked on multiple projects that showcase my skills through
          real-life examples. Each project includes a short description and
          links to the code.
        </p>
        <a
          href="#projects"
          className="inline-block border border-black px-3 py-1 bg-serenity font-pixel text-white hover:bg-roseQuartz hover:text-black transition"
        >
          View Projects
        </a>
      </WindowSection>

      <WindowSection title="About">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="mb-2">
          Learn more about my journey, interests, and why I care about building
          accessible, elegant digital tools that actually *help* people.
        </p>
        <a
          href="#about"
          className="inline-block border border-black px-3 py-1 bg-serenity font-pixel text-white hover:bg-roseQuartz hover:text-black transition"
        >
          About Me
        </a>
      </WindowSection>
      </section>
    </main>
  )
}

export default Home