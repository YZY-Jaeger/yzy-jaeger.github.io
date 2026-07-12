import { useEffect, useState } from 'react'
import './App.css'
import { experience, projects, skillGroups } from './content'

const navItems = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function DownloadIcon() {
  return <span aria-hidden="true">↓</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zeyuan Yu, back to top">
          <span className="brand-mark">ZY</span>
          <span className="brand-name">Zeyuan Yu</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={menuOpen ? 'navigation open' : 'navigation'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="mailto:jaeger741118@gmail.com">
            Get in touch
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science M.Sc. · Based in Germany</p>
            <h1 id="hero-title">
              I build practical systems across <span>AI, software and visualization.</span>
            </h1>
            <p className="hero-intro">
              I’m Zeyuan Yu, a recent graduate from the University of Konstanz. My work combines
              computer vision, full-stack development, data visualization and interactive 3D systems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View projects <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button secondary"
                href="https://github.com/YZY-Jaegeri"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowIcon />
              </a>
            </div>
            <div className="language-line" aria-label="Languages">
              <span>Chinese native</span>
              <span>English C1</span>
              <span>German B2</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile overview">
            <div className="availability">
              <span className="status-dot" />
              Open to junior developer opportunities
            </div>
            <div className="focus-list">
              <div>
                <span>01</span>
                <p>AI & Computer Vision</p>
              </div>
              <div>
                <span>02</span>
                <p>Full-stack Development</p>
              </div>
              <div>
                <span>03</span>
                <p>Data Visualization</p>
              </div>
              <div>
                <span>04</span>
                <p>XR & Interactive 3D</p>
              </div>
            </div>
            <div className="cv-panel">
              <p>Download CV</p>
              <div>
                <a href="files/Zeyuan_Yu_CV_EN.pdf">EN <DownloadIcon /></a>
                <a href="files/Zeyuan_Yu_CV_DE.pdf">DE <DownloadIcon /></a>
                <a href="files/Zeyuan_Yu_CV_ZH.pdf">中文 <DownloadIcon /></a>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section-shell about-section" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-number">01</p>
            <h2 id="about-title">About</h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              I enjoy turning research ideas and technical requirements into working, understandable
              applications.
            </p>
            <div className="about-copy">
              <p>
                I recently completed my Master’s degree in Computer and Information Science at the
                University of Konstanz. My academic and practical work spans deep learning, computer
                vision, visual analytics, robotics-related tooling and software engineering.
              </p>
              <p>
                I am looking for junior roles where I can contribute to real products, learn from an
                experienced team and work across the boundary between models, data, backend systems and
                user-facing interfaces.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-labelledby="projects-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="section-number">02</p>
              <h2 id="projects-title">Selected projects</h2>
              <p className="section-note">A first selection. More university and personal work will be added.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={project.imageAlt} />
                    <span>{project.year}</span>
                  </div>
                  <div className="project-content">
                    <p className="project-area">{project.area}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <p className="contribution"><strong>My contribution:</strong> {project.contribution}</p>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    {project.links.length > 0 && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            rel={link.external ? 'noreferrer' : undefined}
                          >
                            {link.label} {link.external ? <ArrowIcon /> : <DownloadIcon />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell experience-section" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="section-number">03</p>
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.role}`}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section" aria-labelledby="skills-title">
          <div className="section-shell">
            <div className="section-heading">
              <p className="section-number">04</p>
              <h2 id="skills-title">Skills & education</h2>
            </div>
            <div className="skills-layout">
              <div className="skill-grid">
                {skillGroups.map((group) => (
                  <article className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.skills.join(' · ')}</p>
                  </article>
                ))}
              </div>
              <div className="education-card">
                <p className="education-label">Education</p>
                <div>
                  <p className="education-date">2023–2026</p>
                  <h3>M.Sc. Computer and Information Science</h3>
                  <p>University of Konstanz · Preliminary overall grade 1.7</p>
                </div>
                <div>
                  <p className="education-date">2019–2023</p>
                  <h3>B.Sc. (Hons.) Computer Science and Technology</h3>
                  <p>BNU-HKBU United International College · GPA 3.39 / 4.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="publication-section section-shell" aria-labelledby="publication-title">
          <div className="publication-card">
            <div>
              <p className="publication-label">Publication</p>
              <h2 id="publication-title">Sailor Shift and the Spread of Oceanus Folk: A Visual Analysis</h2>
              <p>IEEE VAST Challenge 2025 · Collaborative project report</p>
            </div>
            <a
              href="https://ieeexplore.ieee.org/document/11298668"
              target="_blank"
              rel="noreferrer"
              aria-label="View the publication on IEEE Xplore"
            >
              IEEE Xplore <ArrowIcon />
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2 id="contact-title">Looking for a junior developer who can work across disciplines?</h2>
            </div>
            <div className="contact-copy">
              <p>
                I am open to opportunities in Germany and roles with international companies in China,
                especially in AI, computer vision, software development, data visualization and XR.
              </p>
              <a className="button light" href="mailto:jaeger741118@gmail.com">
                jaeger741118@gmail.com <ArrowIcon />
              </a>
              <div className="contact-links">
                <a href="https://github.com/YZY-Jaegeri" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/zeyuan-yu-566733285/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zeyuan Yu</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
