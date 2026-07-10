import { useState } from "react";
import "../styles/Login.css";
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }
    onLogin();
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>QRCS Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;