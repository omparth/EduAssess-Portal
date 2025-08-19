import React, { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

type RegisterForm = {
  username: string;
  password: string;
  role: "student" | "teacher";
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    password: "",
    role: "student",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered! Now login.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, margin: "auto", mt: 10 }}>
      <Typography variant="h5">Register</Typography>
      <TextField name="username" label="Username" onChange={handleChange} />
      <TextField name="password" type="password" label="Password" onChange={handleChange} />
      <TextField
        select
        name="role"
        label="Role"
        value={form.role}
        onChange={handleChange}
      >
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="teacher">Teacher</MenuItem>
      </TextField>
      <Button variant="contained" onClick={handleSubmit}>Register</Button>
      <Button onClick={() => navigate("/")}>Back to Login</Button>
    </Box>
  );
};

export default Register;
