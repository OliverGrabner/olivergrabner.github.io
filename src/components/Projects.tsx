import ProjectCard from './ProjectCard';
import TechIcon from './TechIcon';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Composer',
      date: 'March 2026',
      images: ['/projects/composer/demo.mp4', '/projects/composer/diagram.png', '/projects/composer/landing.png', '/projects/composer/dashboard.png'],
      description: '<strong>8-tool autonomous agent loop</strong> that generates typed system architecture diagrams from natural language. Streams via a <strong>thread-to-async bridge</strong> with a <strong>suspension pattern</strong> that halts and resumes the agent across separate HTTP requests. Exposes an <strong>11-tool MCP server</strong> for external AI tools.',
      technologies: ['Python', 'FastAPI', 'Gemini', 'MCP', 'SSE', 'WebSocket', 'PostgreSQL'],
      demoLink: 'https://www.usecomposer.com'
    },
    {
      title: 'Stockle',
      date: 'Dec 2025',
      images: ['/projects/stockle/stockle-1768533167598.mp4', '/projects/stockle/stockle_diagram.png', '/projects/stockle/stockle-game.png', '/projects/stockle/stockle-win.png', '/projects/stockle/og-image.png'],
      description: '<strong>Kubernetes-deployed</strong> multi-service system with a daily <strong>Python data pipeline</strong>, <strong>2-replica Spring Boot API</strong>, and <strong>PostgreSQL with PersistentVolumes</strong>. Scores guesses across 6 financial metrics with <strong>cross-scale normalization</strong>.',
      technologies: ['Kubernetes', 'Docker', 'Spring Boot', 'Python', 'PostgreSQL'],
      githubLink: 'https://github.com/olivergrabner/stockle',
      demoLink: 'https://www.stockle.fun'
    },
    {
      title: 'Fakémon Card Simulator',
      date: 'Jan 2025',
      images: ['/projects/fakemon/fakemon.mp4', '/projects/fakemon/pack-opening.mp4', '/projects/fakemon/gallery.mp4', '/projects/fakemon/generate-cards.mp4', '/projects/fakemon/diagram.png', '/projects/fakemon/loss-training.png', '/projects/fakemon/dcgan-architecture.png'],
      description: '<strong>DCGAN trained from scratch</strong> on <strong>11,000 images</strong> — modified the standard architecture for <strong>non-square 96×64 generation</strong> across 5 transposed conv layers with a <strong>100D latent space</strong>. Served via <strong>real-time FastAPI inference</strong>.',
      technologies: ['PyTorch', 'DCGAN', 'FastAPI', 'Docker'],
      githubLink: 'https://github.com/OliverGrabner/fakemon-card-simulator',
      demoLink: 'https://fakemon-card-simulator.vercel.app'
    },
    {
      title: 'Y86-64 Processor Design',
      date: 'March 2025',
      images: ['/projects/y86/processor.png', '/projects/y86/registerfile.png'],
      description: '<strong>Pipelined 64-bit processor</strong> with six stages, 19 instructions, and 4 KB memory. Implements <strong>hazard detection and control logic</strong> for data dependencies and conditional jumps.',
      technologies: ['Logisim', 'Y86-64 ISA', 'Assembly'],
      githubLink: 'https://github.com/OliverGrabner/Y86-64-Processor-Design'
    },
  ];

  const otherWork = [
    {
      title: 'Web POS Platform',
      date: 'Nov 2025',
      description: 'Team-built full-stack POS with <strong>Google OAuth, Express REST API</strong>, and <strong>CI/CD</strong>.',
      technologies: ['Express', 'OAuth 2.0', 'PostgreSQL', 'CI/CD'],
      githubLink: 'https://github.com/CSCE331-Fall2025-900-911/project3_gang_41',
      demoLink: 'https://project3-gang-41-frontend.vercel.app/',
    },
    {
      title: 'KFW Law Firm Website',
      date: 'Sept 2025',
      description: 'Redesigned a local firm\'s site (<strong>700+ monthly visits</strong>) as sole developer with <strong>Google Analytics</strong>.',
      technologies: ['React', 'TypeScript', 'Google Analytics'],
      demoLink: 'https://kfwlaw.netlify.app/',
    },
    {
      title: 'Reville Rankings',
      date: 'Oct 2023',
      description: 'Hackathon data tool that ranks <strong>945 courses</strong> by professor GPA from public grade distributions.',
      technologies: ['Python', 'pandas', 'matplotlib', 'PyQt5'],
      githubLink: 'https://github.com/OliverGrabner/RevilleRankings',
    }
  ];

  return (
    <section className="py-20 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 z-10">
          <div className="writing-mode-vertical" style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: 'Inter, sans-serif',
            fontSize: '72px',
            fontWeight: '300',
            letterSpacing: '0.1em',
            color: 'rgba(193, 95, 60, 0.12)'
          }}>
            Projects
          </div>
        </div>

        <div className="mb-12 lg:hidden">
          <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
            Projects
          </h2>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* Other Work */}
        <div className="mt-8 pt-12 border-t" style={{ borderColor: 'rgba(193, 95, 60, 0.2)' }}>
          <h3
            className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Other Work
          </h3>
          <div className="space-y-6">
            {otherWork.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 pb-6 border-b last:border-b-0"
                style={{ borderColor: 'rgba(193, 95, 60, 0.08)' }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h4
                      className="text-base font-semibold text-gray-900"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {project.title}
                    </h4>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                  </div>
                  <p
                    className="text-sm text-gray-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech, idx) => (
                      <TechIcon key={idx} tech={tech} small />
                    ))}
                  </div>
                </div>
                <span
                  className="text-sm text-gray-400 font-medium sm:ml-6 whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
