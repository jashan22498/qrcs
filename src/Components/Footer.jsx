import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>QRCS</h2>
          <p>
            Quick Response Coordination System helps users report
            emergencies quickly and connect with emergency services.
          </p>
        </div>
        <div className="footer-box">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Features</p>
        </div>
        <div className="footer-box">
          <h3>Emergency Numbers</h3>
          <p>🚑 Ambulance : 108</p>
          <p>🚓 Police : 100</p>
          <p>🚒 Fire : 101</p>
        </div>
      </div>
      <hr />
      <p className="copyright">
        © 2026 QRCS | Developed by Arpita, Harsh & Jashandeep
      </p>
    </footer>
  );
}
export default Footer;