import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { 
  Menu,
  Sun,
  Moon,
  Mail,
  ChevronUp
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  )
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  const sections = [
    { name: 'About', component: <About /> },
    { name: 'Skills', component: <Skills /> },
    { name: 'Projects', component: <Projects /> },
    { name: 'Resume', component: <Resume /> },
    { name: 'Contact', component: <Contact /> }
  ]

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, url: 'https://github.com/Srinivas-2410', label: 'GitHub' },
    { icon: <FaLinkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/srinivas-k-s', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:srinivasks@gmail.com', label: 'Email' }
  ]

  const MobileDrawer = () => (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/image.png" alt="Srinivas K S" />
          <AvatarFallback>SK</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Srinivas K S</h3>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>
      </div>

      <nav className="space-y-2">
        {sections.map((section, index) => (
          <Button
            key={section.name}
            variant={activeSection === index ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveSection(index)
              setMobileOpen(false)
            }}
          >
            {section.name}
          </Button>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
        <div className="flex gap-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-accent transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className={theme}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg transition-all duration-300
          ${isScrolled ? 'bg-background/80 shadow-md' : 'bg-background/50'}`}>
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <MobileDrawer />
                </SheetContent>
              </Sheet>
              
              <span className="text-xl font-bold text-foreground">
                Srinivas
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {sections.map((section, index) => (
                <Button
                  key={section.name}
                  variant={activeSection === index ? "secondary" : "ghost"}
                  onClick={() => setActiveSection(index)}
                >
                  {section.name}
                </Button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-transform hover:rotate-180 duration-300"
            >
              {theme === 'light' ? 
                <Moon className="h-5 w-5" /> : 
                <Sun className="h-5 w-5" />
              }
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container pt-24 pb-16">
          <div className="min-h-[calc(100vh-8rem)]">
            {sections[activeSection].component}
          </div>
        </main>

        {/* Scroll to Top */}
        <Button
          variant="secondary"
          size="icon"
          className={`fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300
            ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}