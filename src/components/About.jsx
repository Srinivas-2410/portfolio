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
        sx={{ 
          position: 'relative',
          py: { xs: 4, sm: 6, md: 8 }, // Responsive padding
          px: { xs: 2, sm: 3, md: 4 }  // Responsive padding
        }}
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
          <Box className="text-center relative">
            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { 
                  xs: '2rem',     // Mobile
                  sm: '2.5rem',   // Tablet
                  md: '3.5rem',   // Desktop
                  lg: '4rem'      // Large Desktop
                },
                fontWeight: 700,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, sm: 3 },
                lineHeight: 1.2
              }}
            >
              Srinivas K S
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { 
                  xs: '1.25rem',  // Mobile
                  sm: '1.5rem',   // Tablet
                  md: '1.75rem'   // Desktop
                },
                fontWeight: 300,
                mb: { xs: 3, sm: 4 },
                color: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'text.secondary',
                lineHeight: 1.4
              }}
            >
              Full Stack Developer
            </Typography>

            {/* Description */}
            

                  <Box className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button
                    variant="contained"
                    size="large"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      py: { xs: 1.25, sm: 1.5 },
                      px: { xs: 3, sm: 4 },
                      fontSize: { xs: '0.9rem', sm: '1.1rem' },
                      width: { xs: '100%', sm: 'auto' },
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
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
                      py: { xs: 1.25, sm: 1.5 },
                      px: { xs: 3, sm: 4 },
                      fontSize: { xs: '0.9rem', sm: '1.1rem' },
                      width: { xs: '100%', sm: 'auto' },
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
            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, sm: 3 },
                mb: { xs: 4, sm: 6 }
              }}
            >
              <IconButton
                href="https://github.com/Srinivas-2410"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <GitHubIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
              </IconButton>
              
              <IconButton
                href="https://linkedin.com/in/srinivas-k-s"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedInIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
              </IconButton>
              
              <IconButton
                href="mailto:srinivasks898@gmail.com"
                sx={{
                  width: { xs: 40, sm: 48 },
                  height: { xs: 40, sm: 48 },
                  '&:hover': { 
                    color: 'primary.main',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <EmailIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }} />
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