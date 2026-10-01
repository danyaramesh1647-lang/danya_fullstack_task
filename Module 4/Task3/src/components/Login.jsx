import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (username && password) {
            setMessage("Login Successful");
        } else {
            setMessage("Please enter username and password");
        }
    };

    return (
        <div>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>Login</button>

            <p>{message}</p>
        </div>
    );
}

export default Login;