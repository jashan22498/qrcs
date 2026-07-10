import "../styles/Profile.css";
function Profile({ goToDashboard }) {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <div className="profile-card">
        <h2>Arpita</h2>
        <p><strong>Role:</strong> User</p>
        <p><strong>Email:</strong> arpita@gmail.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <button onClick={goToDashboard}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
export default Profile;