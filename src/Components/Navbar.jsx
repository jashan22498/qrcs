import "../Styles/Navbar.css";
function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => setPage("home")}
        style={{ cursor: "pointer" }}
      >
        🚑 QRCS
      </h2>
      <ul className="nav-links">
        <li onClick={() => setPage("home")}>
          Home
        </li>
        <li onClick={() => setPage("about")}>
          About
        </li>
        <li onClick={() => setPage("features")}>
          Features
        </li>
        <li onClick={() => setPage("contact")}>
          Contact
        </li>
      </ul>
      <button
        className="login-btn"
        onClick={() => setPage("login")}
      >
        Login
      </button>
    </nav>
  );
}
export default Navbar;