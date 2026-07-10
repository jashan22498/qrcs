import "../styles/Features.css";
function Features() {
  return (
    <section className="features">
      <h4>OUR FEATURES</h4>
      <h2>Why Choose QRCS?</h2>
      <div className="feature-container">
        <div className="feature-card">
          <h1>🚨</h1>
          <h3>Emergency Reporting</h3>
          <p>
            Users can quickly report emergencies through QRCS.
          </p>
        </div>
        <div className="feature-card">
          <h1>📍</h1>
          <h3>Live Location</h3>
          <p>
            Share your live location for quick emergency response.
          </p>
        </div>
        <div className="feature-card">
          <h1>🚑</h1>
          <h3>Quick Response</h3>
          <p>
            Emergency teams receive alerts instantly.
          </p>
        </div>
        <div className="feature-card">
          <h1>🏥</h1>
          <h3>Emergency Services</h3>
          <p>
            Connect with nearby hospitals, police and ambulance services.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Features;