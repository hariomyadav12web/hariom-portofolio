import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './App.css'

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Git',
  'GitHub',
]

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">Building with curiosity, growing with every project.</h2>
        </div>
        <p className="about-copy">
          I am Hariom Yadav, a fresher MERN stack developer from Lucknow, India. I enjoy creating clean, responsive web experiences and turning ideas into useful products. I am currently looking for an opportunity where I can learn from a great team, contribute with my skills, and grow as a full stack developer.
        </p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">My toolkit</p>
            <h2 className="section-title">Skills I work with</h2>
          </div>
          <p className="section-note">A practical foundation for building modern web applications.</p>
        </div>
        <div className="skill-list">
          {skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard?.writeText('yadavhariom6739@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2 className="section-title">Have an opportunity in mind?</h2>
          <p className="contact-copy">I&apos;d love to hear about it. Reach out and let&apos;s build something meaningful together.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:yadavhariom6739@gmail.com">Email me</a>
          <button className="button button-secondary" onClick={copyEmail}>{copied ? 'Email copied' : 'Copy email'}</button>
        </div>
      </div>
    </section>
  )
}

function App() {
  useEffect(() => {
    document.title = 'Hariom Yadav - Full Stack Developer'
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Hariom Yadav</span>
          <span>Lucknow, India</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  )
}

export default App
