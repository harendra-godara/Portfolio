# 🚀 Harendra — Personal Portfolio

A modern, responsive **React portfolio website** with dark/light mode, project showcase, GitHub profile viewer, contact form, and more.

---

## 📸 Preview

> Live Demo: [your-portfolio-link.vercel.app](#) &nbsp;|&nbsp; GitHub: [github.com/username/portfolio](#)

---

## ✨ Features

- 🌗 **Dark / Light Mode** — smooth theme toggle, persisted across pages
- 📱 **Fully Responsive** — mobile hamburger menu, adaptive layout
- 💼 **Projects Section** — project cards with direct GitHub links
- 🐙 **GitHub Profile Viewer** — search any GitHub user and view their profile
- 📬 **Contact Form** — form validation with success/error feedback
- 🧩 **Skills Section** — highlight your tech stack
- 📄 **About Page** — personal intro and background
- ✅ **Todo App** — bonus interactive page

---

## 🛠️ Tech Stack

| Technology           | Usage                                         |
| -------------------- | --------------------------------------------- |
| **React**            | UI framework                                  |
| **React Router DOM** | Client-side routing                           |
| **Context API**      | Global dark/light theme state                 |
| **CSS3**             | Custom styling, animations, responsive design |
| **Google Fonts**     | Plus Jakarta Sans + Fraunces                  |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with theme toggle & mobile menu
│   │   └── ProjectCard.jsx     # Reusable project card with GitHub link
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light mode global context
│   ├── pages/
│   │   ├── Home.jsx            # Hero + Skills + Projects
│   │   ├── About.jsx           # About me page
│   │   ├── Projects.jsx        # All projects page
│   │   ├── Contact.jsx         # Contact form
│   │   ├── GithubCard.jsx      # GitHub profile search
│   │   └── Todo.jsx            # Todo app
│   ├── App.jsx                 # Routes setup
│   ├── index.css               # Global styles
│   └── main.jsx
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/username/portfolio.git

# 2. Go into the project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

App will run at `http://localhost:5173`

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push dist/ contents to gh-pages branch
```

---

## 🔧 Customization

### Add your own projects

In `Home.jsx` or `Projects.jsx`, update the ProjectCard props:

```jsx
<ProjectCard
  title="Project Name"
  desc="Short description of what it does."
  link="https://github.com/username/repo"
/>
```

### Update your skills

Find the `.skills-container` section and add/remove `<p>` tags:

```jsx
<p>React</p>
<p>Node.js</p>
<p>Your Skill</p>
```

### Change theme colors

All colors are CSS variables in `index.css`:

```css
:root {
  --clr-primary: #1a56db; /* Change to your brand color */
  --clr-accent: #f59e0b;
}
```

---

## 📬 Contact

**Harendra**

- GitHub: [@harendra-godara](https://github.com/harendra-godara)
- Email: harendragodara880@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by <strong>Harendra</strong>
</div>
