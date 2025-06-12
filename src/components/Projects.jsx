import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { 
  Github,
  ExternalLink,
  Star,
  GitFork
} from 'lucide-react';

const GITHUB_USERNAME = "Srinivas-2410";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hoveredRepo, setHoveredRepo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
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
              // No package.json found
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
      <section className="container max-w-6xl py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground font-sans">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-6 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-5 w-[100px]" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="container max-w-6xl py-16">
        <p className="text-destructive text-center">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 md:py-16">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground font-sans">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className={`p-6 space-y-4 transition-all duration-300 hover:shadow-lg
                border border-border/50 bg-card text-foreground
                ${hoveredRepo === repo.id ? 'transform -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredRepo(repo.id)}
              onMouseLeave={() => setHoveredRepo(null)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-primary font-sans">
                  {repo.name}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span className="text-sm">{repo.forks_count}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground min-h-[3rem] font-sans">
                {repo.description || 'No description available.'}
              </p>

              {repo.technologies && (
                <div className="flex flex-wrap gap-2">
                  {repo.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-primary/5 hover:bg-primary/10 font-sans"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {repo.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-primary/10 font-sans"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      +{repo.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                {repo.homepage && (
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(repo.homepage, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}