import { useState } from "react";
import "../styles/Report.css";
function Report({ goToDashboard }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Accident");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (
      name === "" ||
      phone === "" ||
      location === "" ||
      description === ""
    ) {
      alert("Please fill all fields.");
      return;
    }
    alert("Emergency Report Submitted Successfully!");
    setName("");
    setPhone("");
    setType("Accident");
    setLocation("");
    setDescription("");
  }
  return (
    <div className="report-container">
      <div className="report-box">
        <h2>Report Emergency</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
          >
            <option>Accident</option>
            <option>Fire</option>
            <option>Medical</option>
            <option>Crime</option>
          </select>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
          <textarea
            rows="4"
            placeholder="Describe the Emergency"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
          <button type="submit">
            Submit Report
          </button>
        </form>
        <button
          className="back-btn"
          onClick={goToDashboard}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
export default Report;