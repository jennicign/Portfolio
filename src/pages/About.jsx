import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Replace with your first name';
const jobTitle = 'Replace with your title';
const company = 'Replace with your company name';
const mainDuty = 'Replace with your main duty';
const jobLocation = 'Replace with your job location';
const briefJobDescription = 'Replace with a brief description of your job';
const careerObjective = 'Replace with your career objective';
const personalLife = 'Replace with a brief description of your personal life';

const personalQuote = 'I enjoy solving problems — especially the ones that try to stay hidden.';
const professionalSummary = `
I'm a data-minded software developer based in the NJ/NYC metro area. I come from a background in public health, where I developed a sharp eye for detail, a deep respect for systems that serve people, and a problem-solver’s mindset rooted in empathy. In my current role, I work with financial data – helping make sense of messy numbers and complex vendor data to guide the best course of action. I often find myself thinking about how to build tools that make the whole process feel cleaner, more intuitive, and less overwhelming.

Whether I'm writing a SQL query, debugging a frontend component, or just quietly noticing a pattern others missed, I approach my work the way I grew up approaching puzzles: with curiosity, focus, and a quiet kind of joy. I'm still early in my career, but I bring depth to every role by asking thoughtful questions and genuinely wanting to make things better — not just more efficient, but more seamlessly impactful.
`;

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;