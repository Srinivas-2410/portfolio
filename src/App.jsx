import { useState, useMemo } from 'react';
import { 
  AppBar, 
  Tabs, 
  Tab, 
  Container, 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  IconButton,
  useMediaQuery
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [value, setValue] = useState(0);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

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
          MuiCard: {
            styleOverrides: {
              root: {
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: mode === 'light' 
                    ? '0 6px 20px rgba(0,0,0,0.1)' 
                    : '0 6px 20px rgba(0,0,0,0.4)',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="lg">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              indicatorColor="primary"
              textColor="primary"
              sx={{ flex: 1 }}
            >
              <Tab label="About" />
              <Tab label="Skills" />
              <Tab label="Projects" />
              <Tab label="Resume" />
              <Tab label="Contact" />
            </Tabs>
            <IconButton 
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              color="inherit"
              sx={{ ml: 2 }}
            >
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </div>
        </Container>
      </AppBar>

      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 4, 
          mb: 4,
          minHeight: 'calc(100vh - 64px)',
          animation: 'fadeIn 0.5s ease-in-out',
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
              transform: 'translateY(10px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        {value === 0 && <About />}
        {value === 1 && <Skills />}
        {value === 2 && <Projects />}
        {value === 3 && <Resume />}
        {value === 4 && <Contact />}
      </Container>
    </ThemeProvider>
  );
}

export default App;