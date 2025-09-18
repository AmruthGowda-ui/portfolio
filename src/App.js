import React from "react";
import "./App.css";
import myPhoto from "./assets/myPhoto.png"; // <-- Save your uploaded photo as src/assets/myPhoto.png

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">Amruth Portfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h2>
            Hello, I'm <span>Amruth</span>
          </h2>
          <p>Full Stack Java Developer | Aspiring Software Engineer 🚀</p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </button>
        </div>
        <div className="hero-img">
          <img src={myPhoto} alt="Amruth profile" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">C</div>
          <div className="skill-card">HTML/CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Spring</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Smart Glasses for Blind People</h3>
            <p>
              IoT-enabled smart glasses with obstacle detection, GPS tracking,
              and emergency alerts.
            </p>
            <p>
              <strong>Tech:</strong> Arduino, NodeMCU, Ultrasonic Sensor, GPS,
              Blynk
            </p>
          </div>
          <div className="project-card">
            <h3>Event Management System</h3>
            <p>
              Java + MySQL based web app for event creation, registration, and
              scheduling.
            </p>
            <p>
              <strong>Tech:</strong> Java, MySQL, HTML, CSS, JS
            </p>
          </div>
          <div className="project-card">
            <h3>Student Management System</h3>
            <p>Hostel registration and database operations system.</p>
            <p>
              <strong>Tech:</strong> Java, MySQL
            </p>
          </div>
          <div className="project-card">
            <h3>Typing Speed Test</h3>
            <p>
              React + Java backend project to test typing speed with real-time
              results.
            </p>
            <p>
              <strong>Tech:</strong> React, Java, MySQL
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>Tap EdTech Pvt Ltd (Feb 2025 – May 2025)</h3>
          <p>Full Stack Java Developer Intern | Bangalore, Karnataka</p>
          <ul>
            <li>
              Developed full-stack applications using Core Java, Servlets, JSP,
              Spring, and Hibernate.
            </li>
            <li>
              Designed responsive front-end interfaces and integrated them with
              backend services.
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Thaniya Technologies (Oct 2023 – Nov 2023)</h3>
          <p>Full Stack Development Intern | Mangalore, Karnataka</p>
          <ul>
            <li>Built responsive websites using HTML, CSS, and JavaScript.</li>
            <li>Applied UI/UX principles for better usability and accessibility.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:amrutamrut846@gmail.com">
            amrutamrut846@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +91 8317397347
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/amruth-gowda-b9b42423a"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/amruth-gowda
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/AmruthGowda-ui"
            target="_blank"
            rel="noreferrer"
          >
            github.com/AmruthGowda-ui
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Amruth | Built with React ❤️</p>
      </footer>
    </div>
  );
}

export default App;
