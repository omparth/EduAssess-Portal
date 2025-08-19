import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreateAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");

  const handleCreate = async () => {
    try {
      const body = {
        title,
        description,
        questions: [{ questionText: question }],
        userId: 1 // static teacherId - you can change if needed
      };
      await API.post("/assessments/create", body);
      alert("Assessment created");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error creating assessment");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" mb={2}>Create Assessment</Typography>
      <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="Description" fullWidth sx={{ mb: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField label="Question" fullWidth sx={{ mb: 2 }} value={question} onChange={(e) => setQuestion(e.target.value)} />

      <Button variant="contained" onClick={handleCreate}>Create</Button>
    </Box>
  );
};

export default CreateAssessment;
