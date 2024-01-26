import Card from "./../../components/card";
import { RxGithubLogo } from "react-icons/rx";
import { MdLiveTv } from "react-icons/md";

const Project = ({ project }) => {
  return (
    <>
      <Card className="portfolio__project">
        <div className="portfolio__project-image">
          <img src={project.image} alt="Portfolio Project Img" />
        </div>
        <h4>{project.title}</h4>
        <h6>
          <strong>Tech Used:</strong> {project.tech}
        </h6>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLiveTv /> Demo Link
          </a>
          <a
            href={project.github}
            className="btn sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo /> GitHub Link
          </a>
        </div>
      </Card>
    </>
  );
};

export default Project;
