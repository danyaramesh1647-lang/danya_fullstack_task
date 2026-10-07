import { useState } from "react";
import { jobs } from "../data/mockData";
import { useApplications } from "../context/ApplicationContext";
import Navbar from "../components/Navbar";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const { appliedJobs, applyForJob } = useApplications();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "All" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="jobs-page">
      <Navbar />

      <header className="page-header">
        <h1>Job Openings</h1>
        <p>Explore the latest placement opportunities.</p>
      </header>

      <div className="job-filters">
        <input
          type="text"
          placeholder="Search company or job role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All">All Locations</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map((job) => {
          const isApplied = appliedJobs.some(
            (item) => item.id === job.id
          );

          return (
            <div className="job-card" key={job.id}>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>

              <p>📍 {job.location}</p>
              <p>💰 {job.package}</p>
              <p>💼 {job.type}</p>
              <p>📅 Deadline: {job.deadline}</p>

              <div className="skills">
                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <button
                onClick={() => applyForJob(job)}
                disabled={isApplied}
              >
                {isApplied ? "Applied ✓" : "Apply Now"}
              </button>
            </div>
          );
        })}
      </div>

      {filteredJobs.length === 0 && (
        <p className="no-jobs">No matching jobs found.</p>
      )}
    </div>
  );
}

export default Jobs;