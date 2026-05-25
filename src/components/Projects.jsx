import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          desc={item.desc}
          link={item.link}
        />
      ))}
    </div>
  );
}
