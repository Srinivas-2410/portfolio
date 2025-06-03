import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Box,
  Tabs,
  Tab,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import CloudIcon from '@mui/icons-material/Cloud';

const skillCategories = {
  frontend: {
    icon: <CodeIcon />,
    title: 'Frontend Development',
    color: '#3B82F6',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 75 },
    ]
  },
  backend: {
    icon: <StorageIcon />,
    title: 'Backend Development',
    color: '#22C55E',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'API Development', level: 90 },
    ]
  },
  design: {
    icon: <BrushIcon />,
    title: 'Design & Tools',
    color: '#A855F7',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Photoshop', level: 70 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Design Systems', level: 80 },
    ]
  },
  cloud: {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    color: '#F97316',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 },
      { name: 'CI/CD', level: 70 },
    ]
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const handleCategoryChange = (event, newValue) => {
    setAnimated(false);
    setActiveCategory(newValue);
    setTimeout(() => setAnimated(true), 100);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card 
        elevation={3}
        className="w-full max-w-3xl transform transition-all duration-300 hover:shadow-xl"
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2
        }}
      >
        <CardContent className="p-8">
          <Typography 
            variant="h3" 
            className="text-center font-bold mb-8"
            sx={{ color: 'primary.main' }}
          >
            Skills & Expertise
          </Typography>

          <Tabs
            value={activeCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            className="mb-8"
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <Tab
                key={key}
                value={key}
                label={
                  <Box className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.title}</span>
                  </Box>
                }
              />
            ))}
          </Tabs>

          <Grid container spacing={4}>
            {skillCategories[activeCategory].skills.map((skill) => (
              <Grid item xs={12} md={6} key={skill.name}>
                <Box className="space-y-2">
                  <Box className="flex justify-between items-center">
                    <Typography variant="subtitle1" fontWeight="medium">
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={animated ? skill.level : 0}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: skillCategories[activeCategory].color,
                        borderRadius: 4,
                        transition: 'transform 1s ease-out'
                      }
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
}

