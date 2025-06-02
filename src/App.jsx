import { useState } from "react";
import "./App.css";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [result, setResult] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!username || !password) {
			return;
		}
		if (username === "user" && password === "password") {
			setResult("success");
		} else {
			setResult("failed");
		}
	};
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	return (
		<div>
			<h1>Login Page</h1>
			{result === "success" ? (
				<p>Welcome, user!</p>
			) : (
				<>
					{result === "failed" && <p>Invalid username or password</p>}
					<form
						onSubmit={handleSubmit}
						style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
						<div>
							<label htmlFor="username">Username: </label>
							<input
								type="text"
								name="username"
								id="username"
								value={username}
								placeholder="username"
								required
								onChange={handleUsernameChange}
							/>
						</div>
						<div>
							<label htmlFor="password">Password: </label>
							<input
								type="text"
								name="password"
								id="password"
								placeholder="password"
								value={password}
								required
								onChange={handlePasswordChange}
							/>
						</div>
						<button type="submit" style={{ width: "fit-content" }}>
							Submit
						</button>
					</form>
				</>
			)}
		</div>
	);
}

export default App;
