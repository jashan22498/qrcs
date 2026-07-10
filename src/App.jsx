import { useState } from "react";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import FeaturePage from "./Pages/FeaturePage";
import ContactPage from "./Pages/ContactPage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Report from "./Pages/Report";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
function App() {
  const [page, setPage] = useState("home");
  switch (page) {
    case "home":
      return <Home setPage={setPage} />;
    case "about":
      return <AboutPage setPage={setPage} />;
    case "features":
      return <FeaturePage setPage={setPage} />;
    case "contact":
      return <ContactPage setPage={setPage} />;
    case "login":
      return (
        <Login
          onLogin={() => setPage("dashboard")}
        />
      );
    case "dashboard":
      return (
        <Dashboard
          goToHome={() => setPage("home")}
          goToReport={() => setPage("report")}
          goToAdmin={() => setPage("admin")}
          goToProfile={() => setPage("profile")}
        />
      );
    case "report":
      return (
        <Report
          goToDashboard={() => setPage("dashboard")}
        />
      );
    case "admin":
      return (
        <Admin
          goToHome={() => setPage("home")}
        />
      );
    case "profile":
      return (
        <Profile
          goToDashboard={() => setPage("dashboard")}
        />
      );
    default:
      return <Home setPage={setPage} />;
  }
}
export default App;