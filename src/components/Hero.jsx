import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import { Link } from "react-router-dom";

export default function Hero({ skills, projects }) {
  return (
    <>
      <div className="hero">
        <h1 id="mainHeading">Hello, I'm Harendra Godara</h1>

        <p>I am learning React and Web Development.</p>

        <Link to="/contact" className="btn" style={{ textDecoration: "none" }}>
          Contact Me
        </Link>
        <About />

        <div className="skills">
          <Skills skills={skills} />
        </div>
        {/* <div className="projects"> */}
        <Projects projects={projects} />
        {/* </div> */}
      </div>
    </>
  );
}
