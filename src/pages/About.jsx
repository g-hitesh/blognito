import { MapPin, Code2, Users, Globe, Mail } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './About.css';

// The Team Data Array
const teamMembers = [
  {
    name: "Hitesh Kumar",
    role: "Full Stack Developer",
    bio: "Specializes in the MERN stack and crafting intuitive UIs. Fuels his coding sessions with intense strength training and a strict vegetarian diet."
  },
  {
    name: "Himanshu",
    role: "Frontend Developer",
    bio: "Focuses on clean system architecture and building out core, scalable platform features."
  },
  {
    name: "Taran",
    role: "Frontend Developer",
    bio: "Focuses on clean system architecture and building out core, scalable platform features."
  },
  {
    name: "Saksham",
    role: "UI/UX & Developer",
    bio: "Brings complex ideas to life through robust frontend and backend API integration."
  }
];

const About = () => {
  return (
    <AnimatedPage>
      <div className="about-container">
        
        <header className="about-header">
          <h1>Behind the Blog</h1>
          <p>Meet the four developers building this platform.</p>
        </header>

        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Blognito isn't just a solo project—it is the collaborative effort of a passionate four-person development team currently operating out of Sahibzada Ajit Singh Nagar, Punjab.
            </p>
            <p>
              We came together with a shared vision: to build a premium, blazing-fast platform for the developer community. By combining our individual strengths across the MERN stack, UI/UX design, and complex system architecture, we turned a simple idea into the full-stack application you see today.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="info-card">
              <h3>Team Facts</h3>
              <ul className="fact-list">
                <li><MapPin size={18} className="fact-icon" /> Sahibzada Ajit Singh Nagar, Punjab</li>
                <li><Code2 size={18} className="fact-icon" /> MERN Stack Focus</li>
                <li><Users size={18} className="fact-icon" /> 5 Core Contributors</li>
              </ul>
            </div>

            <div className="social-links">
              <a target='_blank' href="https://github.com/g-hitesh" className="social-btn"><Globe size={20} /> Team GitHub</a>
              {/* <a href="#" className="social-btn"><Mail size={20} /> Contact Us</a> */}
            </div>
          </aside>
        </div>

        <div className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default About;