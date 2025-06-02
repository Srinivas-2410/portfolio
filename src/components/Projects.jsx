import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

// CHANGE THIS to your GitHub username
const GITHUB_USERNAME = "Srinivas-2410";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Srinivas-2410/project1",
    demo: "https://demo.project1.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch repositories");
        return res.json();
      })
      .then(setRepos)
      .catch(() => setError("Could not fetch repositories."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="mb-16">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Stack>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                  >
                    Code
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    target="_blank"
                  >
                    Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {loading ? (
        <div className="text-lg text-blue-600">Loading projects...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {repos.slice(0, 6).map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.03] hover:shadow-xl transition-transform dark:bg-gray-800"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                <p className="mb-3 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

