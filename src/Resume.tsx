import React, { useState, useEffect } from 'react'
import { Mail, Github, ChevronDown, ExternalLink, BookOpen, Code, Database, Radio, LucideUpload, Music } from 'lucide-react'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('STATS')
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const sounds = {
    tab: new Audio('/audio/ui_pipboy_tab.wav'),
    select: new Audio('/audio/ui_pipboy_select.wav'),
    highlight: new Audio('/audio/ui_pipboy_highlight.wav'),
    mode: new Audio('/audio/ui_pipboy_mode.wav'),
    hum: new Audio('/audio/ui_pipboy_hum_lp.wav')
  }

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      if (newIsMobile !== isMobile) {
        sounds.mode.play()
        setIsMobile(newIsMobile)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  const handleTabChange = (newTab: string) => {
    sounds.tab.play()
    setActiveTab(newTab)
  }

  const toggleSection = (section: string) => {
    sounds.select.play()
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleSectionHover = () => {
    sounds.highlight.play()
  }

  const summary = `meep`

  const skills = [
    { name: 'Python', icon: 'python-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'GoLang', icon: 'go-original-wordmark' },
    { name: 'React', icon: 'react-original' },
    { name: 'ASP.NET', icon: 'dotnetcore-plain' },
    { name: 'C++', icon: 'cplusplus-plain' }
  ]

  const tools = [
    { name: 'Docker', icon: 'docker-plain' },
    { name: 'PostgreSQL', icon: 'postgresql-plain' },
    { name: 'MongoDB', icon: 'mongodb-plain' },
    { name: 'SQLite', icon: 'sqlite-plain' },
    { name: 'Git', icon: 'git-plain' },
    { name: 'AWS', icon: 'amazonwebservices-original' }
  ]

  const employment = [
    {
      company: 'Boyner Büyük Mağazacılık',
      role: 'Backend Engineer',
      tech: 'ASP.NET',
      period: 'June 2024 - August 2024',
    },
    {
      company: 'ElephantApps',
      role: 'Backend Engineer',
      tech: 'Python / FastAPI',
      period: 'March 2023 - January 2024',
    },
    {
      company: 'VisitRise',
      role: 'Data Engineer',
      tech: 'GoLang',
      period: 'February 2023 - March 2023',
    }
  ]

  const projects = [
    {
      title: 'Code Playground',
      tech: 'React • Golang • Docker Engine',
      description: 'Code playground with real-time compilation and execution',
      icon: <Code className="w-5 h-5" />,
      achievements: [
        'Containerized execution environment with Docker Engine API',
        'Lightweight and fast code execution',
      ],
      link: 'https://github.com/caner-cetin/code-cansu-dev',
      preview: 'https://code.cansu.dev'
    },
    {
      title: 'Media Player',
      tech: 'GoLang • PostgreSQL • React',
      description: 'Full-stack audio player demo',
      icon: <Radio className="w-5 h-5" />,
      achievements: [
        'Custom HLS based audio streaming',
        'Dual channel streaming with synchronized vocal and instrument streams',
      ],
      link: 'https://github.com/caner-cetin/dj-cansu-dev',
      preview: 'https://dj.cansu.dev'
    },
    {
      title: 'Strafe',
      tech: 'Golang • Docker Engine',
      description: 'Media upload and processing system for dj.cansu.dev (WIP)',
      icon: <Database className="w-5 h-5" />,
      achievements: [
        'RESTful API with Go Chi',
        'Automated media transcoding pipeline with Docker Engine API',
      ],
      link: 'https://github.com/caner-cetin/strafe'
    },
    {
      title: 'Trench',
      tech: 'Python • QT',
      description: 'Object extractor and upscaler GUI',
      icon: null,
      achievements: [
        'Easy to use QT GUI for RealESRGAN and Segment Anything',
        'OpenCV integration for SAM segmentation',
      ],
      link: 'https://github.com/caner-cetin/trench'
    },
    {
      title: 'Conan',
      tech: 'C++ • QT',
      description: 'Music recommendation engine (WIP)',
      icon: <Music className="w-5 h-5" />,
      achievements: [],
      link: 'https://github.com/caner-cetin/conan'
    },
    {
      title: 'LAMP Stack Automation',
      tech: 'SaltStack • Vagrant',
      description: 'Cross-platform automation for LAMP stack deployment',
      icon: <BookOpen className="w-5 h-5" />,
      achievements: [],
      link: 'https://github.com/caner-cetin/saltstack-wordpress-mysql-setup'
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="min-w-[300px] max-w-[400px] border-l-2 border-[#4AFA4A] pl-4 mr-6 flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        {project.icon}
        <span className="text-base font-bold">&gt; {project.title}</span>
      </div>
      <div className="text-sm text-[#3AEA3A]">{project.tech}</div>
      <div className="text-sm mb-2">{project.description}</div>
      <ul className="list-disc list-inside text-sm space-y-1 mb-2 flex-grow">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="text-[#3AEA3A]">{achievement}</li>
        ))}
      </ul>
      <div className="flex gap-3 mt-auto">
        <a
          href={project.link}
          className="text-sm hover:text-[#2ADA2A] flex items-center gap-1 transition-colors"
          onMouseEnter={() => sounds.highlight.play()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          <span>Source</span>
        </a>
        {project.preview && (
          <a
            href={project.preview}
            className="text-sm hover:text-[#2ADA2A] flex items-center gap-1 transition-colors"
            onMouseEnter={() => sounds.highlight.play()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Preview</span>
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black p-4 font-fixedsys text-base flex items-center justify-center h-[calc(100vh-120px)] md:h-[calc(100vh-88px)] overflow-y-auto">
      <div className="w-full max-w-[1200px] min-h-[600px] bg-[#001800] rounded-lg relative overflow-hidden">
        {/* Status Bar */}
        <div className="border-b border-[#4AFA4A] px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center justify-between items-center gap-2 text-[#4AFA4A] text-sm">
          <div className="text-center md:text-left pip-boy-glow">CANER ÇETIN</div>
          <div className="text-center md:text-left opacity-80">{summary}</div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="mailto:hello@cansu.dev"
              className="hover:text-[#2ADA2A] flex items-center gap-1 transition-colors"
              onMouseEnter={() => sounds.highlight.play()}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">CONTACT</span>
            </a>
            <a
              href="https://github.com/caner-cetin"
              className="hover:text-[#2ADA2A] flex items-center gap-1 transition-colors"
              onMouseEnter={() => sounds.highlight.play()}
            >
              <Github className="w-4 h-4" />
              <span className="hidden md:inline">GITHUB</span>
            </a>
            <span className="hidden md:inline">{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-6 text-[#4AFA4A] h-[calc(100%-88px)] overflow-y-auto">
          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {/* Skills & Tools Section */}
            <div className="border border-[#4AFA4A] rounded">
              <button
                className="w-full p-3 flex justify-between items-center"
                onClick={() => toggleSection('skills')}
                onMouseEnter={handleSectionHover}
              >
                <span>SKILLS & TOOLS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('skills') ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {expandedSections.includes('skills') && (
                <div className="p-3 border-t border-[#4AFA4A]">
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {[...skills, ...tools].map(item => (
                      <div key={item.name} className="flex flex-col items-center gap-1">
                        {item.icon && (
                          <i
                            className={`devicon devicon-${item.icon} text-2xl`}
                            title={item.name}
                          />
                        )}
                        <span className="text-xs text-center">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Employment Section */}
            <div className="border border-[#4AFA4A] rounded">
              <button
                className="w-full p-3 flex justify-between items-center"
                onClick={() => toggleSection('employment')}
                onMouseEnter={handleSectionHover}
              >
                <span>EMPLOYMENT</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('employment') ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {expandedSections.includes('employment') && (
                <div className="p-3 border-t border-[#4AFA4A] space-y-4">
                  {employment.map(job => (
                    <div key={job.company} className="border-l-2 border-[#4AFA4A] pl-4">
                      <div className="text-base font-bold">&gt; {job.company}</div>
                      <div className="text-sm">{job.role} - {job.tech}</div>
                      <div className="text-sm opacity-80 mb-2">{job.period}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Section */}
            <div className="border border-[#4AFA4A] rounded">
              <button
                className="w-full p-3 flex justify-between items-center"
                onClick={() => toggleSection('projects')}
                onMouseEnter={handleSectionHover}
              >
                <span>PROJECTS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('projects') ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {expandedSections.includes('projects') && (
                <div className="p-3 border-t border-[#4AFA4A] space-y-4 max-h-[400px] overflow-y-auto">
                  {projects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {activeTab === 'STATS' && (
              <div className="space-y-8">
                {/* Technical Skills Grid */}
                <div className="grid grid-cols-2 gap-6 md:gap-x-12">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Primary Skills</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {skills.map(skill => (
                        <div key={skill.name}
                          className="flex flex-col items-center p-3 bg-[#002800] rounded hover:bg-[#003800] transition-colors gap-2">
                          <i className={`devicon devicon-${skill.icon} text-3xl`} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Tools & Technologies</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {tools.map(tool => (
                        <div
                          key={tool.name}
                          className="flex flex-col items-center p-3 bg-[#002800] rounded hover:bg-[#003800] transition-colors gap-2"
                        >
                          <i className={`devicon devicon-${tool.icon} text-3xl`} />
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Education</h3>
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; Eastern Mediterranean University</div>
                    <div className="text-sm">
                      <div className="text-sm">BSc Computer Science</div>
                      <div className="text-sm opacity-80">2020-2025 (Expected)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'CAREER' && (
              <div className="space-y-6 mb-16">
                <div>
                  <h3 className="text-lg font-bold mb-4">Employment Records</h3>
                  <div className="space-y-6">
                    {employment.map(job => (
                      <div key={job.company} className="border-l-2 border-[#4AFA4A] pl-4">
                        <div className="text-base font-bold">&gt; {job.company}</div>
                        <div className="text-sm">{job.role} - {job.tech}</div>
                        <div className="text-sm opacity-80 mb-2">{job.period}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4">Project Archives</h3>
                  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#4AFA4A] scrollbar-track-[#002800] pb-4">
                    <div className="flex">
                      {projects.map(project => (
                        <ProjectCard key={project.title} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs - Only show on desktop */}
        <div className="hidden md:flex sticky md:absolute bottom-0 left-0 right-0 border-t border-[#4AFA4A] bg-[#001800]">
          {['STATS', 'CAREER'].map(tab => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              onMouseEnter={() => sounds.highlight.play()}
              className={`flex-1 p-2 text-[#4AFA4A] transition-colors ${activeTab === tab ? 'bg-[#4AFA4A] text-[#001800]' : ''
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume