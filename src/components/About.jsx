import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <Card
        elevation={3}
        className="w-full max-w-2xl transform transition-all duration-300 hover:shadow-xl"
        sx={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          borderRadius: 2,
        }}
      >
        <CardContent className="p-8">
          <Box className="flex flex-col items-center space-y-8">
            {/* Profile Image with Hover Effect */}
            <Tooltip title="Full Stack Developer based in Bangalore, India">
              <Avatar
                src="/photo.png"
                alt="Profile Picture"
                sx={{
                  width: 128,
                  height: 128,
                  border: "4px solid rgba(59, 130, 246, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Tooltip>

            {/* Name and Title */}
            <Box className="text-center space-y-2">
              <Typography variant="h3" className="font-bold">
                Srinivas K S
              </Typography>
              <Box
                className="inline-block px-4 py-1.5 rounded-full"
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              >
                <Typography variant="subtitle1">
                  Full Stack Developer
                </Typography>
              </Box>
            </Box>

            {/* Bio */}
            <Typography
              variant="body1"
              className="text-center max-w-lg"
              color="text.secondary"
            >
              I am a Generalist Software Engineer with a passion for building
              scalable web applications and working with modern technologies. I
              have experience in both front-end and back-end development, and I
              love creating efficient, user-friendly solutions.
            </Typography>

            {/* Social Links */}
            <Box className="flex gap-4">
              <IconButton
                href="https://github.com/Srinivas-2410"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                href="https://linkedin.com/in/srinivas-k-s"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                href="mailto:srinivasks898@example.com"
                className="hover:scale-110 transition-transform"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                href="https://x.com/srinivas07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                sx={{
                  "&:hover": { color: "primary.main" },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </section>
  );
}

