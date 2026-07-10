import Navbar from "../Components/Navbar";
import "../Styles/Contact.css";
function ContactPage({ setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <div className="contact-page">
        <h1>Contact QRCS</h1>
        <div className="contact-card">
          <h3>Email</h3>
          <p>support@qrcs.com</p>
          <h3>Phone</h3>
          <p>+91 9876543210</p>
          <h3>Address</h3>
          <p>Lovely Professional University, Punjab</p>
        </div>
      </div>
    </>
  );
}
export default ContactPage;