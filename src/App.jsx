import { useState, useMemo, useEffect } from 'react';
import { 
  AppBar, 
  Container, 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  IconButton,
  useMediaQuery,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Fade,
  Fab,
  Snackbar,
  Alert
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

// Scroll to Top Component
function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 50
        }}
      >
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          sx={{
            '&:hover': {
              transform: 'translateY(-4px)',
              transition: 'transform 0.2s ease-in-out'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const sections = ['About', 'Skills', 'Projects', 'Resume', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#2196f3' : '#90caf9',
          },
          secondary: {
            main: mode === 'light' ? '#f50057' : '#f73378',
          },
          background: {
            default: mode === 'light' ? '#f5f5f5' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h4: {
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.01562em',
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            letterSpacing: '0.00938em',
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backdropFilter: 'blur(8px)',
                backgroundColor: mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'rgba(18, 18, 18, 0.8)',
                boxShadow: isScrolled 
                  ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  : 'none',
                transition: 'all 0.3s ease-in-out',
              }
            }
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '9999px',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                }
              }
            }
          }
        }
      }),
    [mode, isScrolled]
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <AppBar 
        position="fixed" 
        elevation={isScrolled ? 1 : 0}
      >
        <Container maxWidth="lg">
          <Box className="flex items-center justify-between h-16">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="sm:hidden"
            >
              <MenuIcon />
            </IconButton>

            <Box className="hidden sm:flex items-center justify-center flex-1 gap-2">
              {sections.map((section, index) => (
                <IconButton
                  key={section}
                  onClick={() => setActiveSection(index)}
                  sx={{
                    borderRadius: '9999px',
                    px: 3,
                    py: 1,
                    color: activeSection === index ? 'primary.main' : 'inherit',
                    backgroundColor: activeSection === index 
                      ? mode === 'light' ? 'rgba(33, 150, 243, 0.08)' : 'rgba(144, 202, 249, 0.08)'
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: mode === 'light' 
                        ? 'rgba(0, 0, 0, 0.04)' 
                        : 'rgba(255, 255, 255, 0.08)'
                    }
                  }}
                >
                  {section}
                </IconButton>
              ))}
            </Box>

            <IconButton 
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              color="inherit"
            >
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <List>
          {sections.map((section, index) => (
            <ListItem 
              button 
              key={section}
              onClick={() => {
                setActiveSection(index);
                handleDrawerToggle();
              }}
              selected={activeSection === index}
            >
              <ListItemText primary={section} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container 
        component="main" 
        maxWidth="lg"
        sx={{
          pt: '80px',
          minHeight: '100vh',
          animation: 'fadeIn 0.5s ease-in-out',
          '@keyframes fadeIn': {
            from: {
              opacity: 0,
              transform: 'translateY(10px)'
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}
      >
        {activeSection === 0 && <About />}
        {activeSection === 1 && <Skills />}
        {activeSection === 2 && <Projects />}
        {activeSection === 3 && <Resume />}
        {activeSection === 4 && <Contact />}
      </Container>

      <ScrollTop />

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setNotification({ ...notification, open: false })} 
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;