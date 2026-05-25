export default function ProjectCard(props) {
  return (
    <div className="project">
      <h3>{props.title}</h3>

      <p>{props.desc}</p>

      <button className="btn" onClick={() => window.open(props.link, "_blank")}>
        GitHub
      </button>
    </div>
  );
}
