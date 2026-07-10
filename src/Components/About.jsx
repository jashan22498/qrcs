import "../styles/About.css";
function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src="/about.jpg" alt="About QRCS" />
      </div>
      <div className="about-content">
        <h4>ABOUT QRCS</h4>
        <h2>Quick Response Coordination System</h2>
        <p>
          QRCS is a smart emergency response platform that allows users
          to report emergencies quickly and helps emergency teams respond
          faster through better coordination.
        </p>
        <ul>
          <li>✔ Fast Emergency Reporting</li>
          <li>✔ Quick Ambulance Support</li>
          <li>✔ Police Assistance</li>
          <li>✔ Fire Emergency Services</li>
          <li>✔ Nearby Hospital Information</li>
        </ul>
      </div>
    </section>
  );
}
export default About;