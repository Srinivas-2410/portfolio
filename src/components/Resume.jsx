import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Download } from "lucide-react"; // shadcn/ui icon

export default function Resume() {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Resume
        </Typography>
        <Typography variant="body1" gutterBottom>
          Download my latest resume below.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download size={18} />}
          href="/resume.pdf"
          download
        >
          Download Resume
        </Button>
      </CardContent>
    </Card>
  );
}

