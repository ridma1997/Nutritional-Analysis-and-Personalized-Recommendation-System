import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", formData);
            setMessage(response.data.message);

            // Redirect to the home page if login is successful
            if (response.status === 200) {
                const userData = response.data.user; // Assuming the API returns user data
                setUser(userData); // Save user in context
                navigate("/home", { state: { user: userData } }); // Pass user data to the Home component
            }else {
                setMessage(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage("Invalid username or password. Please register.");
            } else {
                setMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#5ca946",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    padding: "30px",
                    width: "400px",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
                    Login
                </h2>
                {message && (
                    <p
                        style={{
                            color: message.includes("successful") ? "green" : "red",
                            textAlign: "center",
                        }}
                    >
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                marginBottom: "10px",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                marginBottom: "10px",
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor:"#0be047",
                            color: "white",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
