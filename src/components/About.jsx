import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Award, Users } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Calendar className="w-5 h-5" />, label: 'Years Experience', value: '3+' },
    { icon: <Award className="w-5 h-5" />, label: 'Projects Completed', value: '25+' },
    { icon: <Users className="w-5 h-5" />, label: 'Happy Clients', value: '15+' },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/yourusername', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-600' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:your.email@example.com', color: 'hover:text-red-500' },
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 mb-12">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  {/* Replace with your actual image */}
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Srinivas
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-300">Bengaluru, Karnataka, India</span>
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Full-Stack Developer & UI/UX Enthusiast
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                I specialize in modern web technologies and love turning complex problems into simple, 
                elegant solutions. When I'm not coding, you'll find me exploring new technologies or 
                contributing to open-source projects.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 transition-all duration-200 ${link.color} hover:border-current hover:shadow-lg hover:scale-105`}
                  >
                    {link.icon}
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-slate-700"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What I Do */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            What I Do
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Creating responsive, interactive user interfaces with React, Vue, and modern CSS frameworks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building robust APIs and server-side applications with Node.js, Python, and cloud services.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Designing user-centered experiences with a focus on accessibility and modern design principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Journey */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            My Journey
          </h2>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-blue-500">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">2023 - Present</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Senior Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Leading development of scalable web applications and mentoring junior developers.
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-purple-500">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">2021 - 2023</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Full-Stack Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Developed and maintained multiple client projects using modern web technologies.
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-pink-500">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
              <div className="text-sm text-pink-600 dark:text-pink-400 font-medium mb-1">2020 - 2021</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Started my journey building responsive websites and learning modern frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
          <span className="text-2xl">✨</span>
          Fun Facts About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">☕</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Coffee cups per day: 4-6</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌙</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Favorite coding time: Late night</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎮</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hobbies: Gaming & Photography</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎵</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Coding playlist: Lo-fi & Jazz</div>
          </div>
        </div>
      </div>
    </div>
  );
}