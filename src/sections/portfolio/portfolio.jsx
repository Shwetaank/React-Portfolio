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
    <section id="portfolio" data-aos="fade-in">
      <h2> My Recent Projects</h2>
      <div className="container portfolio__container">
        <p>
          🚀 Dive into the thrilling world of software innovation with our
          latest project! Revolutionizing tech and design, it's a captivating
          journey into <strong>limitless possibilities</strong>. Don't miss out
          – explore below and <strong>discover the magic</strong>! 🌐✨
        </p>
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
