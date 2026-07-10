import "../styles/Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h4>EMERGENCY RESPONSE SYSTEM</h4>
          <h1>Quick Response Coordination System</h1>
          <p>
            Report emergencies quickly and connect with nearby
            emergency services using QRCS.
          </p>
          <button>
            Report Emergency
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;