import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const menus = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Projects",
      path: "/Projects",
    },

    {
      name: "Contact",
      path: "/Contact",
    },
    // {
    //   name: "Todo",
    //   path: "/todo",
    // },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={darkMode ? "nav-dark" : "nav-light"}>
      <h2>Harendra</h2>

      <ul className={showMenu ? "show-menu" : ""}>
        {menus.map((item, index) => (
          <li key={index}>
            <Link id="link" to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-buttons">
        <button className="btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button className="btn menu-btn" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
