import Project from "./Project";

// Component to display a list of projects
const Projects = ({ projects }) => {
  return (
    // Container for projects with zoom-in animation
    <div className="portfolio__projects" data-aos="zoom-in">
      {/* Mapping through projects array and rendering each project */}
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
