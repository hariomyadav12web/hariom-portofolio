export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Available for Full-Time <span className="availability-divider">•</span> Open to Opportunities</div>
          <p className="hero-kicker">Hello, I&apos;m</p>
          <h1>Hariom Yadav<span className="hero-role">Full Stack Developer</span></h1>
          <p className="hero-description">I build thoughtful, responsive web experiences with the MERN stack, turning ideas into simple and useful digital products.</p>
          <p className="location"><span className="location-pin">+</span> Lucknow, India</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span>↗</span></a>
            <a className="button button-secondary" href="/Hariom-Yadav-Resume.txt" download>Download resume <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img src="/profile.jpg" alt="Hariom Yadav" />
          </div>
          <div className="visual-card">
            <span className="visual-card-icon">&lt;/&gt;</span>
            <span><strong>Clean code.</strong><br />Thoughtful design.</span>
          </div>
          <span className="visual-orbit orbit-one" />
          <span className="visual-orbit orbit-two" />
        </div>
      </div>
      <div className="hero-scroll"><span /> Scroll to explore</div>
    </section>
  )
}
