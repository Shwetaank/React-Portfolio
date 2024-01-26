import React, { useState } from "react";
import data from "./data";

import "./portfolio.css";
import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  const filterProjectHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );

    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        "🚀 Explore the future of software innovation with our latest project!
        🔥 Revolutionizing tech and design, it's a journey into limitless
        possibilities. Don't miss out – dive in below! 🌐✨"
      </p>
      <div className="container portfolio__container">
        <ProjectCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
