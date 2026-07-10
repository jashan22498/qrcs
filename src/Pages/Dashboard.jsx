import "../styles/Dashboard.css";
function Dashboard({ goToReport, goToAdmin, goToProfile, goToHome }) {
  return (
    <div className="dashboard">
      <h1>QRCS Dashboard</h1>
      <h2>Welcome User 👋</h2>
      <div className="dashboard-buttons">
        <button onClick={goToReport}>
          Report Emergency
        </button>
        <button onClick={goToProfile}>
          My Profile
        </button>
        <button onClick={goToAdmin}>
          Admin Dashboard
        </button>
        <button onClick={goToHome}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;