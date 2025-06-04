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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3, md: 4 }
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
          <Box sx={{ textAlign: 'center', position: 'relative' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { 
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3.5rem',
                  lg: '4rem'
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

            <Typography
              variant="h2"
              sx={{
                fontSize: { 
                  xs: '1.25rem',
                  sm: '1.5rem',
                  md: '1.75rem'
                },
                fontWeight: 300,
                mb: { xs: 4, sm: 5 },
                color: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'text.secondary',
                lineHeight: 1.4
              }}
            >
              Full Stack Developer
            </Typography>

            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 3 },
                justifyContent: 'center',
                mb: { xs: 4, sm: 6 }
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleContactClick}
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

            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, sm: 3 },
                mb: { xs: 4, sm: 6 }
              }}
            >
              {[
                { 
                  icon: <GitHubIcon />, 
                  href: 'https://github.com/Srinivas-2410',
                  label: 'GitHub'
                },
                { 
                  icon: <LinkedInIcon />, 
                  href: 'https://linkedin.com/in/srinivas-k-s',
                  label: 'LinkedIn'
                },
                { 
                  icon: <EmailIcon />, 
                  href: 'mailto:srinivasks898@gmail.com',
                  label: 'Email'
                }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  aria-label={social.label}
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
                  {React.cloneElement(social.icon, {
                    sx: { fontSize: { xs: '1.5rem', sm: '2rem' } }
                  })}
                </IconButton>
              ))}
            </Box>

            <Box
              sx={{ 
                position: 'absolute',
                bottom: { xs: -48, md: -64 },
                left: '50%',
                transform: 'translateX(-50%)',
                display: { xs: 'none', md: 'block' },
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.5)' 
                  : 'rgba(0, 0, 0, 0.5)',
                animation: 'bounce 2s infinite'
              }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
}