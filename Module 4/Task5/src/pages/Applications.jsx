import { useApplications } from "../context/ApplicationContext";
import Navbar from "../components/Navbar";

function Applications() {
  const { appliedJobs } = useApplications();

  return (
    <div className="applications-page">
      <Navbar />

      <header className="page-header">
        <h1>My Applications</h1>
        <p>Track the status of your job applications.</p>
      </header>

      {appliedJobs.length === 0 ? (
        <div className="application-card">
          <div>
            <h2>No Applications Yet</h2>
            <p>
              You have not applied for any placement opportunities yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="applications-list">
          {appliedJobs.map((application) => (
            <div
              className="application-card"
              key={application.id}
            >
              <div>
                <h2>{application.role}</h2>
                <h3>{application.company}</h3>
                <p>
                  Applied on: {application.date}
                </p>
              </div>

              <span
                className={`application-status ${application.status
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                {application.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications;