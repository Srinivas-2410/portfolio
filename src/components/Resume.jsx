import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card 
        elevation={3}
        className="w-full max-w-lg transform transition-all duration-300 hover:shadow-xl"
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2
        }}
      >
        <CardContent className="p-8">
          <Typography variant="h3" className="text-center font-bold mb-6">
            Resume
          </Typography>
          
          <Typography 
            variant="body1" 
            className="text-center text-gray-600 dark:text-gray-300 mb-8"
          >
            Download my latest resume to learn more about my experience and skills.
          </Typography>

          <Box className="flex justify-center">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="/resume.pdf"
              download
              className="w-full sm:w-auto group hover:shadow-lg"
              sx={{
                py: 1.5,
                px: 4,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Download Resume
            </Button>
          </Box>

          <Typography 
            variant="caption" 
            className="block text-center mt-6 text-gray-500"
          >
            PDF format • Last updated June 2023
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
}

