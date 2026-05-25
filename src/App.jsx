import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

import Todo from "./pages/Todo";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const { darkMode } = useContext(ThemeContext);

  const skills = [
    "C Language",
    "C++ Language",
    "Java Language",
    "JavaScript Language",
    "HTML",
    "CSS",
    "Verilog",
    "DBMS",
    "REACT.JS",
    "Open source",
  ];

  const projects = [
    {
      title: "Currency Converter",
      desc: "Made using HTML CSS JS",
      link: "https://github.com/harendra-godara/CURRENCY_CONVERTOR",
    },

    {
      title: "Portfolio Website",
      desc: "Made using React",
      link: "https://github.com/harendra-godara/CURRENCY_CONVERTOR",
    },

    {
      title: "rock_paper_scissors",
      desc: "Made using Javascript",
      link: "https://github.com/harendra-godara/rock_paper_scissors",
    },

    {
      title: "PrcessorGuru",
      desc: "Made using Html,css,javascript",
      link: "https://github.com/harendra-godara/PrcessorGuru",
    },

    {
      title: "tic_tac_toe",
      desc: "Made using Javascript",
      link: "https://github.com/harendra-godara/tic_tac_toe",
    },
    {
      title: "tutortrade",
      desc: "Made using Typescript",
      link: "https://github.com/harendra-godara/tutortrade",
    },
  ];

  const socials = ["GitHub", "LinkedIn", "Twitter", "Instagram", "WhatsApp"];

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout socials={socials} />}>
            <Route
              index
              element={<Home skills={skills} projects={projects} />}
            />

            <Route path="about" element={<About />} />

            <Route path="projects" element={<Projects projects={projects} />} />

            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            <Route path="todo" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
