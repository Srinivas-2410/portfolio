import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Box
} from '@mui/material';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Javascript', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Python', level: 85 },
  { name: 'MySQL', level: 80 },
];

export default function Skills() {
  return (
    <Card elevation={3} sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          Skills
        </Typography>
        
        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill.name}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level}
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

