import React, { useEffect, useState } from "react";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import type { Assessment } from "../types";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") as "teacher" | "student" | null;
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  const fetchData = async () => {
    const res = await API.get("/assessments");
    setAssessments(res.data as Assessment[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>Dashboard ({role})</Typography>

      {role === "teacher" && (
        <Button variant="contained" onClick={() => navigate("/create")} sx={{ mb: 2 }}>
          Create Assessment
        </Button>
      )}

      <List>
        {assessments.map((asm) => (
          <ListItem key={asm.id} sx={{ border: "1px solid #ccc", mb: 1 }}>
            <ListItemText
              primary={asm.title}
              secondary={asm.description}
            />
            {role === "student" && (
              <Button onClick={() => navigate(`/submit/${asm.id}`)}>Submit</Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;
