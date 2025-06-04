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
        { 
          name: 'HTML', 
          icon: <HtmlIcon 
            sx={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(0, 0, 0, 0.9)' 
            }} 
          /> 
        },
        { 
          name: 'CSS', 
          icon: <CssIcon 
            sx={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(0, 0, 0, 0.9)' 
            }} 
          /> 
        },
        { 
          name: 'JavaScript', 
          icon: <JavascriptIcon 
            sx={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(0, 0, 0, 0.9)' 
            }} 
          /> 
        },
        { 
          name: 'React', 
          icon: <FaReact 
            size={28} 
            style={{ 
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(0, 0, 0, 0.9)' 
            }} 
          /> 
        },
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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, sm: 8, md: 10 },
        overflow: 'hidden', // Prevent any potential horizontal scroll
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{ 
          position: 'relative',
          zIndex: 1
        }}
      >
        <Fade in timeout={1000}>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 4, sm: 6, md: 8 },
              width: '100%'
            }}
          >
            {/* Title Section */}
            <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { 
                    xs: '2rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3.5rem'
                  },
                  fontWeight: 700,
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
                    : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: 1, sm: 2 }
                }}
              >
                Skills
              </Typography>
            </Box>

            {/* Tabs Section */}
            <Box sx={{ width: '100%', overflowX: 'auto', mb: { xs: 3, sm: 4 } }}>
              <Tabs
                value={activeCategory}
                onChange={(e, newValue) => setActiveCategory(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  minHeight: { xs: 48, sm: 56 },
                  '& .MuiTabs-flexContainer': {
                    gap: { xs: 2, sm: 3 }
                  },
                  '& .MuiTab-root': {
                    minHeight: { xs: 48, sm: 56 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    px: { xs: 2, sm: 3 },
                    minWidth: 'auto',
                    '& .MuiSvgIcon-root': {
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
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
            </Box>

            {/* Skills Grid */}
            <Grid 
              container 
              spacing={{ xs: 2, sm: 3, md: 4 }}
              sx={{ 
                maxWidth: '100%',
                margin: '0 auto',
                justifyContent: 'center'
              }}
            >
              {skillCategories[activeCategory].skills.map((skill) => (
                <Grid 
                  item 
                  xs={6} 
                  sm={4} 
                  md={3} 
                  key={skill.name}
                >
                  <Tooltip title={skill.name} arrow>
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        p: { xs: 2, sm: 3 },
                        borderRadius: 2,
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(244, 238, 238, 0.05)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        border: `1px solid ${theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)'}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(255, 255, 255, 0.9)',
                          borderColor: theme.palette.mode === 'dark'
                            ? '#93c5fd'
                            : '#6366f1',
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 4px 20px rgba(0, 0, 0, 0.4)'
                            : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        }
                      }}
                    >
                      {React.cloneElement(skill.icon, {
                        sx: {
                          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                          transition: 'all 0.3s ease',
                          color: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.9)' 
                            : 'rgba(0, 0, 0, 0.9)',
                        }
                      })}
                      <Typography 
                        variant="body2"
                        sx={{
                          fontWeight: 500,
                          fontSize: {
                            xs: '0.75rem',
                            sm: '0.875rem',
                            md: '1rem'
                          },
                          textAlign: 'center',
                          color: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.9)' 
                            : 'rgba(0, 0, 0, 0.9)',
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
    </Box>
  );
}