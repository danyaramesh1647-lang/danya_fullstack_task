import { interviews } from "../data/mockData";
import Navbar from "../components/Navbar";

function Interviews() {
  return (
    <div className="interviews-page">
      <Navbar />

      <header className="page-header">
        <h1>Interview Schedule</h1>
        <p>Keep track of your upcoming placement interviews.</p>
      </header>

      <div className="interviews-list">
        {interviews.map((interview) => (
          <div
            className="interview-card"
            key={interview.id}
          >
            <div>
              <h2>{interview.role}</h2>
              <h3>{interview.company}</h3>
            </div>

            <div className="interview-details">
              <p>📅 {interview.date}</p>
              <p>⏰ {interview.time}</p>
              <p>💻 {interview.mode}</p>
            </div>

            <span className="interview-status">
              Scheduled
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interviews;