import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Fakémon Card Simulator',
      date: 'Jan 2025',
      images: ['/fakemon.mp4', '/generate_cards.mp4','/pack_opening.mp4', '/fakemondiagram.png', '/Loss_training.png', '/dcganarchitecture.png'],
      description: 'In this project I built a Deep Convolutional GAN (DCGAN) with a unique architecture to generate 96x64 images. \n I also built an RESTful API to dynamically support card generations in a front-end showcase website. \n The model itself was trained on 11,000 pokemon cards on a NVIDIA RTX 3050 Laptop GPU for 13 hours. I containerized my backend with Docker and deployed via Render with a Vercel hosted client.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'JavaScript', 'Docker', 'Vercel', 'Render'],
      githubLink: 'https://github.com/OliverGrabner/fakemon-card-simulator',
      demoLink: 'https://fakemon-card-simulator.vercel.app'
    },
    {
      title: '🧋 Boba Shop POS System',
      date: 'Oct 2024',
      images: ['/tempboba.png','/POSrelationalDatabase.png'],
      description: 'I developed a full-stack Java POS system with a Swing GUI client and a cloud-hosted AWS PostgreSQL backend for a local boba shop. The Database contained 5 tables that could be dynamically pulled and updated in the front-end GUI.  \n A Python script generates of $5M+ in realistic sales data to test and populate a relational PostgreSQL schema. \n The manager dashboard call 15 SQL queries to generate visual reports on sales trends and inventory',
      technologies: ['Java', 'Java Swing', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Reville Rankings',
      date: 'Oct 2023',
      images: ['/revrankings.png'],
      description: 'Python-based data analysis tool that processes Texas A&M University\'s public grade distribution data from multiple years. Identifies top-performing professors by GPA and provides detailed grade breakdowns. Features an interactive PyQt5 GUI with matplotlib visualizations for easy interpretation of grade distributions across different course sections.',
      technologies: ['Python', 'pandas', 'matplotlib', 'PyQt5'],
      githubLink: 'https://github.com/OliverGrabner/RevilleRankings'
    }, 
    {
      title: 'Y86-64 Processor Design',
      date: 'March 2025',
      images: ['/y86.png', '/registerfile.png'],
      description: 'Designed a 64-bit Y86-64 CPU in Logisim with 19 unique instructions and 15 registers across 6 pipeline stages. Engineered data and control logic to manage a 4 KB memory, fetching variable-length 10-byte instructions. Validated design by authoring test programs for all 19 instructions, achieving 100% functional parity.',
      technologies: ['Logisim', 'Y86-64 ISA', 'Assembly'],
      githubLink: 'https://github.com/OliverGrabner/Y86-64-Processor-Design'
    },
    {
      title: 'KFW Law Firm Website',
      date: 'July 2024',
      images: ['/kfwlaw.mp4', '/kfwclient.png'],
      description: 'Re-engineered a modern replacement for law firm\'s website serving 700+ monthly visitors. Acted as sole developer, translating non-technical client needs into a functional web app. Integrated Google Analytics 4 to provide actionable insights on site traffic and user engagement, improving user experience and client conversion.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Netlify'],
      demoLink: 'https://kfwlaw.netlify.app/'
    },
    {
      title: 'Personal Portfolio',
      date: 'October 2025',
      images: ['/website.png'],
      description: 'Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dynamic routing, and a clean design system. Showcases projects with an interactive card carousel and integrates social media links. Deployed on GitHub Pages with continuous integration.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubLink: 'https://github.com/OliverGrabner/olivergrabner.github.io',
      demoLink: 'https://olivergrabner.github.io'
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
