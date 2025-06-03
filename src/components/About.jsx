import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { Moon, Sun, Menu, X } from 'lucide-react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#60a5fa' : '#3b82f6',
          },
          background: {
            default: mode === 'dark' ? '#0f172a' : '#ffffff',
            paper: mode === 'dark' ? '#1e293b' : '#f8fafc',
          },
        },
        typography: {
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        },
      }),
    [mode]
  );

  const navigation = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'contact', label: 'Contact', icon: '📬' },
  ];

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'resume': return <Resume />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`min-h-screen transition-colors duration-300 ${
        mode === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        {/* Navigation Header */}
        <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
          mode === 'dark' 
            ? 'bg-slate-900/80 border-slate-700' 
            : 'bg-white/80 border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className={`text-xl font-bold bg-gradient-to-r ${
                  mode === 'dark' 
                    ? 'from-blue-400 to-purple-400' 
                    : 'from-blue-600 to-purple-600'
                } bg-clip-text text-transparent`}>
                  Your Portfolio
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeSection === item.id
                          ? mode === 'dark'
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : mode === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    mode === 'dark'
                      ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                    mode === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`md:hidden border-t transition-all duration-300 ${
              mode === 'dark' 
                ? 'bg-slate-900/95 border-slate-700' 
                : 'bg-white/95 border-gray-200'
            }`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeSection === item.id
                        ? mode === 'dark'
                          ? 'bg-blue-500 text-white'
                          : 'bg-blue-500 text-white'
                        : mode === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-slate-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-fade-in">
              {renderActiveComponent()}
            </div>
          </div>
        </main>

        {/* Floating Action Indicators */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-2">
          {navigation.map((item, index) => (
            <div
              key={item.id}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-blue-500 scale-125'
                  : mode === 'dark'
                    ? 'bg-slate-600'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;