import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Tabs,
  Tab,
  Fade,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Html as HtmlIcon,
  Javascript as JavascriptIcon,
  Css as CssIcon,
} from '@mui/icons-material';

// Add these specific imports from react-icons
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaJava, 
  FaGitAlt,
  FaGithub,
  FaDocker 
} from 'react-icons/fa';

import { 
  SiMongodb, 
  SiMysql, 
  SiVercel 
} from 'react-icons/si';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const theme = useTheme();

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: <CodeIcon />,
      skills: [
        { name: 'HTML', icon: <HtmlIcon fontSize="large" /> },
        { name: 'CSS', icon: <CssIcon fontSize="large" /> },
        { name: 'JavaScript', icon: <JavascriptIcon fontSize="large" /> },
        { name: 'React', icon: <FaReact size={28} /> },
      ]
    },
    backend: {
      name: 'Backend',
      icon: <StorageIcon />,
      skills: [
        { name: 'Node.js', icon: <FaNode size={28} /> },
        { name: 'Python', icon: <FaPython size={28} /> },
        { name: 'Java', icon: <FaJava size={28} /> },
        { name: 'MongoDB', icon: <SiMongodb size={28} /> },
        { name: 'MySQL', icon: <SiMysql size={28} /> }
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      icon: <CloudIcon />,
      skills: [
        { name: 'Git', icon: <FaGitAlt size={28} /> },
        { name: 'GitHub', icon: <FaGithub size={28} /> },
        { name: 'Docker', icon: <FaDocker size={28} /> },
        { name: 'Vercel', icon: <SiVercel size={28} /> }
      ]
    }
  };

  return (
    <Container maxWidth="xl">
      <Fade in timeout={1000}>
        <Box 
          sx={{ 
            py: { xs: 6, md: 12 },
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6
          }}
        >
          <Typography
            variant="h2"
            className="text-center font-bold"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 4, md: 6 }
            }}
          >
            Skills
          </Typography>

          <Tabs
            value={activeCategory}
            onChange={(e, newValue) => setActiveCategory(newValue)}
            centered
            sx={{
              mb: { xs: 4, md: 8 },
              '& .MuiTab-root': {
                fontSize: { xs: '1rem', md: '1.25rem' },
                minHeight: { xs: 48, md: 64 },
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.7)' 
                  : 'rgba(0, 0, 0, 0.7)',
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: '1.5rem', md: '2rem' }
                },
                '&.Mui-selected': {
                  color: theme.palette.mode === 'dark' 
                    ? '#93c5fd' 
                    : '#6366f1',
                },
                '&:hover': {
                  color: theme.palette.mode === 'dark' 
                    ? '#93c5fd' 
                    : '#6366f1',
                }
              }
            }}
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <Tab
                key={key}
                value={key}
                label={category.name}
                icon={category.icon}
              />
            ))}
          </Tabs>

          <Grid 
            container 
            spacing={{ xs: 3, md: 5 }}
            justifyContent="center"
            alignItems="center"
            sx={{ 
              maxWidth: 1200, 
              margin: '0 auto',
              px: { xs: 2, md: 4 }
            }}
          >
            {skillCategories[activeCategory].skills.map((skill) => (
              <Grid item xs={6} sm={4} md={3} key={skill.name}>
                <Tooltip title={skill.name}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                      padding: { xs: 3, md: 4 },
                      borderRadius: 3,
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      border: `1px solid ${theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)'}`,
                      color: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.8)' 
                        : 'rgba(0, 0, 0, 0.8)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '& svg': {
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderColor: theme.palette.mode === 'dark'
                          ? '#93c5fd'
                          : '#6366f1',
                        color: theme.palette.mode === 'dark' 
                          ? '#93c5fd' 
                          : '#6366f1',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                          : '0 8px 32px rgba(0, 0, 0, 0.1)',
                        '& svg': {
                          transform: 'scale(1.1)'
                        }
                      }
                    }}
                  >
                    {skill.icon}
                    <Typography 
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
}