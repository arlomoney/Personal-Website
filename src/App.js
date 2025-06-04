// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Example projects data
  const projects = [
    {
      id: 1,
      title: "AquaSense",
      description: "App that detects water quality using Arduino sensors and provides real-time data to users, using a buoy.",
      tech: ["C++", "Arduino"],
      impact: "Helped indicate whether the water was safe to swim in at multiple locations in Lake Washington and Lake Sammamish."
    },
    {
      id: 2,
      title: "Botaniq",
      description: "Website for a fine dining vegan restuarant, for a TSA competition.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      impact: "Completed this during my Summer Immersion Program for Girls Who Code, effective.",
      small: "https://botaniq-tsa.vercel.app/"
    }, 
    {
    id: 3,
    title: "Analyzing UEFA Euro Cup 2024 Data",
    description: "This program evaluates UEFA Euro Cup 2024 teams' performance by analyzing match data.",
    tech: ["Python", "Pandas", "Numpy"],
    impact: "Completed this during my Summer Immersion Program for Girls Who Code, effective.",
    small: "https://github.com/arlomoney/Euro-Cup-2024-Team-Analysis"
    },     
    {
      id: 4,
      title: "Personalized Skincare Quiz",
      description: "This program asks the user questions about their skin type, and in the end provides products + advice depending on their responses. This is meant for website implementation.",
      tech: ["JavaScript, HTML, CSS"],
      small: "https://github.com/arlomoney/Personal-Skincare-Quiz"
    },
    {
      id: 5,
      title: "Keirsey Temperament Sorter",
      description: "This program asks the user questions about their personality, and in the end provides a temperament type based on their responses. This is meant for website implementation.",
      tech: ["Java"],
      small: "https://github.com/arlomoney/Keirsey-Temperament-Sorter"
    }, 
    {
      id: 6,
      title: "Cloptim Website",
      description: "Using HTML, CSS, and JS, I worked with a team to create a visually appealing website for this data cloud computing company.",
      tech: ["JavaScript", "HTML", "CSS"],
      small: "https://www.cloptim.com/"
    }, 
    
  ];

  // Example achievements data
  const achievements = [
    {
      id: 1,
      title: "Third Place - Technology Student Association",
      description: "Developed a website that followed the yearly theme with a team of 5."
    },
    {
      id: 2,
      title: "Selected for Girls Who Code Summer Immersion Program",
      description: "Selected for an intensive coding bootcamp, empowering women."
    },
    {
      id: 3,
      title: "Community Impact Award",
      description: "Given by my school. Recognized for developing technology solutions that address local environmental challenges for creating a water quality detector using arduinos."
    }
  ];

  // Handle scroll for the navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>Arlene<span className="accent">Dev</span></h1>
        </div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Arlene</h1>
          <h2>Tech Enthusiast & <span className="typed-text">Future Innovator</span></h2>
          <p>I strive to create technology solutions to make our world better.</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">See My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="shape-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">I'm a 17-year-old developer passionate about using technology as a force for positive change.</p>
            <p>My journey in tech began when I was 14, teaching myself to code through online resources. What started as curiosity quickly evolved into a mission to create solutions for real-world problems.</p>
            <p>I believe that technology, when developed with empathy and purpose, has the power to address some of our most pressing social and environmental challenges.</p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <ul className="skill-tags">
                <li>React</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>UI/UX Design</li>
                <li>Node.js</li>
                <li>Mobile Development</li>
                <li>Data Analysis</li>
                <li>AI/ML Basics</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat">
              <div className="stat-number">8</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Skills</div>
            </div>
            <div className="stat">
              <div className="stat-number">3</div>
              <div className="stat-label">Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <p className="section-intro">Here are some of the more meaningful projects I've completed over the years.</p>
        <div className="project-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="achievements">
        <div className="section-header">
          <h2>Achievements</h2>
          <div className="underline"></div>
        </div>
        <div className="achievements-timeline">
          {achievements.map(achievement => (
            <div className="achievement-item" key={achievement.id}>
              <div className="achievement-marker"></div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <p>I'm always open to discussing new projects, opportunities, or ways to make a positive impact with technology.</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="icon-email"></i>
                <span>arleneshergill@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="icon-location"></i>
                <span>Seattle, WA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Arlene<span className="accent">Dev</span></h2>
            <p>Technology for a better world</p>
          </div>
          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-icons">
                <a href="https://github.com/arlomoney" className="social-icon github"></a>
                <a href="https://www.linkedin.com/in/arlene-shergill-0959472b4/" className="social-icon linkedin"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Arlene. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;