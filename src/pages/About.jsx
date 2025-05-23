import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';
import WindowSmall from '../components/WindowSmall';
import { FaJs, FaPython, FaGitAlt } from "react-icons/fa";



const professionalSummary = `
I'm a software developer with a focus on data and human-centered systems. Based in the NJ/NYC metro area, I come from a background in public health — where I developed a deep respect for systems that serve people and a problem-solving mindset rooted in empathy.

Now working with financial data,  I work to bring clarity to disorganized systems and surface insights that support clear direction and help drive meaningful progress. I’m especially interested in building tools that make complex processes feel cleaner, more intuitive, and less overwhelming.

Whether I’m writing a query, debugging a frontend component, or noticing a pattern others missed, I approach my work with curiosity, focus, and a quiet joy. I'm still early in my career, but I bring depth to every role by asking thoughtful questions and genuinely wanting to make things better — not just more efficient, but more seamlessly impactful.
`;

const About = () => {
  return (

<main className="px-6 py-16 w-[75vw] max-w-[1920px] mx-auto space-y-16">

{/* Flex container for Expertise & About Me */}
<section className="flex flex-col md:flex-row gap-10">
  {/* Expertise Section */}
  <div className="w-full md:w-[40%]">
  <WindowSmall title="Expertise">
  <div className="space-y-12 text-[13px] font-mono pt-6 pb-8 px-4">

    {/* Full Stack Web Development */}
    <div>
      <h3 className="text-base font-bold flex items-center gap-2">
        <FaJs className="text-yellow-500 text-3xl" />
        Full Stack Development
      </h3>
      <p className="mt-2 ml-6 leading-relaxed">
        I build responsive web apps from scratch using modern technologies and a solid understanding of front-end/back-end development.
      </p>
      <div className="flex flex-wrap gap-2 mt-3 ml-6">
        {["JavaScript", "React", "Node.js", "HTML5", "CSS3", "Axios", "Vite"].map(skill => (
          <span
            key={skill}
            className="px-2.5 py-0.5 rounded-full bg-roseQuartz text-black text-xs font-medium shadow-sm transition-transform duration-150 hover:shadow-md hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Data Analytics & Visualization */}
    <div>
      <h3 className="text-base font-bold flex items-center gap-2">
        <FaPython className="text-blue-400 text-3xl" />
        Data Analytics & Visualization
      </h3>
      <p className="mt-2 ml-6 leading-relaxed">
        I analyze and visualize data using Python libraries and query languages, focusing on clarity, insights, and usability.
      </p>
      <div className="flex flex-wrap gap-2 mt-3 ml-6">
        {[
          "Python", "Pandas", "NumPy", "SQL", "PostgreSQL",
          "Tableau", "Power BI", "Business Objects", "Excel"
        ].map(skill => (
          <span
            key={skill}
            className="px-2.5 py-0.5 rounded-full bg-roseQuartz text-black text-xs font-medium shadow-sm transition-transform duration-150 hover:shadow-md hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tools & Technologies */}
    <div>
      <h3 className="text-base font-bold flex items-center gap-2">
        <FaGitAlt className="text-green-500 text-3xl" />
        Tools & Technologies
      </h3>
      <p className="mt-2 ml-6 leading-relaxed">
        I’m comfortable working with version control, APIs, and production-grade data workflows.
      </p>
      <div className="flex flex-wrap gap-2 mt-3 ml-6">
        {[
          "Git","GitHub", "REST APIs", "MongoDB", "Figma",
        ].map(skill => (
          <span
            key={skill}
            className="px-2.5 py-0.5 rounded-full bg-roseQuartz text-black text-xs font-medium shadow-sm transition-transform duration-150 hover:shadow-md hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</WindowSmall>
  </div>

  {/* About Me & Timeline Section */}
  <div className="w-full md:w-[60%] space-y-10">
    {/* About Me */}
    <section className="text-left ml-4r">
      <h2 className="text-3xl md:text-4xl font-bold font-pixel mb-6 text-center">Professional Snapshot</h2>
      <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
        {professionalSummary}
      </p>
    </section>

    {/* Timeline Section */}
    <section className="w-full flex justify-center relative">
      <div className="w-full h-1 bg-black relative">
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  </div>
</section>


</main>
  )
}
 export default About;