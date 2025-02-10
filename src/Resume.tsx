import React, { useState, useEffect } from 'react'
import { Mail, Github, ChevronDown } from 'lucide-react'

const PipBoyResume = () => {
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
  const skills = [
    { name: 'Python', icon: 'python-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'GoLang', icon: 'go-original-wordmark' },
    { name: 'React', icon: 'react-original' },
    { name: 'ASP.NET', icon: 'dotnetcore-plain' },
    { name: 'C++' },
  ]

  const tools = [
    { name: 'Docker', icon: 'docker-plain' },
    { name: 'PostgreSQL', icon: 'postgresql-plain' },
    { name: 'MongoDB', icon: 'mongodb-plain' },
    { name: 'SQLite', icon: 'sqlite-plain' },
    { name: 'Git', icon: 'git-plain' },
    { name: 'AWS', icon: 'amazonwebservices-original' }
  ]

  const projects = [
    {
      title: 'Code Playground',
      tech: 'React • Golang • Docker Engine',
      description: 'High-performance code playground',
      link: 'https://github.com/caner-cetin/code-cansu-dev'
    },
    {
      title: 'Media Player',
      tech: 'GoLang • PostgreSQL • React',
      description: 'Full-stack audio player demo with multichannel support',
      link: 'https://github.com/caner-cetin/dj-cansu-dev'
    },
    {
      title: 'LAMP Stack Automation',
      tech: 'SaltStack • Vagrant',
      description: 'Cross-platform automation for LAMP stack deployment',
      link: 'https://github.com/caner-cetin/saltstack-wordpress-mysql-setup'
    },
    {
      title: 'Trench',
      tech: 'Python • QT • OpenCV',
      description: 'Object extractor and upscaler GUI',
      link: 'https://github.com/caner-cetin/trench'
    },
    {
      title: 'Conan',
      tech: 'C++ • QT',
      description: 'infinite radio station integrated with foobar2000 (work in progress)',
      link: 'https://github.com/caner-cetin/conan'
    }
  ]

  return (
    <div className="min-h-screen bg-black p-4 font-fixedsys text-base flex items-center justify-center h-[calc(100vh-120px)] md:h-[calc(100vh-88px)] overflow-y-auto">
      <div className="w-full max-w-[1200px] min-h-[600px] bg-[#001800] rounded-lg relative overflow-hidden">
        {/* Status Bar */}
        <div className="border-b border-[#4AFA4A] px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center justify-between items-center gap-2 text-[#4AFA4A] text-sm">
          <div className="text-center md:text-left pip-boy-glow">CANER ÇETIN</div>
          <div className="text-center md:text-left">beep</div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="mailto:hello@cansu.dev"
              className="hover:text-[#2ADA2A] flex items-center gap-1"
              onMouseEnter={() => sounds.highlight.play()}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">CONTACT</span>
            </a>
            <a
              href="https://github.com/caner-cetin"
              className="hover:text-[#2ADA2A] flex items-center gap-1"
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
                <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedSections.includes('skills') ? 'rotate-180' : ''
                  }`} />
              </button>
              {expandedSections.includes('skills') && (
                <div className="p-3 border-t border-[#4AFA4A]">
                  <div className="grid grid-cols-3 gap-4">
                    {[...skills, ...tools].map(item => (
                      <div key={item.name} className="flex flex-col items-center gap-1">
                        {item.icon ? <i className={`devicon devicon-${item.icon} text-2xl`} title={item.name} /> : null}
                        <span className="text-xs text-center">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="border border-[#4AFA4A] rounded">
              <button
                className="w-full p-3 flex justify-between items-center"
                onClick={() => toggleSection('education')}
                onMouseEnter={handleSectionHover}
              >
                <span>EDUCATION</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedSections.includes('education') ? 'rotate-180' : ''
                  }`} />
              </button>
              {expandedSections.includes('education') && (
                <div className="p-3 border-t border-[#4AFA4A]">
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; Eastern Mediterranean University</div>
                    <div className="text-sm">BSc Computer Science</div>
                    <div className="text-sm opacity-80">2020-2025 (Expected)</div>
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
                <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedSections.includes('employment') ? 'rotate-180' : ''
                  }`} />
              </button>
              {expandedSections.includes('employment') && (
                <div className="p-3 border-t border-[#4AFA4A] space-y-4">
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; Boyner Büyük Mağazacılık</div>
                    <div className="text-sm">Backend Engineer - ASP.NET</div>
                    <div className="text-sm opacity-80">June 2024 - August 2024</div>
                  </div>
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; ElephantApps</div>
                    <div className="text-sm">Backend Engineer - Python / FastAPI</div>
                    <div className="text-sm opacity-80">March 2023 - January 2024</div>
                  </div>
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; VisitRise</div>
                    <div className="text-sm">Data Engineer - GoLang</div>
                    <div className="text-sm opacity-80">February 2023 - March 2023</div>
                  </div>
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
                <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedSections.includes('projects') ? 'rotate-180' : ''
                  }`} />
              </button>
              {expandedSections.includes('projects') && (
                <div className="p-3 border-t border-[#4AFA4A] space-y-4">
                  {projects.map(project => (
                    <div key={project.title} className="border-l-2 border-[#4AFA4A] pl-4">
                      <a
                        href={project.link}
                        className="block hover:text-[#2ADA2A]"
                        onMouseEnter={() => sounds.highlight.play()}
                      >
                        <div className="text-sm md:text-base">&gt; {project.title}</div>
                        <div className="text-sm">{project.tech}</div>
                        <div className="text-sm">{project.description}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop View - Keep existing tabbed layout */}
          <div className="hidden md:block">
            {activeTab === 'STATS' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12">
                  <div>
                    <h3 className="mb-4 md:block hidden">Primary Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 md:gap-3">
                      {skills.map(skill => (
                        <div key={skill.name} className="flex justify-between items-center">
                          <span className="md:inline hidden">{skill.name}</span>
                          <i className={`devicon devicon-${skill.icon} text-2xl md:text-base`}
                            title={skill.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 md:block hidden">Tools & Technologies</h3>
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-3">
                      {tools.map(tool => (
                        <div key={tool.name} className="flex justify-between items-center">
                          <span className="md:inline hidden">{tool.name}</span>
                          <i className={`devicon devicon-${tool.icon} text-2xl md:text-base`}
                            title={tool.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="mb-4">Education</h3>
                  <div className="border-l-2 border-[#4AFA4A] pl-4">
                    <div className="text-base">&gt; Eastern Mediterranean University</div>
                    <div className="text-sm">BSc Computer Science</div>
                    <div className="text-sm opacity-80">2020-2025 (Expected)</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'CAREER' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12">
                <div>
                  <h3 className="mb-4">Employment Records</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#4AFA4A] pl-4">
                      <div className="text-base">&gt; Boyner Büyük Mağazacılık</div>
                      <div className="text-sm">Backend Engineer - ASP.NET</div>
                      <div className="text-sm opacity-80">June 2024 - August 2024</div>
                    </div>
                    <div className="border-l-2 border-[#4AFA4A] pl-4">
                      <div className="text-base">&gt; ElephantApps</div>
                      <div className="text-sm">Backend Engineer - Python / FastAPI</div>
                      <div className="text-sm opacity-80">March 2023 - January 2024</div>
                    </div>
                    <div className="border-l-2 border-[#4AFA4A] pl-4">
                      <div className="text-base">&gt; VisitRise</div>
                      <div className="text-sm">Data Engineer - GoLang</div>
                      <div className="text-sm opacity-80">February 2023 - March 2023</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4">Project Archives</h3>
                  <div className="space-y-4">
                    {projects.map(project => (
                      <div key={project.title} className="border-l-2 border-[#4AFA4A] pl-4">
                        <a
                          href={project.link}
                          className="block hover:text-[#2ADA2A]"
                          onMouseEnter={() => sounds.highlight.play()}
                        >
                          <div className="text-sm md:text-base">&gt; {project.title}</div>
                          <div className="text-sm">{project.tech}</div>
                          <div className="text-sm">{project.description}</div>
                        </a>
                      </div>
                    ))}
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
              className={`flex-1 p-2 text-[#4AFA4A] ${activeTab === tab ? 'bg-[#4AFA4A] text-[#001800]' : ''
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

export default PipBoyResume

