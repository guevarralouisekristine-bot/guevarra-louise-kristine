import { useState } from 'react'
import './App.css'

const careerSteps = [
  {
    number: '01',
    level: 'START HERE',
    title: 'IT Support Technician',
    experience: '0–2 years',
    description:
      'Build your foundation by helping people solve everyday hardware, software, and access problems.',
    responsibilities: ['Troubleshoot user issues', 'Set up devices and accounts', 'Document support requests'],
    skills: 'Customer service · Windows basics · Ticketing',
  },
  {
    number: '02',
    level: 'LEVEL UP',
    title: 'System Administrator',
    experience: '2–5 years',
    description:
      'Keep an organization’s servers, systems, and services reliable, secure, and ready for the people who depend on them.',
    responsibilities: ['Manage servers and user access', 'Monitor backups and uptime', 'Apply updates and security controls'],
    skills: 'Linux / Windows Server · Networking · Scripting',
  },
  {
    number: '03',
    level: 'GO FURTHER',
    title: 'Systems Engineer',
    experience: '5+ years',
    description:
      'Design and improve complex infrastructure, automate operations, and guide long-term technical decisions.',
    responsibilities: ['Design scalable infrastructure', 'Automate repetitive operations', 'Lead reliability improvements'],
    skills: 'Cloud platforms · Infrastructure as code · Architecture',
  },
]

const skillCards = [
  { icon: 'os', title: 'Operating systems', text: 'Administer Windows and Linux, manage accounts, services, updates, and permissions.' },
  { icon: 'network', title: 'Networking', text: 'Understand IP addressing, DNS, DHCP, VPNs, and how devices communicate.' },
  { icon: 'wrench', title: 'Troubleshooting', text: 'Trace symptoms to root causes and explain solutions clearly to others.' },
  { icon: 'shield', title: 'Security fundamentals', text: 'Use least privilege, patching, backups, and safe access practices to reduce risk.' },
  { icon: 'code', title: 'Scripting & automation', text: 'Use PowerShell or Bash to make repeatable work faster and less error-prone.' },
  { icon: 'message', title: 'Communication', text: 'Write useful documentation and translate technical details into clear updates.' },
]

const roles = [
  {
    title: 'Help Desk Technician',
    tag: 'PEOPLE FIRST',
    text: 'The first point of contact. Resolves common user issues, manages tickets, and escalates complex problems with clear notes.',
  },
  {
    title: 'System Administrator',
    tag: 'KEEP IT RUNNING',
    text: 'Owns the day-to-day health of servers and services: access, patching, backups, monitoring, and incident response.',
  },
  {
    title: 'Systems Engineer',
    tag: 'BUILD WHAT’S NEXT',
    text: 'Plans and implements infrastructure improvements, automation, cloud environments, and reliable system designs.',
  },
]

