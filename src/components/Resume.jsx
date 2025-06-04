import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Fade,
  useTheme,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PreviewIcon from '@mui/icons-material/Preview';

export default function Resume() {
  const theme = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Fade in timeout={1000}>
        <Container maxWidth="md">
          <Box 
            sx={{ 
              textAlign: 'center',
              py: { xs: 4, md: 8 }
            }}
          >
            <Typography 
              variant="h2" 
              className="font-bold mb-8"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                  : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6
              }}
            >
              Resume
            </Typography>

            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                justifyContent: 'center',
                maxWidth: 'sm',
                mx: 'auto',
                px: 2
              }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<PreviewIcon />}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.23)' 
                    : 'rgba(0, 0, 0, 0.23)',
                  color: theme.palette.mode === 'dark' 
                    ? 'white' 
                    : 'inherit',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: theme.palette.mode === 'dark' 
                      ? '#93c5fd' 
                      : '#6366f1',
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(147, 197, 253, 0.08)'
                      : 'rgba(99, 102, 241, 0.08)',
                  }
                }}
              >
                View Resume
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease-in-out',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #a5b4fc 0%, #93c5fd 100%)'
                      : 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  }
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Box>
        </Container>
      </Fade>
    </section>
  );
}

