import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src="/zach-photo.jpeg" alt="Zach Steinberg" className="profile-pic" />
      <h1>Zach Steinberg</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I'm an aspiring data analyst and information systems student with a passion for using
          technology to solve real-world problems. I enjoy working on projects that involve data,
          design thinking, and collaboration
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>SQL &amp; Database Design</li>
          <li>Data Visualization</li>
          <li>JavaScript &amp; React</li>
          <li>Project Management</li>
          <li>Communication &amp; Teamwork</li>
        </ul>
      </section>

      <section>
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Write a message..." />

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
