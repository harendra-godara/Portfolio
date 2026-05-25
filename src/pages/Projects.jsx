import ProjectCard from "../components/ProjectCard";

export default function Projects({ projects }) {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      <div className="projects-container">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
