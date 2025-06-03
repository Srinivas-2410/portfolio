import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <WorkIcon />, label: 'Years Experience', value: '3+' },
    { icon: <AssignmentIcon />, label: 'Projects Completed', value: '25+' },
    { icon: <PeopleIcon />, label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <Card
        elevation={3}
        className={`w-full max-w-2xl transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
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

            {/* Stats */}
            <Grid container spacing={3} className="justify-center">
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box className="text-center p-4 rounded-lg hover:bg-white/50 transition-all">
                    <Box className="flex justify-center mb-2">
                      {React.cloneElement(stat.icon, { 
                        sx: { fontSize: 32, color: 'primary.main' }
                      })}
                    </Box>
                    <Typography variant="h4" className="font-bold text-primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

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