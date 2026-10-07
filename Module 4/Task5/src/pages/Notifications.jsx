import { notifications } from "../data/mockData";
import Navbar from "../components/Navbar";

function Notifications() {
  return (
    <div className="notifications-page">
      <Navbar />

      <header className="page-header">
        <h1>Notifications</h1>
        <p>
          Stay updated with placement announcements and
          application updates.
        </p>
      </header>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            className="notification-card"
            key={notification.id}
          >
            <div className="notification-icon">🔔</div>

            <div className="notification-content">
              <h2>{notification.title}</h2>
              <p>{notification.message}</p>
              <small>{notification.date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;