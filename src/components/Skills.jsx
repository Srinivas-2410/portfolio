import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  LinearProgress,
} from '@mui/material';

const skills = [
  { 
    name: 'React', 
    level: 90,
    category: 'Frontend',
    color: '#3B82F6'
  },
  { 
    name: 'Node.js', 
    level: 85,
    category: 'Backend',
    color: '#22C55E'
  },
  { 
    name: 'Javascript', 
    level: 80,
    category: 'Language',
    color: '#EAB308'
  },
  { 
    name: 'MongoDB', 
    level: 75,
    category: 'Database',
    color: '#10B981'
  },
  { 
    name: 'Python', 
    level: 85,
    category: 'Language',
    color: '#6366F1'
  },
  { 
    name: 'MySQL', 
    level: 80,
    category: 'Database',
    color: '#F97316'
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <Card 
        elevation={3}
        className="w-full max-w-3xl transform transition-all duration-300 hover:shadow-xl"
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          p: 4
        }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          className="text-center font-bold mb-8"
          sx={{ color: 'primary.main' }}
        >
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} md={6} key={skill.name}>
              <Box 
                className="p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                sx={{ height: '100%' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <Typography variant="h6" className="font-semibold">
                      {skill.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      className="text-sm"
                    >
                      {skill.category}
                    </Typography>
                  </div>
                  <Typography 
                    variant="body2"
                    className="font-medium"
                  >
                    {skill.level}%
                  </Typography>
                </div>

                <Box sx={{ position: 'relative', mt: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: skill.color,
                        borderRadius: 4,
                      },
                      '@keyframes growWidth': {
                        from: { width: '0%' },
                        to: { width: '100%' }
                      },
                      animation: 'growWidth 1.5s ease-out'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Card>
    </section>
  );
}

