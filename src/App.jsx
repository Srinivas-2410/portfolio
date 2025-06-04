import React, { useState, useEffect, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Fab,
  Zoom,
  useScrollTrigger,
  Snackbar,
  Alert,
  Button,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  LightMode,
  DarkMode,
  GitHub,
  LinkedIn,
  Email,
  Phone,
} from '@mui/icons-material';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        color="primary"
        size="small"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
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
    severity: 'success',
  });

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
            main: mode === 'dark' ? '#bb86fc' : '#6366f1',
            light: mode === 'dark' ? '#d1c4e9' : '#818cf8',
            dark: mode === 'dark' ? '#7c4dff' : '#4f46e5',
          },
          secondary: {
            main: mode === 'dark' ? '#03dac6' : '#06b6d4',
          },
          background: {
            default: mode === 'dark' ? '#0f0f23' : '#fafafa',
            paper: mode === 'dark' ? '#1a1a2e' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#e8eaed' : '#1f2937',
            secondary: mode === 'dark' ? '#bdc3c7' : '#6b7280',
          },
        },
        typography: {
          fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          h1: {
            fontWeight: 700,
            background: mode === 'dark' 
              ? 'linear-gradient(135deg, #bb86fc 0%, #03dac6 100%)'
              : 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
          h2: {
            fontWeight: 600,
            color: mode === 'dark' ? '#e8eaed' : '#1f2937',
          },
          h3: {
            fontWeight: 600,
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: mode === 'dark' 
                  ? 'rgba(26, 26, 46, 0.9)'
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                boxShadow: isScrolled 
                  ? '0 8px 32px rgba(0, 0, 0, 0.1)'
                  : 'none',
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 500,
                padding: '8px 24px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                },
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                background: mode === 'dark' 
                  ? 'rgba(187, 134, 252, 0.1)'
                  : 'rgba(99, 102, 241, 0.1)',
                color: mode === 'dark' ? '#bb86fc' : '#6366f1',
                border: `1px solid ${mode === 'dark' ? 'rgba(187, 134, 252, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                '&:hover': {
                  background: mode === 'dark' 
                    ? 'rgba(187, 134, 252, 0.2)'
                    : 'rgba(99, 102, 241, 0.2)',
                },
              },
            },
          },
        },
      }),
    [mode, isScrolled]
  );

  const sections = [
    { name: 'About', component: <About /> },
    { name: 'Skills', component: <Skills /> },
    { name: 'Projects', component: <Projects /> },
    { name: 'Resume', component: <Resume /> },
    { name: 'Contact', component: <Contact /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Email />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: mode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: 3,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            mr: 2,
          }}
        >
          YN
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Your Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full Stack Developer
          </Typography>
        </Box>
      </Box>

      <List sx={{ '& .MuiListItem-root': { borderRadius: 2, mb: 1 } }}>
        {sections.map((section, index) => (
          <ListItem
            button
            key={section.name}
            onClick={() => {
              setActiveSection(index);
              handleDrawerToggle();
            }}
            sx={{
              backgroundColor: activeSection === index 
                ? (mode === 'dark' ? 'rgba(187, 134, 252, 0.1)' : 'rgba(99, 102, 241, 0.1)')
                : 'transparent',
              '&:hover': {
                backgroundColor: mode === 'dark' 
                  ? 'rgba(187, 134, 252, 0.05)'
                  : 'rgba(99, 102, 241, 0.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ListItemText
              primary={section.name}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: activeSection === index ? 600 : 400,
                  color: activeSection === index 
                    ? (mode === 'dark' ? '#bb86fc' : '#6366f1')
                    : 'inherit',
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', pt: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Connect with me
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: mode === 'dark' 
                  ? 'rgba(187, 134, 252, 0.1)'
                  : 'rgba(99, 102, 241, 0.1)',
                '&:hover': {
                  background: mode === 'dark' 
                    ? 'rgba(187, 134, 252, 0.2)'
                    : 'rgba(99, 102, 241, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: mode === 'dark'
            ? 'radial-gradient(ellipse at top, #1a1a2e 0%, #0f0f23 100%)'
            : 'radial-gradient(ellipse at top, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Srinivas
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 2 }}>
              {sections.map((section, index) => (
                <Button
                  key={section.name}
                  onClick={() => setActiveSection(index)}
                  sx={{
                    color: activeSection === index 
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    background: activeSection === index 
                      ? 'rgba(99, 102, 241, 0.1)'
                      : 'transparent',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.1)',
                    },
                    borderRadius: 2,
                    px: 2,
                  }}
                >
                  {section.name}
                </Button>
              ))}
            </Box>

            <IconButton
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              sx={{
                background: 'rgba(99, 102, 241, 0.1)',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  transform: 'rotate(180deg)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Box component="main" sx={{ pt: 8 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: 4,
              }}
            >
              {sections[activeSection].component}
            </Box>
          </Container>
        </Box>

        <ScrollTop />

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={() => setNotification({ ...notification, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert
            onClose={() => setNotification({ ...notification, open: false })}
            severity={notification.severity}
            sx={{
              width: '100%',
              borderRadius: 2,
              backdropFilter: 'blur(20px)',
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;