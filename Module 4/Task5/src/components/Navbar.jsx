import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/jobs", label: "Job Openings" },
    { path: "/applications", label: "My Applications" },
    { path: "/interviews", label: "Interviews" },
    { path: "/notifications", label: "Notifications" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="dashboard-nav">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={location.pathname === link.path ? "active-nav" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;