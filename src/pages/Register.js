import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        age: "",
        weight: "",
        height: "",
        healthGoals: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/register", formData);
            setMessage(response.data.message);

            // Clear the form fields only if registration is successful
            if (response.data.message === "User registered successfully") {
                setFormData({
                    username: "",
                    password: "",
                    age: "",
                    weight: "",
                    height: "",
                    healthGoals: "",
                });
            }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            setMessage("Username already exists. Please choose a different username.");
        } else {
            setMessage("Failed to register. Please try again.");
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
                backgroundColor: "#f7f7f7",
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
                    Register
                </h2>
                {message && (
                    <p
                        style={{
                            color: message.includes("successfully") ? "green" : "red",
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
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
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
                            type="number"
                            name="weight"
                            placeholder="Weight (kg)"
                            value={formData.weight}
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
                            type="number"
                            name="height"
                            placeholder="Height (cm)"
                            value={formData.height}
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
                        <select
                            name="healthGoals"
                            value={formData.healthGoals}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                                marginBottom: "10px",
                            }}
                        >
                            <option value="">Select Health Goal</option>
                            <option value="weight loss">Weight Loss</option>
                            <option value="weight gain">Weight Gain</option>
                            <option value="maintain weight">Maintain Weight</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
