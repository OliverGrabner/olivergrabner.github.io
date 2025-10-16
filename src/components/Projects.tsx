import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Fakémon Card Simulator',
      date: 'Jan 2025',
      images: ['/fakemon-simulator.png', '/fakemon-simulator.png','/fakemon-simulator.png'],
      description: 'Full-stack web app with real-time AI card generation using DCGAN. Open card packs, generate unique cards via REST API, and save favorites. Trained PyTorch model on 11K+ Pokémon cards with split deployment architecture.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'JavaScript', 'Docker'],
      githubLink: 'https://github.com/OliverGrabner/fakemon-card-simulator',
      demoLink: 'https://fakemon-card-simulator.vercel.app'
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
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