const tools = [
  { name: 'Linux', type: 'OPERATING SYSTEM', mark: 'L' },
  { name: 'Windows Server', type: 'SERVER PLATFORM', mark: 'W' },
  { name: 'PowerShell', type: 'AUTOMATION', mark: '>_' },
  { name: 'Git', type: 'VERSION CONTROL', mark: '⌘' },
  { name: 'VMware', type: 'VIRTUALIZATION', mark: 'V' },
  { name: 'AWS / Azure', type: 'CLOUD PLATFORM', mark: '☁' },
]

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const drawings = {
    os: <><rect x="3.5" y="4" width="17" height="12" rx="1.5" /><path d="M8 20h8m-4-4v4" /><path d="M7 8h4m-4 4h8" /></>,
    network: <><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m10.7 7-4.4 8.7m7-8.7 4.4 8.7M7.5 18h9" /></>,
    wrench: <><path d="M14.5 6.5a5 5 0 0 0-6.4 6.4L3 18l3 3 5.1-5.1a5 5 0 0 0 6.4-6.4l-3 3-3-3 3-3Z" /></>,
    shield: <><path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.7-3.4A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8.5 11.5h7m-7 3h4" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  }

  return <svg {...common}>{drawings[name] || drawings.os}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Career Pathways home">
          <span className="brand-mark">cp<span>.</span></span>
          <span className="brand-name">CAREER<br />PATHWAYS</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#pathway" onClick={closeMenu}>Career path</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#roles" onClick={closeMenu}>Job roles</a>
          <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
          <a className="nav-about" href="#about" onClick={closeMenu}>About me <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A CAREER GUIDE FOR THE CURIOUS</p>
            <h1>Build a career<br />that keeps the<br /><span>world connected.</span></h1>
            <p className="hero-description">
              From your first support ticket to designing the systems behind a business, there’s more than one way to grow in IT.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#pathway">Explore the pathway <Icon name="arrow" size={17} /></a>
              <a className="text-link" href="#about">Meet the developer <span>↗</span></a>
            </div>
            <div className="hero-note"><span className="note-line" /> A practical map for your next step in tech.</div>
          </div>
          <div className="hero-art" aria-label="Illustration of connected server infrastructure">
            <div className="art-spark spark-one">✳</div>
            <div className="art-spark spark-two">✳</div>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-label"><span className="status-dot" /> ALL SYSTEMS GO</div>
            <div className="server-stack">
              <div className="server-unit server-top">
                <span className="server-icon">✳</span><span className="server-slots"><i /><i /><i /></span><span className="server-status" />
              </div>
              <div className="server-unit server-mid">
                <span className="server-icon">⌘</span><span className="server-slots"><i /><i /><i /></span><span className="server-status" />
              </div>
              <div className="server-unit server-bottom">
                <span className="server-icon">↗</span><span className="server-slots"><i /><i /><i /></span><span className="server-status" />
              </div>
            </div>
            <div className="art-caption"><span>01 / THE INFRASTRUCTURE</span><span>Always on. Always evolving.</span></div>
            <div className="floating-card">
              <span className="floating-icon">↗</span>
              <span><strong>Growing forward</strong><small>One skill at a time</small></span>
              <span className="floating-spark">✳</span>
            </div>
            <span className="art-plus plus-one">+</span><span className="art-plus plus-two">+</span>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO FIND YOUR WAY</span><span className="scroll-arrow">↓</span>
            <span className="hero-bottom-right">PEOPLE&nbsp; / &nbsp;SYSTEMS&nbsp; / &nbsp;POSSIBILITY</span>
          </div>
        </section>

        <section className="pathway-section section-pad" id="pathway">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">01 — YOUR CAREER MAP</p><h2>Every expert<br />starts somewhere.</h2></div>
              <p className="section-intro">A system administration career is a progression, not a straight line. Start with the fundamentals, build trust through hands-on experience, and grow into the work that excites you.</p>
            </div>
            <div className="pathway-steps">
              {careerSteps.map((step) => (
                <article className="path-card" key={step.number}>
                  <div className="path-card-top"><span className="step-number">{step.number}</span><span className="step-level">{step.level}</span></div>
                  <div className="path-card-body">
                    <span className="experience">{step.experience}</span>
                    <h3>{step.title}</h3>
                    <p className="path-description">{step.description}</p>
                    <p className="list-label">A TASTE OF THE ROLE</p>
                    <ul>{step.responsibilities.map((task) => <li key={task}><span>↗</span>{task}</li>)}</ul>
                    <div className="skills-strip"><span>BUILD TOWARD</span><p>{step.skills}</p></div>
                  </div>
                  <div className="path-connector" aria-hidden="true">↓</div>
                </article>
              ))}
            </div>
            <p className="pathway-footnote"><span>✳</span> Your path can branch into cloud engineering, cybersecurity, DevOps, or infrastructure leadership.</p>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <div className="section-heading skills-heading">
              <div><p className="eyebrow">02 — THE FOUNDATIONS</p><h2>Skills that open<br />more doors.</h2></div>
              <p className="section-intro">You don’t need to know everything on day one. Curiosity, consistent practice, and these core skills give you a strong place to start.</p>
            </div>
            <div className="skills-grid">
              {skillCards.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-top"><span className="skill-icon"><Icon name={skill.icon} /></span><span className="skill-index">0{index + 1}</span></div>
                  <h3>{skill.title}</h3><p>{skill.text}</p>
                </article>
              ))}
            </div>
            <div className="practice-note"><span className="practice-star">✳</span><p><strong>Keep learning in public.</strong> Build a home lab, document what you learn, and treat every solved problem as experience worth sharing.</p><a href="#toolkit" aria-label="Explore the toolkit"><Icon name="arrow" size={19} /></a></div>
          </div>
        </section>

        <section className="roles-section section-pad" id="roles">
          <div className="section-wrap">
            <div className="section-heading roles-heading">
              <div><p className="eyebrow">03 — THE DAY-TO-DAY</p><h2>Different roles.<br />One connected team.</h2></div>
              <p className="section-intro">Titles can vary from company to company. What stays consistent is how each role contributes to a dependable, helpful IT environment.</p>
            </div>
            <div className="roles-list">
              {roles.map((role, index) => (
                <article className="role-row" key={role.title}>
                  <span className="role-number">0{index + 1}</span><div className="role-title"><span>{role.tag}</span><h3>{role.title}</h3></div>
                  <p>{role.text}</p><span className="role-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="toolkit-section section-pad" id="toolkit">
          <div className="section-wrap toolkit-layout">
            <div className="toolkit-copy">
              <p className="eyebrow">04 — YOUR TOOLKIT</p><h2>Get comfortable<br />with the tools.</h2>
              <p>Tools change. The habit of learning them doesn’t. Explore a few widely used technologies and practice in a safe lab environment.</p>
              <a className="button button-outline" href="#about">See my goals <Icon name="arrow" size={17} /></a>
            </div>
            <div className="tool-grid">
              {tools.map((tool) => (
                <article className="tool-card" key={tool.name}><span className="tool-mark">{tool.mark}</span><span className="tool-type">{tool.type}</span><h3>{tool.name}</h3></article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-wrap about-card">
            <div className="about-art" aria-hidden="true">
              <div className="about-ring ring-one" /><div className="about-ring ring-two" />
              <div className="about-monogram">LG<span>.</span></div>
              <span className="about-sticker">STAY<br />CURIOUS ✳</span>
              <span className="about-small-label">MADE WITH INTENTION<br />IN THE PHILIPPINES</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">05 — A LITTLE ABOUT ME</p><h2>Hi, I’m Louise.<br /><span>Nice to meet you.</span></h2>
              <p>I’m Louise Guevarra, an aspiring IT professional interested in the people and systems that make technology work. I created this guide to make the system administration career path feel a little more approachable.</p>
              <div className="about-details">
                <div><span>STUDYING</span><strong>Information Technology</strong></div>
                <div><span>MY CAREER PATH</span><strong>System Administration</strong></div>
                <div><span>MY GOAL</span><strong>Build secure, reliable systems—and keep growing.</strong></div>
              </div>
              <a className="about-email" href="#pathway">EXPLORE THE CAREER PATH <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">CAREER PATHWAYS<span>.</span></a>
        <p>A student portfolio about a future in system administration.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© 2026 LOUISE GUEVARRA</span>
      </footer>
    </>
  )
}

export default App
