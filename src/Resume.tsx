import React, { useState, useEffect } from 'react'
import { Mail, Github, ChevronDown, ExternalLink, BookOpen, Code, Database, LucideUpload, Music, Server, Cpu, Monitor, GitBranch, FileCode, PenTool } from 'lucide-react' // Added more relevant icons

const Resume = () => {
  // Sounds logic remains the same - assuming you want to keep it
  const [activeTab, setActiveTab] = useState('INFO') // Changed default tab name
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Sounds can be kept if desired, or removed
  const sounds = {
    tab: new Audio('/audio/ui_pipboy_tab.wav'),
    select: new Audio('/audio/ui_pipboy_select.wav'),
    highlight: new Audio('/audio/ui_pipboy_highlight.wav'),
    mode: new Audio('/audio/ui_pipboy_mode.wav'),
  }

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        sounds.mode.play(); // Optional sound
        setIsMobile(newIsMobile);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]); // Removed sounds dependency if unused

  const handleTabChange = (newTab: string) => {
    sounds.tab.play(); // Optional sound
    setActiveTab(newTab);
  };

  const toggleSection = (section: string) => {
    sounds.select.play(); // Optional sound
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSectionHover = () => {
    sounds.highlight.play(); // Optional sound
  };

  // --- UPDATED CONTENT ---

  const skills = [
    { category: 'Backend & API', items: ['Go (Chi)', 'Python (FastAPI, Django)', 'Kotlin', 'ASP.NET Core', 'RESTful API Design', 'WebSockets'], icon: <Server className="w-4 h-4 mr-1" /> },
    { category: 'DevOps & Infra', items: ['Docker (Engine API, Networking)', 'IaC', 'CI/CD (GitHub Actions)', 'Cloudflare (R2, Pages)', 'Linux Server Provisioning/Mgmt', 'Nginx'], icon: <Cpu className="w-4 h-4 mr-1" /> },
    { category: 'Databases & Cache', items: ['PostgreSQL', 'MongoDB', 'Redis (DragonflyDB)', 'SQLite'], icon: <Database className="w-4 h-4 mr-1" /> },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'Loki', 'cAdvisor', 'Node Exporter', 'Uptime Kuma', 'OTEL (conceptual)'], icon: <Monitor className="w-4 h-4 mr-1" /> },
    { category: 'Tools', items: ['Git', 'Shell Scripting', 'S3 Storage', 'Secrets Management', 'HLS/FFMPEG', 'Plane.dev', 'Vagrant'], icon: <PenTool className="w-4 h-4 mr-1" /> },
    { category: 'Frontend (Supporting)', items: ['TypeScript', 'React', 'TailwindCSS', 'Zustand', 'TanStack Router/Query'], icon: <FileCode className="w-4 h-4 mr-1" /> },
  ];

  const employment = [
    {
      company: 'Boyner Büyük Mağazacılık',
      role: 'Backend Engineer Intern',
      tech: 'ASP.NET',
      period: 'June 2024 - Aug 2024',
      location: 'Istanbul, TR',
      // No bullet points
    },
    {
      company: 'ElephantApps',
      role: 'Backend Engineer',
      tech: 'Python / FastAPI',
      period: 'Mar 2023 - Jan 2024',
      location: 'Istanbul, TR',
      // No bullet points
    },
    {
      company: 'VisitRise',
      role: 'Data Engineer (Contract)',
      tech: 'GoLang',
      period: 'Feb 2023 - Mar 2023',
      location: 'Remote',
      // No bullet points
    }
  ];

  const projects = [
    {
      title: 'Oblivion - Personal DevOps Toolkit',
      tech: 'Go (Cobra) • Docker API • 1Password • TOML',
      description: 'CLI for personal IaC & Docker service provisioning.',
      icon: <LucideUpload className="w-5 h-5" />, // More relevant icon
      achievements: [
        'Provisions services (HA PostgreSQL, Nginx, Redis, Monitoring) via TOML config.',
        'Manages Docker resources (networks, volumes, images) using Engine API.',
        'Integrates 1Password CLI for secure secrets injection during deployment.',
        'Includes `wal-g` S3 backup helpers & monitoring stack deployment (Prometheus, Grafana, Loki).', // Combined for brevity
      ],
      link: 'https://github.com/caner-cetin/oblivion',
    },
    {
      title: 'Code Playground (code.cansu.dev)',
      tech: 'Go (Chi) • React • Docker API • cgroups v2',
      description: 'Full-stack online code execution platform.',
      icon: <Code className="w-5 h-5" />,
      achievements: [
        'Supports code execution in isolated Docker containers managed via Engine API.',
        'Engineered secure sandboxes with resource limits & monitoring (cgroups v2).',
        'Deployed/managed supporting infra (Monitoring, HA DB, Redis, Plane.dev).',
      ],
      link: 'https://github.com/caner-cetin/code-cansu-dev',
      preview: 'https://code.cansu.dev'
    },
    {
      title: 'Strafe - Music Library Engine (dj.cansu.dev)',
      tech: 'Go (Chi/Cobra) • Docker • FFMPEG • S3 • PostgreSQL (sqlc/Goose)',
      description: 'Backend & CLI for processing/serving a multi-channel music library.',
      icon: <Music className="w-5 h-5" />,
      achievements: [
        'Audio pipeline uses Docker, FFMPEG, Python tools for vocal separation, HLS, metadata.',
        'Stores metadata/compressed waveforms (zlib) in PostgreSQL; managed via sqlc/Goose.',
        'Serves audio segments & art from Cloudflare R2 (S3 API) via REST API.',
      ],
      link: 'https://github.com/caner-cetin/strafe',
      preview: 'https://dj.cansu.dev'
    },
    {
      title: 'Halycon - Amazon SP-API Utility',
      tech: 'Go (Cobra) • SP-API • oapi-codegen',
      description: 'CLI tool for automating Amazon Selling Partner API tasks.',
      icon: <GitBranch className="w-5 h-5" />, // Different icon
      achievements: [
        'Automates Catalog, FBA, Listings, Feeds API interactions.',
        'Handles SP-API authentication (LWA tokens), rate limiting, configuration.',
        'Generates type-safe Go client from OpenAPI specs using `oapi-codegen`.',
      ],
      link: 'https://github.com/caner-cetin/halycon'
    },
    {
      title: 'Automated Server Setup (SaltStack)',
      tech: 'SaltStack • Vagrant • Linux (CentOS/Ubuntu)',
      description: 'Cross-platform IaC for multi-machine server provisioning.',
      icon: <BookOpen className="w-5 h-5" />,
      achievements: [
        'Automated WordPress (CentOS) & MySQL (Ubuntu) setup using SaltStack state files.',
        'Managed VM creation, networking, and Salt Minion bootstrap with Vagrant.',
        'Configured system services, users, firewall using Salt states, Pillar, Grains.',
      ],
      link: 'https://github.com/caner-cetin/saltstack-wordpress-mysql-setup'
    }
  ]

  // Project Card Component (Updated Styling)
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    // Use theme colors
    <div className="min-w-[300px] max-w-[400px] border-l-2 border-ink-light pl-4 mr-6 mb-4 flex flex-col bg-parchment rounded-r shadow-sm">
      <div className="flex items-center gap-2 mb-1 pt-2">
        {project.icon && React.cloneElement(project.icon, { className: "w-5 h-5 text-ink-dark" })}
        <span className="text-base font-bold text-ink-darkest"> {project.title}</span>
      </div>
      <div className="text-xs text-ink mb-1">{project.tech}</div>
      <div className="text-sm mb-2 text-ink-dark">{project.description}</div>
      <ul className="list-disc list-inside text-sm space-y-1 mb-2 flex-grow">
        {project.achievements.map((achievement, index) => (
          // Use a different color/style for list items
          <li key={index} className="text-ink"> {achievement} </li>
        ))}
      </ul>
      <div className="flex gap-3 mt-auto pb-2">
        <a
          href={project.link}
          className="text-sm text-ink hover:text-ink-darkest flex items-center gap-1 transition-colors"
          onMouseEnter={handleSectionHover} // Optional sound
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          <span>Source</span>
        </a>
        {project.preview && (
          <a
            href={project.preview}
            className="text-sm text-ink hover:text-ink-darkest flex items-center gap-1 transition-colors"
            onMouseEnter={handleSectionHover} // Optional sound
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Preview</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    // Main container with parchment background and ink text
    <div className="min-h-screen bg-parchment-light p-2 sm:p-4 font-fixedsys text-base flex items-center justify-center">
      {/* Main content box with border and darker parchment background */}
      <div className="w-full max-w-[1200px] min-h-[650px] h-[calc(100vh-40px)] sm:h-[calc(100vh-60px)] bg-parchment border-2 border-ink-dark rounded-sm shadow-lg flex flex-col overflow-hidden">

        {/* Status Bar - Ink text on parchment, border bottom */}
        <div className="border-b-2 border-ink-dark px-3 py-1 flex flex-col sm:flex-row sm:justify-between sm:items-center text-ink-darkest text-sm">
          <div className="text-center sm:text-left font-bold">CANER ÇETIN</div>
          {/* Removed summary */}
          <div className="flex justify-center sm:justify-end space-x-4 mt-1 sm:mt-0">
            <a
              href="mailto:canercetin853@gmail.com" // Corrected mailto
              className="hover:text-ink-darkest flex items-center gap-1 transition-colors"
              onMouseEnter={handleSectionHover} // Optional sound
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">CONTACT</span>
            </a>
            <a
              href="https://github.com/caner-cetin"
              className="hover:text-ink-darkest flex items-center gap-1 transition-colors"
              onMouseEnter={handleSectionHover} // Optional sound
              target="_blank" rel="noopener noreferrer" // Good practice for external links
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GITHUB</span>
            </a>
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-grow p-3 sm:p-4 overflow-y-auto scrollbar-thin">

          {/* Mobile View */}
          <div className="md:hidden space-y-3">
            {/* Skills Section */}
            <div className="border border-ink-light rounded">
              <button
                className="w-full p-2 flex justify-between items-center text-ink-darkest hover:bg-parchment-dark transition-colors"
                onClick={() => toggleSection('skills')}
                onMouseEnter={handleSectionHover}
              >
                <span>SKILLS & TOOLS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('skills') ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.includes('skills') && (
                <div className="p-3 border-t border-ink-light">
                  {skills.map(skillCat => (
                    <div key={skillCat.category} className="mb-2">
                      <h4 className="font-bold text-ink-darkest flex items-center mb-1">{skillCat.icon}{skillCat.category}</h4>
                      <p className="text-xs text-ink">{skillCat.items.join(' • ')}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Experience Section */}
            <div className="border border-ink-light rounded">
              <button
                className="w-full p-2 flex justify-between items-center text-ink-darkest hover:bg-parchment-dark transition-colors"
                onClick={() => toggleSection('employment')}
                onMouseEnter={handleSectionHover}
              >
                <span>EXPERIENCE</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('employment') ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.includes('employment') && (
                <div className="p-3 border-t border-ink-light space-y-3">
                  {employment.map((job, index) => (
                    <div key={index} className="border-l-2 border-ink-light pl-3">
                      <div className="font-bold text-ink-darkest"> {job.company}</div>
                      <div className="text-sm text-ink-dark">{job.role} - {job.tech}</div>
                      <div className="text-xs text-ink opacity-80">{job.period} | {job.location}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Section */}
            <div className="border border-ink-light rounded">
              <button
                className="w-full p-2 flex justify-between items-center text-ink-darkest hover:bg-parchment-dark transition-colors"
                onClick={() => toggleSection('projects')}
                onMouseEnter={handleSectionHover}
              >
                <span>PROJECTS</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('projects') ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.includes('projects') && (
                <div className="p-3 border-t border-ink-light space-y-4">
                  {projects.map((project) => (
                    // Mobile Project Card might need different styling if desired
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="border border-ink-light rounded">
              <button
                className="w-full p-2 flex justify-between items-center text-ink-darkest hover:bg-parchment-dark transition-colors"
                onClick={() => toggleSection('education')}
                onMouseEnter={handleSectionHover}
              >
                <span>EDUCATION</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform ${expandedSections.includes('education') ? 'rotate-180' : ''}`} />
              </button>
              {expandedSections.includes('education') && (
                <div className="p-3 border-t border-ink-light">
                  <div className="border-l-2 border-ink-light pl-3">
                    <div className="font-bold text-ink-darkest"> Eastern Mediterranean University</div>
                    <div className="text-sm text-ink-dark">B.S. in Computer Science</div>
                    <div className="text-xs text-ink opacity-80">Famagusta, TRNC</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {activeTab === 'INFO' && (
              <div className="space-y-6">
                {/* Skills Grid */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-ink-darkest">Technical Skills</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                    {skills.map(skillCat => (
                      <div key={skillCat.category}>
                        <h4 className="font-bold text-ink-dark flex items-center mb-1">{skillCat.icon}{skillCat.category}</h4>
                        <p className="text-sm text-ink leading-snug">{skillCat.items.join(' • ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <h3 className="text-lg font-bold mb-2 text-ink-darkest">Education</h3>
                  <div className="border-l-2 border-ink-light pl-4">
                    <div className="text-base font-semibold text-ink-dark"> Eastern Mediterranean University</div>
                    <div className="text-sm text-ink">B.S. in Computer Science</div>
                    <div className="text-xs text-ink opacity-80">Expected Graduation: 2025 | Famagusta, TRNC</div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'DATA' && ( // Changed tab name
              <div className="space-y-6">
                {/* Experience Section */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-ink-darkest">Experience</h3>
                  <div className="space-y-4">
                    {employment.map((job, index) => (
                      <div key={index} className="border-l-2 border-ink-light pl-4">
                        <div className="flex justify-between items-baseline">
                          <span className="text-base font-semibold text-ink-dark"> {job.company}</span>
                          <span className="text-xs text-ink opacity-80">{job.period}</span>
                        </div>
                        <div className="text-sm text-ink">{job.role} - {job.tech}</div>
                        <div className="text-xs text-ink opacity-80">{job.location}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects Section - Horizontal Scroll */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-ink-darkest">Projects</h3>
                  <div className="overflow-x-auto scrollbar-thin pb-4">
                    <div className="flex space-x-4">
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

        {/* Navigation Tabs - Desktop Only */}
        {/* Use theme colors for tabs */}
        <div className="hidden md:flex sticky bottom-0 left-0 right-0 border-t-2 border-ink-dark bg-parchment shadow-inner">
          {['INFO', 'DATA'].map(tab => (
            <button
              key={tab}
              type="button" // Explicitly type buttons
              onClick={() => handleTabChange(tab)}
              onMouseEnter={handleSectionHover} // Optional sound
              // Apply theme colors, darker background for inactive, lighter for active
              className={`flex-1 p-2 text-sm font-bold transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-ink-light ${activeTab === tab
                ? 'bg-parchment-dark text-ink-darkest border-r-2 border-ink-dark' // Active tab style
                : 'bg-parchment text-ink hover:bg-parchment-dark border-r-2 border-ink-dark' // Inactive tab style
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