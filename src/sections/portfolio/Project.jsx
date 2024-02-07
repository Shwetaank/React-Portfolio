import Card from "./../../components/card";
import { RxGithubLogo } from "react-icons/rx";
import { MdLiveTv } from "react-icons/md";

// Component for displaying project details
const Project = ({ project }) => {
  return (
    <>
      <Card className="portfolio__project">
        {/* Project image */}
        <div className="portfolio__project-image" data-aos="flip-right">
          <img src={project.image} alt="Portfolio Project Img" />
        </div>
        {/* Horizontal line */}
        <hr className="portfolio__project-hr" />
        {/* Project title */}
        <h4 data-aos="zoom-in">{project.title}</h4>
        {/* Technologies used */}
        <h6>
          <strong>Tech :-- </strong> {project.tech}
        </h6>
        {/* Project description */}
        <p>{project.desc}</p>
        {/* Project call-to-action buttons */}
        <div className="portfolio__project-cta">
          {/* Demo link */}
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLiveTv className="btn__icon" /> Demo Link
          </a>
          {/* GitHub link */}
          <a
            href={project.github}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo className="btn__icon" /> GitHub Link
          </a>
        </div>
      </Card>
    </>
  );
};

export default Project;
