import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Container,
  Skeleton,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Star,
  ForkRight,
} from '@mui/icons-material';

const GITHUB_USERNAME = "Srinivas-2410";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hoveredRepo, setHoveredRepo] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
        // Fetch package.json for each repo to get technologies
        const reposWithTech = await Promise.all(
          data.map(async (repo) => {
            try {
              const pkgResponse = await fetch(
                `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/package.json`
              );
              if (pkgResponse.ok) {
                const pkgData = await pkgResponse.json();
                const technologies = [
                  ...Object.keys(pkgData.dependencies || {}),
                  ...Object.keys(pkgData.devDependencies || {})
                ];
                return { ...repo, technologies };
              }
            } catch {
              console.log(`No package.json found for ${repo.name}`);
            }
            return repo;
          })
        );
        
        setRepos(reposWithTech);
      } catch (err) {
        setError('Could not fetch repositories.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" className="py-16">
      <Typography 
        variant="h3" 
        className="text-center font-bold"
        sx={{
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingBottom: 2,
        borderBottom: `2px solid ${theme.palette.mode === 'dark' ? '#93c5fd' : '#6366f1'}`,
        marginBottom: 4,
        color: theme.palette.mode === 'dark' ? '#93c5fd' : '#6366f1',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {[...Array(6)].map((_, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
          sx={{
            background: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'}`,
          }}
          >
          <CardContent>
            <Skeleton variant="text" width="60%" height={32} />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Skeleton variant="rectangular" width={60} height={24} />
            <Skeleton variant="rectangular" width={60} height={24} />
            </Box>
          </CardContent>
          </Card>
        </Grid>
        ))}
      </Grid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" className="py-16">
        <Typography color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'}`,
    borderRadius: 2,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: theme.palette.mode === 'dark'
        ? '0 20px 40px rgba(0, 0, 0, 0.4)'
        : '0 20px 40px rgba(0, 0, 0, 0.1)',
      borderColor: theme.palette.mode === 'dark'
        ? '#93c5fd40'
        : theme.palette.primary.main + '40',
    },
  };

  const titleStyles = {
    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
    textAlign: 'center',
    fontWeight: 'bold',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
      : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mb: { xs: 8, md: 12 }, // Increased margin bottom
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -16,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
        : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      borderRadius: '2px',
    }
  };

  const chipStyles = {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(147, 197, 253, 0.15)' 
      : 'rgba(99, 102, 241, 0.1)',
    color: theme.palette.mode === 'dark' 
      ? '#93c5fd' 
      : '#6366f1',
    fontSize: '0.7rem',
    fontWeight: 500,
  };

  const buttonStyles = {
    outlined: {
      borderColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.23)' 
        : 'rgba(0, 0, 0, 0.23)',
      color: theme.palette.mode === 'dark' 
        ? 'white' 
        : 'inherit',
      '&:hover': {
        borderColor: theme.palette.mode === 'dark' 
          ? '#93c5fd' 
          : theme.palette.primary.main,
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(147, 197, 253, 0.08)'
          : 'rgba(99, 102, 241, 0.08)',
        transform: 'translateY(-2px)',
      },
    },
    contained: {
      background: theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #93c5fd 0%, #a5b4fc 100%)'
        : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      '&:hover': {
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #a5b4fc 0%, #93c5fd 100%)'
          : 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        transform: 'translateY(-2px)',
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={titleStyles}
        >
          My Projects
        </Typography>
        
        <Grid container spacing={4}>
          {repos.map((repo) => (
            <Grid item xs={12} md={6} key={repo.id}>
              <Card
                onMouseEnter={() => setHoveredRepo(repo.id)}
                onMouseLeave={() => setHoveredRepo(null)}
                sx={{ ...cardStyles, transform: hoveredRepo === repo.id ? 'translateY(-8px)' : 'translateY(0)' }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' 
                          ? '#93c5fd' 
                          : theme.palette.primary.main
                      }}
                    >
                      {repo.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <Tooltip title="Stars">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Star sx={{ fontSize: 16, color: '#f59e0b' }} />
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              ml: 0.5,
                              color: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.7)' 
                                : 'text.secondary'
                            }}
                          >
                            {repo.stargazers_count}
                          </Typography>
                        </Box>
                      </Tooltip>
                      <Tooltip title="Forks">
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <ForkRight 
                            sx={{ 
                              fontSize: 16,
                              color: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.7)' 
                                : 'text.secondary'
                          }} 
                          />
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              ml: 0.5,
                              color: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.7)' 
                                : 'text.secondary'
                            }}
                          >
                            {repo.forks_count}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </Box>
                  </Box>

                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.7)' 
                        : 'text.secondary',
                      flexGrow: 1
                    }}
                  >
                    {repo.description || 'No description available.'}
                  </Typography>

                  {repo.technologies && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {repo.technologies.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={chipStyles}
                        />
                      ))}
                      {repo.technologies.length > 4 && (
                        <Chip
                          label={`+${repo.technologies.length - 4} more`}
                          size="small"
                          sx={{
                            ...chipStyles,
                            cursor: 'pointer',
                            opacity: 0.8,
                            '&:hover': {
                              opacity: 1,
                              textDecoration: 'underline',
                            },
                          }}
                          onClick={() => {
                            window.open(
                              `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
                              '_blank'
                            );
                          }}
                        />
                      )}
                    </Box>
                  )}

                  <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHub />}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ...buttonStyles.outlined, flex: 1 }}
                    >
                      Code
                    </Button>
                    {repo.homepage && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Launch />}
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ ...buttonStyles.contained, flex: 1 }}
                      >
                        Demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}