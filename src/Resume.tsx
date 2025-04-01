import React, { useState, useEffect } from 'react';
import { Mail, Github, ChevronDown, ExternalLink, BookOpen, Code, Database, LucideUpload, Music, Monitor, GitBranch, FileCode, Settings, ServerCog } from 'lucide-react'; // Added more icons

const Resume = () => {
  // State for mobile view collapsibles and mobile detection
  const [expandedSections, setExpandedSections] = useState<string[]>(['skills', 'experience', 'projects', 'education']); // Default to expanded on desktop, matters more for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // --- Sound logic (optional, can be removed if not desired) ---
  const sounds = {
    select: new Audio('/audio/ui_pipboy_select.wav'),
    highlight: new Audio('/audio/ui_pipboy_highlight.wav'),
    mode: new Audio('/audio/ui_pipboy_mode.wav'),
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        sounds.mode.play(); // Optional sound
        setIsMobile(newIsMobile);
        // Expand all sections by default on desktop load/resize
        if (!newIsMobile) {
          setExpandedSections(['skills', 'experience', 'projects', 'education']);
        } else {
          setExpandedSections([]); // Collapse all on mobile initially
        }
      }
    };
    // Set initial state based on window size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]); // Removed sounds dependency if unused

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

  // --- UPDATED & CONDENSED CONTENT ---

  // Simplified Skills - Focused categories
  const skills = [
    { category: 'Backend Languages', items: ['Go', 'Python', 'Kotlin', 'ASP.NET Core'], icon: <Code className="w-4 h-4 mr-1" /> },
    { category: 'DevOps & Infrastructure', items: ['Docker & Containerization', 'IaC', 'CI/CD', 'Linux Server Management', 'Nginx'], icon: <ServerCog className="w-4 h-4 mr-1" /> },
    { category: 'Databases & Caching', items: ['PostgreSQL', 'MongoDB', 'Redis (DragonflyDB)', 'Microsoft SQL Server'], icon: <Database className="w-4 h-4 mr-1" /> },
    { category: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Loki Stack', 'Uptime Kuma'], icon: <Monitor className="w-4 h-4 mr-1" /> },
    { category: 'Cloud & Tools', items: ['Cloudflare', 'Git', 'Shell Scripting', 'S3'], icon: <LucideUpload className="w-4 h-4 mr-1" /> },
    // Frontend remains concise
    { category: 'Frontend (Supporting)', items: ['TypeScript', 'React', 'TanStack Tools'], icon: <FileCode className="w-4 h-4 mr-1" /> },
  ];

  const employment = [ // Content remains the same, just rendering changes
    { company: 'Boyner Büyük Mağazacılık', role: 'Backend Engineer Intern', tech: 'ASP.NET', period: 'June 2024 - Aug 2024', location: 'Istanbul, TR' },
    { company: 'ElephantApps', role: 'Backend Engineer', tech: 'Python / FastAPI', period: 'Mar 2023 - Jan 2024', location: 'Istanbul, TR' },
    { company: 'VisitRise', role: 'Data Engineer (Contract)', tech: 'GoLang', period: 'Feb 2023 - Mar 2023', location: 'Remote' }
  ];

  const projects = [ // Content remains the same, just rendering changes
    { title: 'Oblivion - Personal DevOps Toolkit', tech: 'Go (Cobra) • Docker API • 1Password • TOML', description: 'CLI for personal IaC & Docker service provisioning.', icon: <Settings className="w-5 h-5" />, achievements: ['Provisions services (HA PostgreSQL, Nginx, Redis, Monitoring) via TOML config.', 'Manages Docker resources (networks, volumes, images) using Engine API.', 'Integrates 1Password CLI for secure secrets injection during deployment.', 'Includes `wal-g` S3 backup helpers & monitoring stack deployment (Prometheus, Grafana, Loki).'], link: 'https://github.com/caner-cetin/oblivion' },
    { title: 'Code Playground (code.cansu.dev)', tech: 'Go (Chi) • React • Docker API • cgroups v2', description: 'Full-stack online code execution platform.', icon: <Code className="w-5 h-5" />, achievements: ['Isolated code execution enviroments via Docker containers, managed with Engine API.', 'Engineered secure sandboxes with resource limits & monitoring (cgroups v2).', 'Deployed/managed supporting infra (Monitoring, HA DB, Redis, Plane.dev).', 'Integrated WebSockets (Melody) for real-time collaboration (WIP).'], link: 'https://github.com/caner-cetin/code-cansu-dev', preview: 'https://code.cansu.dev' },
    { title: 'Strafe - Music Library Engine (dj.cansu.dev)', tech: 'Go (Chi/Cobra) • Docker • FFMPEG • S3 • PostgreSQL (sqlc/Goose)', description: 'Backend & CLI for processing/serving a multi-channel music library.', icon: <Music className="w-5 h-5" />, achievements: ['Audio pipeline uses Docker, FFMPEG, Python tools for vocal separation, HLS, metadata.', 'Stores metadata/compressed waveforms (zlib) in PostgreSQL; managed via sqlc/Goose.', 'Serves audio segments & art from Cloudflare R2 (S3 API) via REST API.'], link: 'https://github.com/caner-cetin/strafe', preview: 'https://dj.cansu.dev' },
    { title: 'Halycon - Amazon SP-API Utility', tech: 'Go (Cobra) • SP-API • oapi-codegen', description: 'CLI tool for automating Amazon Selling Partner API tasks.', icon: <GitBranch className="w-5 h-5" />, achievements: ['Automates Catalog, FBA, Listings, Feeds API interactions.', 'Handles SP-API authentication (LWA tokens), rate limiting, configuration.', 'Generates type-safe Go client from OpenAPI specs using `oapi-codegen`.'], link: 'https://github.com/caner-cetin/halycon' },
    { title: 'Automated Server Setup (SaltStack)', tech: 'SaltStack • Vagrant • Linux (CentOS/Ubuntu)', description: 'Cross-platform IaC for multi-machine server provisioning.', icon: <BookOpen className="w-5 h-5" />, achievements: ['Automated WordPress (CentOS) & MySQL (Ubuntu) setup using SaltStack state files.', 'Managed VM creation, networking, and Salt Minion bootstrap with Vagrant.', 'Configured system services, users, firewall using Salt states, Pillar, Grains.'], link: 'https://github.com/caner-cetin/saltstack-wordpress-mysql-setup' }
  ];

  // Project Card Component (Styling remains the same)
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="min-w-[300px] max-w-[400px] border-l-2 border-ink-light pl-4 mr-6 mb-4 flex flex-col bg-parchment rounded-r shadow-sm flex-shrink-0"> {/* Added flex-shrink-0 */}
      <div className="flex items-center gap-2 mb-1 pt-2">
        {project.icon && React.cloneElement(project.icon, { className: "w-5 h-5 text-ink-dark" })}
        <span className="text-base font-bold text-ink-darkest"> {project.title}</span>
      </div>
      <div className="text-xs text-ink mb-1">{project.tech}</div>
      <div className="text-sm mb-2 text-ink-dark">{project.description}</div>
      <ul className="list-disc list-inside text-sm space-y-1 mb-2 flex-grow">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="text-ink"> {achievement} </li>
        ))}
      </ul>
      <div className="flex gap-3 mt-auto pb-2">
        <a href={project.link} className="text-sm text-ink hover:text-ink-darkest flex items-center gap-1 transition-colors" onMouseEnter={handleSectionHover} target="_blank" rel="noopener noreferrer">
          <Github className="w-4 h-4" /><span>Source</span>
        </a>
        {project.preview && (
          <a href={project.preview} className="text-sm text-ink hover:text-ink-darkest flex items-center gap-1 transition-colors" onMouseEnter={handleSectionHover} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" /><span>Live Preview</span>
          </a>
        )}
      </div>
    </div>
  );

  // Section Component for Mobile Collapsibility
  const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div className="border border-ink-light rounded mb-3 md:border-none md:mb-6">
      {/* Mobile Header */}
      <button
        className="w-full p-2 flex justify-between items-center text-ink-darkest hover:bg-parchment-dark transition-colors md:hidden"
        onClick={() => toggleSection(id)}
        onMouseEnter={handleSectionHover} // Optional
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedSections.includes(id) ? 'rotate-180' : ''}`} />
      </button>
      {/* Desktop Header */}
      <h3 className="text-lg font-bold mb-3 text-ink-darkest hidden md:block">{title}</h3>
      {/* Content (Conditionally rendered on mobile, always on desktop) */}
      <div className={`md:block ${expandedSections.includes(id) ? 'block' : 'hidden'} p-3 md:p-0 border-t border-ink-light md:border-none`}>
        {children}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-parchment-light p-2 sm:p-4 font-fixedsys text-base flex items-center justify-center">
      <div className="w-full max-w-[1200px] min-h-[650px] h-[calc(100vh-40px)] sm:h-[calc(100vh-60px)] bg-parchment border-2 border-ink-dark rounded-sm shadow-lg flex flex-col overflow-hidden">

        {/* --- Status Bar --- */}
        <div className="border-b-2 border-ink-dark px-3 py-1 flex flex-col sm:flex-row sm:justify-between sm:items-center text-ink-darkest text-sm flex-shrink-0">
          <div className="text-center sm:text-left font-bold">CANER ÇETIN</div>
          <div className="flex justify-center sm:justify-end space-x-4 mt-1 sm:mt-0">
            <a href="mailto:canercetin853@gmail.com" className="hover:text-ink-darkest flex items-center gap-1 transition-colors" onMouseEnter={handleSectionHover}>
              <Mail className="w-4 h-4" /><span className="hidden sm:inline">CONTACT</span>
            </a>
            <a href="https://github.com/caner-cetin" className="hover:text-ink-darkest flex items-center gap-1 transition-colors" onMouseEnter={handleSectionHover} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" /><span className="hidden sm:inline">GITHUB</span>
            </a>
          </div>
        </div>

        {/* --- Content Area (Single Scroll) --- */}
        <div className="flex-grow p-3 sm:p-4 overflow-y-auto scrollbar-thin">

          <Section title="Technical Skills" id="skills">
            {/* Use multicolumn for skills on desktop */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                {skills.map(skillCat => (
                  <div key={skillCat.category}>
                    <h4 className="font-bold text-ink-dark flex items-center mb-1">{skillCat.icon}{skillCat.category}</h4>
                    <p className="text-sm text-ink leading-snug">{skillCat.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Simple list for skills on mobile */}
            <div className="md:hidden space-y-2">
              {skills.map(skillCat => (
                <div key={skillCat.category}>
                  <h4 className="font-bold text-ink-dark flex items-center mb-1">{skillCat.icon}{skillCat.category}</h4>
                  <p className="text-xs text-ink">{skillCat.items.join(' • ')}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Experience" id="experience">
            <div className="space-y-4">
              {employment.map((job, index) => (
                <div key={index} className="border-l-2 border-ink-light pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <span className="text-base font-semibold text-ink-dark"> {job.company}</span>
                    <span className="text-xs text-ink opacity-80 mt-1 sm:mt-0">{job.period}</span>
                  </div>
                  <div className="text-sm text-ink">{job.role} - {job.tech}</div>
                  <div className="text-xs text-ink opacity-80">{job.location}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects" id="projects">
            {/* Horizontal scroll on desktop and mobile */}
            <div className="overflow-x-auto scrollbar-thin pb-4">
              <div className="flex space-x-4">
                {projects.map(project => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </Section>

          <Section title="Education" id="education">
            <div className="border-l-2 border-ink-light pl-4">
              <div className="text-base font-semibold text-ink-dark"> Eastern Mediterranean University</div>
              <div className="text-sm text-ink">B.S. in Computer Science</div>
              <div className="text-xs text-ink opacity-80">Expected Graduation: 2025 | Famagusta, TRNC</div>
            </div>
          </Section>

        </div>
        {/* REMOVED TAB NAVIGATION */}
      </div>
    </div>
  );
};

export default Resume;