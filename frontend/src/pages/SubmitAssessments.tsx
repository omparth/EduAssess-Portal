import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import type { Assessment } from "../types";

const SubmitAssessment: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [answer, setAnswer] = useState("");

  const fetchAssessment = async () => {
    const res = await API.get("/assessments");
    const found = res.data.find((a: Assessment) => a.id === Number(id));
    setAssessment(found);
  };

  useEffect(() => {
    fetchAssessment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async () => {
    try {
      const body = {
        assessmentId: Number(id),
        submittedBy: [{ answer }],
      };
      await API.post("/assessments/submit", body);
      alert("Submission successful");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error submitting");
    }
  };

  if (!assessment) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5">{assessment.title}</Typography>
      <Typography mb={2}>{assessment.description}</Typography>

      <TextField
        label="Answer"
        fullWidth
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default SubmitAssessment;
