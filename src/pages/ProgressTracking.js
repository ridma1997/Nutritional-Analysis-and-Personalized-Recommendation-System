import React, { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem } from "@mui/material";
import axios from "axios";

const ProgressTracking = () => {
  const [userId, setUserId] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchProgressLogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/progress-tracking", {
        params: { user_id: userId },
      });
      setLogs(response.data.progress_logs);
    } catch (error) {
      setLogs([{ activity_details: "Error fetching progress logs.", timestamp: "" }]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Progress Tracking
      </Typography>
      <TextField
        fullWidth
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" color="success" onClick={fetchProgressLogs}>
        View Progress
      </Button>
      <List>
        {logs.map((log, index) => (
          <ListItem key={index}>
            {log.activity_details} - {log.timestamp}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ProgressTracking;
