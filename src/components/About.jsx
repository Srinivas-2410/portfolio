import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  IconButton,
  Stack,
  Chip
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function About() {
  return (
    <section id="about" className="mb-16 mt-10">
      <Card sx={{ maxWidth: 600, mx: "auto", my: 4 }} elevation={3}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="/photo.png"
              alt="Profile Picture"
            />
            <Typography variant="h4" fontWeight="bold">
              Your Name
            </Typography>
            <Chip label="Full Stack Developer" color="primary" />
            
            <Typography variant="body1" textAlign="center" sx={{ maxWidth: 600, my: 2 }}>
             I am Generalist Software Engineer with a passion for building scalable web applications and working with modern technologies. I have experience in both front-end and back-end development, and I love creating efficient, user-friendly solutions.
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton href="https://github.com/Srinivas-2410" target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://linkedin.com/in/srinivas-k-s" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="mailto:srinivasks898@example.com">
                <EmailIcon />
              </IconButton>
              <IconButton href="https://x.com/srinivas07" target="_blank">  
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </section>
  );
}

