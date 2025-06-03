import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Chip,
  Skeleton,
  CardMedia,
  CardActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const GITHUB_USERNAME = "Srinivas-2410";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React, Material UI, and Tailwind CSS.",
    image: "/portfolio.png",
    technologies: ["React", "Material UI", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Srinivas-2410/portfolio",
    demo: "https://srinivas-portfolio.vercel.app",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        setRepos(data);
      } catch {
        setError("Could not fetch repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="min-h-screen px-4 py-10">
      <Box className="max-w-6xl mx-auto space-y-8">
        <Typography variant="h3" className="text-center font-bold">
          Featured Projects
        </Typography>

        {/* Featured Projects */}
        <Grid container spacing={4}>
          {projects.map((project, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                className="h-full transform transition-all duration-300 hover:shadow-xl"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="flex-grow">
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions className="p-4">
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* GitHub Repositories */}
        <Typography variant="h4" className="text-center font-bold mt-16">
          Recent GitHub Activity
        </Typography>
        <Grid container spacing={4}>
          {loading ? (
            // Loading skeletons
            [...Array(6)].map((_, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Card className="p-4">
                  <Skeleton variant="text" width="60%" height={32} />
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="80%" />
                </Card>
              </Grid>
            ))
          ) : error ? (
            <Box className="w-full text-center text-red-500">
              <Typography color="error">{error}</Typography>
            </Box>
          ) : (
            // GitHub repositories
            repos.map((repo) => (
              <Grid item xs={12} md={6} key={repo.id}>
                <Card
                  className="h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  sx={{
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {repo.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-4 line-clamp-2"
                    >
                      {repo.description || "No description provided."}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </section>
  );
}

