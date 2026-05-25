import "../index.css";
export default function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((item, index) => (
          <p key={index}> {item}</p>
        ))}
      </div>
    </div>
  );
}
