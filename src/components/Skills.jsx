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
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript/TypeScript', level: 90, icon: '🟨' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'Vue.js', level: 75, icon: '💚' },
      ]
    },
    backend: {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚂' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'API Development', level: 90, icon: '🔗' },
      ]
    },
    design: {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'Adobe XD', level: 75, icon: '🔷' },
        { name: 'Photoshop', level: 70, icon: '📸' },
        { name: 'UI/UX Design', level: 85, icon: '✨' },
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'Design Systems', level: 80, icon: '🧩' },
      ]
    },
    cloud: {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Git/GitHub', level: 90, icon: '🔄' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Netlify', level: 80, icon: '🌐' },
        { name: 'CI/CD', level: 70, icon: '🔧' },
      ]
    }
  };

  const otherSkills = [
    { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'], icon: '💬' },
    { category: 'Frameworks', skills: ['React', 'Next.js', 'Express.js', 'Tailwind CSS'], icon: '🏗️' },
    { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'], icon: '🗄️' },
    { category: 'Tools', skills: ['VS Code', 'Git', 'Figma', 'Postman', 'Docker'], icon: '🛠️' },
  ];

  const SkillBar = ({ skill, delay = 0 }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: animated ? `${skill.level}%` : '0%',
              transition: `width 1000ms ease-out ${delay}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

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

