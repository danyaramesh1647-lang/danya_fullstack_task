import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, updateProfile } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [message, setMessage] = useState("");

  const handleEdit = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setMessage("");
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      setMessage("Please fill in both name and email.");
      return;
    }

    updateProfile(name.trim(), email.trim());

    setIsEditing(false);
    setMessage("Profile updated successfully.");
  };

  const handleCancel = () => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setMessage("");
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1>Student Profile</h1>

        <div className="profile-info">
          <div>
            <span>Name</span>

            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            ) : (
              <strong>{user?.name || "Student"}</strong>
            )}
          </div>

          <div>
            <span>Email</span>

            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            ) : (
              <strong>{user?.email || "student@example.com"}</strong>
            )}
          </div>

          <div>
            <span>Role</span>
            <strong>{user?.role || "Student"}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>Computer Science and Engineering</strong>
          </div>

          <div>
            <span>College</span>
            <strong>Prathyusha Engineering College</strong>
          </div>
        </div>

        {message && <p className="profile-message">{message}</p>}

        {!isEditing ? (
          <button onClick={handleEdit}>Edit Profile</button>
        ) : (
          <div className="profile-actions">
            <button onClick={handleSave}>Save Changes</button>

            <button
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;