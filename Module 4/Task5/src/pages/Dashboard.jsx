import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  jobs,
  placementTrends,
} from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import { useApplications } from "../context/ApplicationContext";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { user, logout } = useAuth();

  const {
    totalApplicationsCount,
    underReviewCount,
  } = useApplications();

  const navigate = useNavigate();

  const [dashboardMessage, setDashboardMessage] = useState("");

  useEffect(() => {
    setDashboardMessage(
      "Stay consistent with your applications and keep preparing for interviews."
    );
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <h1>Student Placement Dashboard</h1>
          <p>Track your placement journey in one place.</p>
        </div>

        <div className="header-actions">
          <Link to="/profile" className="profile-link">
            My Profile
          </Link>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <Navbar />

      <main className="dashboard-content">
        <section className="welcome-section">
          <h2>
            Welcome, {user?.name || "Student"} 👋
          </h2>

          <p>
            Stay updated with job opportunities, applications
            and interviews.
          </p>

          {dashboardMessage && (
            <p className="dashboard-message">
              {dashboardMessage}
            </p>
          )}
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Jobs Applied</h3>
            <strong>{totalApplicationsCount}</strong>
          </div>

          <div className="stat-card">
            <h3>Under Review</h3>
            <strong>{underReviewCount}</strong>
          </div>

          <div className="stat-card">
            <h3>Interviews</h3>
            <strong>0</strong>
          </div>

          <div className="stat-card">
            <h3>Students Selected</h3>
            <strong>0</strong>
          </div>
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>

          <div className="action-grid">
            <Link to="/jobs">
              🔎 Find Jobs
            </Link>

            <Link to="/applications">
              📋 View Applications
            </Link>

            <Link to="/interviews">
              📅 Interview Schedule
            </Link>

            <Link to="/notifications">
              🔔 Notifications
            </Link>
          </div>
        </section>

        <section className="deadlines-section">
          <h2>Upcoming Application Deadlines</h2>

          <div className="deadlines-grid">
            {jobs.slice(0, 4).map((job) => (
              <div
                className="deadline-card"
                key={job.id}
              >
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>

                <span>{job.deadline}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="trends-section">
          <h2>Placement Application Trends</h2>

          <div className="trend-chart">
            {placementTrends.map((trend) => (
              <div
                className="trend-item"
                key={trend.month}
              >
                <div className="trend-bar-wrapper">
                  <div
                    className="trend-bar"
                    style={{
                      height: `${trend.applications * 4}px`,
                    }}
                  >
                    {trend.applications}
                  </div>
                </div>

                <span>{trend.month}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;