import { FaGithub } from "react-icons/fa6";
import WindowLarge from "../components/WindowLarge";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Weather App - Dew You Need a Jacket?',
    description: 'A simple weather app that uses the OpenWeatherMap API to fetch and display weather data for a given location.',
    repositoryLink: 'https://github.com/jennicign/P2T_Weather_App.git',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Axios', 'OpenWeatherMap API', 'Vite'],
    image: '/project-images/weatherapp.png',
  },
  {
    title: 'Full Stack Food Delivery App – “Nomi”',
    description: 'Designed responsive food ordering experience that allows users to browse menus, filter options, and place mock orders — built with a modern MERN stack and styled for a seamless UI/UX.',
    repositoryLink: 'https://github.com/jennicign/P2T_capstone_nomi.git',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', "Express", 'MongoDB', 'Mongoose', 'Axios', 'Vite'],
    image: '/project-images/WIP.png',
  },
  {
    title: 'Email Client Layout - Visual Mockup',
    description: 'Coded a pixel-perfect mockup of an email client using pure HTML and CSS. Simulates inbox UI with styled sidebar, message preview, and hover states',
    repositoryLink: 'https://github.com/jennicign/P2T_CSS_Project.git',
    tags: ['HTML', 'CSS', 'Flexbox', 'UI Mockup'],
    image: '/project-images/css.png',
  },
  {
    title: 'Beats By Dre Consumer Insights Capstone',
    description: 'Developed ETL pipelines to automate data extraction and transformation, performed sentiment analysis on social media data, and presented findings to executives.',
    repositoryLink: 'https://colab.research.google.com/drive/1ST3TRMbpzCQCIHo-_eKn7crzCD6ZCFsj?usp=sharing',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib', 'TextBlob', 'Gemini AI API','Oxylabs Api', 'Sentiment Analysis'],
    image: '/project-images/beats.png',
  },
  {
    title: 'Weather Data and ML Models',
    description: 'Built predictive ML models using weather station data to classify "pleasant" days, exploring spatial patterns and evaluating algorithms like KNN, decision trees, and CNNs.',
    repositoryLink: 'https://github.com/jennicign/ClimateWins-Python-Machine-Learning.git',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Keras', 'Matplotlib', 'CNN', 'Random Forests','KNN', 'Feature Importance'],
    image: '/project-images/weatherml.png',
  },
  {
    title: 'Rockbuster Streaming Analysis',
    description: 'Analyzed a simulated movie rental database to uncover market expansion and customer trends using SQL, Excel visuals, and Tableau dashboards; created a full data dictionary with reports for technical colleagues.',
    repositoryLink: 'https://github.com/jennicign/Rockbuster-Stealth-SQL.git',
    tags: ['SQL', 'PostgreSQL', 'Excel', 'Tableau', 'Data Dictionary'],
    image: '/project-images/rockbuster.png',
  },
];

const Projects = () => {
  return (
    // <main className="projects-container">
    //   {myProjects.map((project) => (
    //     <section key={project.title} className="project-item border border-2 rounded-lg">
    //       <section className="project-image-container">
    //         <FaGithub />
    //       </section>
    //       <h2 className="text-xl font-semibold">{project.title}</h2>
    //       <p className="text-lg">{project.description}</p>
    //       <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

    //     </section>
    //   ))}
    // </main>
    <section id="projects" className="px-4 py-10">
      <WindowLarge title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-200 p-4 flex flex-col justify-between transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
          >
            {/* Clickable image */}
            <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-t-lg object-cover w-full h-40"
              />
            </a>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-serenity text-white text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button(s) */}
              <div className="text-right">
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white font-pixel text-sm px-3 py-2 rounded hover:bg-skyBlue hover:text-black transition"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </WindowLarge>
    </section>
  );
};

export default Projects