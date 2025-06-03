import { useState, useEffect } from 'react';
import { Code, Database, Palette, Cloud, Smartphone, Globe } from 'lucide-react';

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
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and expertise across different domains
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-current/25 scale-105`
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Active Category Skills */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}>
              {skillCategories[activeCategory].icon}
            </div>
            <h2 className="text-2xl