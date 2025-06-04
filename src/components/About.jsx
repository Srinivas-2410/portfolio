import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Fade,
  useTheme,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box 
        className="min-h-screen flex flex-col justify-center"
        sx={{ position: 'relative' }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            zIndex: -1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '40%',
              height: '40%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '10%',
              right: '5%',
              width: '35%',
              height: '35%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }
          }}
        />

        <Fade in={isVisible} timeout={1000}>
          <Box className="text-center space-y-6 relative">
            {/* Main Heading */}
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Srinivas K S
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h2"
              className="text-xl md:text-2xl font-light"
              sx={{
                mb: 4,
                color: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'text.secondary',
                textAlign: 'center',
              }}
            >
              Full Stack Developer
            </Typography>

            {/* Description */}
            

            {/* CTA Buttons */}
            <Box className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="contained"
                size="large"
                href="#contact"
                sx={{
                  py: 1.5,
                  px: 4,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Let's Connect
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  borderColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.23)'
                    : 'rgba(0, 0, 0, 0.23)',
                  color: theme.palette.mode === 'dark'
                    ? 'white'
                    : 'inherit',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: theme.palette.mode === 'dark'
                      ? 'white'
                      : 'primary.main',
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download CV
              </Button>
            </Box>

            {/* Social Links */}
            <Box className="flex justify-center gap-4">
              <IconButton
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                sx={{
                  '&:hover': { color: 'primary.main' },
                  width: 48,
                  height: 48,
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              
              <IconButton
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                sx={{
                  '&:hover': { color: 'primary.main' },
                  width: 48,
                  height: 48,
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              
              <IconButton
                href="mailto:your.email@example.com"
                className="hover:scale-110 transition-transform"
                sx={{
                  '&:hover': { color: 'primary.main' },
                  width: 48,
                  height: 48,
                }}
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>

            {/* Scroll Indicator */}
            <Box
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
              sx={{ 
                display: { xs: 'none', md: 'block' },
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.5)' 
                  : 'rgba(0, 0, 0, 0.5)',
              }}
            >
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
}