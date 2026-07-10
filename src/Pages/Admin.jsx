import "../styles/Admin.css";
function Admin({ goToHome }) {
  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Emergency</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>Accident</td>
            <td>Jalandhar</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>Priya</td>
            <td>Fire</td>
            <td>Ludhiana</td>
            <td>Resolved</td>
          </tr>

          <tr>
            <td>Aman</td>
            <td>Medical</td>
            <td>Phagwara</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
      <button onClick={goToHome}>
        Back to Home
      </button>
    </div>
  );
}
export default Admin;