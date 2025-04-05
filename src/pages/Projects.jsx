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
    title: 'Project 1',
    description: 'Description of project 1',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
  },
  {
    title: 'Project 6',
    description: 'Description of project 6',
    repositoryLink: 'Link to the GitHub repository',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'Link to the project image',
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