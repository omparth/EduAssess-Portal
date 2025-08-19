import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, margin: "auto", mt: 10 }}>
      <Typography variant="h5">Login</Typography>
      <TextField name="username" label="Username" onChange={handleChange} />
      <TextField name="password" label="Password" type="password" onChange={handleChange} />
      <Button variant="contained" onClick={handleSubmit}>Login</Button>
      <Button onClick={() => navigate("/register")}>Go to Register</Button>
    </Box>
  );
};

export default Login;
