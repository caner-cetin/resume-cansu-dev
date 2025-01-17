import { Mail, Github, Eye } from 'lucide-react';

const Resume = () => {
  const skills = [
    { id: 1, icon: "devicon-typescript-plain", text: "TypeScript" },
    { id: 2, icon: "devicon-react-original", text: "React" },
    { id: 3, icon: "devicon-python-plain", text: "Python" },
    { id: 4, icon: "devicon-go-original-wordmark", text: "GoLang" },
    { id: 5, icon: "devicon-kotlin-plain", text: "Kotlin" },
    { id: 6, icon: "devicon-dotnetcore-plain", text: "ASP.NET" },
    { id: 7, icon: "devicon-docker-plain", text: "Docker" },
    { id: 8, icon: "devicon-postgresql-plain", text: "PostgreSQL" },
    { id: 9, icon: "devicon-mongodb-plain", text: "MongoDB" },
    { id: 10, icon: "devicon-sqlite-plain", text: "SQLite" },
    { id: 11, icon: "devicon-git-plain", text: "Git" },
    { id: 12, icon: "devicon-amazonwebservices-original", text: "AWS" }
  ];

  return (
    <div className="min-h-screen bg-[#222323] text-[#f0f6f0] font-mono">
      {/* Header Section - Reduced padding */}
      <div className="relative py-8 mb-6 bg-gradient-to-b from-[#2a2b2b] to-[#222323]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wider">Caner Çetin</h1>
          <div className="flex justify-center space-x-6 text-sm">
            {[
              { icon: Mail, text: 'hello@cansu.dev', link: 'mailto:hello@cansu.dev' },
              { icon: Github, text: 'github.com/caner-cetin', link: 'https://github.com/caner-cetin' },
            ].map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="flex items-center text-[#f0f6f0] hover:text-[#a8afa8] transition-colors group"
              >
                <item.icon className="w-4 h-4 mr-2" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Reduced spacing */}
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-4">
          <div className="p-4 border border-[#f0f6f0] hover:border-[#a8afa8] transition-colors bg-[#1e1f1f]">
            <h2 className="text-lg font-bold mb-2 tracking-wider">Education</h2>
            <div>
              <p className="text-sm">Eastern Mediterranean University</p>
              <p className="text-xs text-[#a8afa8]">BSc Computer Science</p>
              <p className="text-xs text-[#878c87]">2020-2025 (Expected)</p>
            </div>
          </div>

          <div className="p-4 border border-[#f0f6f0] hover:border-[#a8afa8] transition-colors bg-[#1e1f1f]">
            <h2 className="text-lg font-bold mb-2 tracking-wider">Skills</h2>
            <div className="grid grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group flex items-center justify-center"
                  title={skill.text}
                >
                  <i className={`${skill.icon} text-2xl group-hover:text-[#a8afa8] transition-colors`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="p-4 border border-[#f0f6f0] hover:border-[#a8afa8] transition-colors bg-[#1e1f1f]">
            <h2 className="text-lg font-bold mb-2 tracking-wider">Projects</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Code Playground',
                  links: [
                    { icon: Github, url: 'https://github.com/caner-cetin/code-cansu-dev' },
                    { icon: Eye, url: 'https://code.cansu.dev' }
                  ],
                  tech: 'React • Golang • Docker Engine',
                  description: 'High-performance code playground supporting 38 languages'
                },
                {
                  title: 'Media Player',
                  links: [
                    { icon: Github, url: 'https://github.com/caner-cetin/dj-cansu-dev' },
                    { icon: Eye, url: 'https://cansu.dev/dj' }
                  ],
                  tech: 'GoLang • PostgreSQL • React',
                  description: 'Full-stack audio player demo with multichannel support'
                },
                {
                  title: 'LAMP Stack Automation',
                  links: [
                    { icon: Github, url: 'https://github.com/caner-cetin/saltstack-wordpress-mysql-setup' }
                  ],
                  tech: 'SaltStack • Vagrant',
                  description: 'Cross-platform (CentOS/Ubuntu) automation for LAMP stack deployment with WordPress'
                },
                {
                  title: 'Trench',
                  links: [
                    { icon: Github, url: 'https://github.com/caner-cetin/trench' }
                  ],
                  tech: 'Python • QT • OpenCV',
                  description: 'Object extractor and upscaler GUI, built with OpenCV / QT, based on RealESRGAN and Segment Anything.'
                },
                {
                  title: 'Music Recommendation Engine (WIP)',
                  links: [
                    { icon: Github, url: 'https://github.com/caner-cetin/conan' }
                  ],
                  tech: 'C++ • QT',
                  description: ''
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="border-l-2 border-[#f0f6f0] pl-3 hover:border-[#a8afa8] transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          className="text-[#f0f6f0] hover:text-[#a8afa8]"
                        >
                          <link.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#a8afa8]">{project.tech}</p>
                  <p className="text-xs">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border border-[#f0f6f0] hover:border-[#a8afa8] transition-colors bg-[#1e1f1f]">
            <h2 className="text-lg font-bold mb-2 tracking-wider">Experience</h2>
            <div className="space-y-3">
              {[
                {
                  company: 'Boyner Büyük Mağazacılık',
                  position: 'Backend Engineer - ASP.NET',
                  period: 'June 2024 - August 2024'
                },
                {
                  company: 'ElephantApps',
                  position: 'Backend Engineer - Python / FastAPI',
                  period: 'March 2023 - January 2024'
                },
                {
                  company: 'VisitRise',
                  position: 'Data Engineer - GoLang',
                  period: 'February 2023 - March 2023'
                }
              ].map((job) => (
                <div
                  key={job.company}
                  className="border-l-2 border-[#f0f6f0] pl-3 hover:border-[#a8afa8] transition-colors"
                >
                  <h3 className="font-bold text-sm">{job.company}</h3>
                  <p className="text-xs">{job.position}</p>
                  <p className="text-xs text-[#a8afa8]">{job.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
