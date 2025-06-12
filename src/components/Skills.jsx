import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Code, 
  Database, 
  Cloud,
  FileCode2,
} from 'lucide-react'

import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaJava, 
  FaGit,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'

import { 
  SiMongodb, 
  SiMysql, 
  SiVercel 
} from 'react-icons/si'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 className="h-6 w-6" /> },
        { name: 'CSS', icon: <FaCss3Alt className="h-6 w-6" /> },
        { name: 'JavaScript', icon: <FileCode2 className="h-6 w-6" /> },
        { name: 'React', icon: <FaReact className="h-6 w-6" /> },
      ]
    },
    backend: {
      name: 'Backend',
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: 'Node.js', icon: <FaNode className="h-6 w-6" /> },
        { name: 'Python', icon: <FaPython className="h-6 w-6" /> },
        { name: 'Java', icon: <FaJava className="h-6 w-6" /> },
        { name: 'MongoDB', icon: <SiMongodb className="h-6 w-6" /> },
        { name: 'MySQL', icon: <SiMysql className="h-6 w-6" /> }
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: 'Git', icon: <FaGit className="h-6 w-6" /> },
        { name: 'GitHub', icon: <FaGithub className="h-6 w-6" /> },
        { name: 'Docker', icon: <FaDocker className="h-6 w-6" /> },
        { name: 'Vercel', icon: <SiVercel className="h-6 w-6" /> }
      ]
    }
  }

  return (
    <div className="min-h-screen flex items-center py-12">
      <div className="container max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground font-sans text-center">
            Skills
          </h2>

          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <Card 
                      key={skill.name}
                      className="p-4 flex flex-col items-center gap-4 hover:scale-105 transition-transform text-foreground font-sans"
                    >
                      {skill.icon}
                      <span className="font-medium text-lg font-sans">{skill.name}</span>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}