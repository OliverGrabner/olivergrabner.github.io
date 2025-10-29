import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Fakémon Card Simulator',
      date: 'Jan 2025',
      images: ['/fakemon.mp4', '/generate_cards.mp4','/pack_opening.mp4', '/galary.mp4', '/fakemondiagram.png', '/Loss_training.png', '/dcganarchitecture.png'],
      description: 'I built a full-stack AI card generator app that generates Pokémon-like cards by custom training a Deep Convolutional GAN (DCGAN) with a unique 96x64 architecture. I trained the model on 11,000 images, which is served via a FastAPI backend. The RESTful API handles real-time model inference and manages a full-stack community gallery. The gallery\'s state is persisted in a PostgreSQL database optimized with custom SQL indexes to support "Popular" and "Recent" sorting. The backend is Dockerized and deployed on Render, communicating with a Vercel-hosted client that sends an on-load request to mitigate cold starts.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JavaScript', 'Docker', 'Render', 'Vercel'],
      githubLink: 'https://github.com/OliverGrabner/fakemon-card-simulator',
      demoLink: 'https://fakemon-card-simulator.vercel.app'
    },
    {
      title: '🧋 Boba Shop POS System',
      date: 'Oct 2025',
      images: ['/manager_gui.png','/sales_report.png', '/order_history.png', '/POSrelationalDatabase.png'],
      description: 'Full-stack Java POS system with a Swing GUI client and a cloud-hosted AWS PostgreSQL backend for a local boba shop. \n The Database contains 5 tables with dynamic updates from the front-end GUI.  \n Made a Python script to seed all 5 tables and generate $5M+ in realistic sales data for testing and validation. \n The manager dashboard call 15 SQL queries to generate visual reports on sales trends and inventory',
      technologies: ['Java', 'Java Swing', 'JDBC','PostgreSQL', 'AWS'],
    },
    {
      title: 'Reville Rankings',
      date: 'Oct 2023',
      images: ['/revrankings.png'],
      description: 'In my first hackathon, I built a python-based data analysis tool that processes Texas A&M University\'s public grade distribution data from multiple years. The tool ranks top-performing professors by GPA and provides detailed grade breakdowns for 945 unique courses. Features an interactive PyQt5 GUI with matplotlib visualizations for easy interpretation of grade distributions.',
      technologies: ['Python', 'pandas', 'matplotlib', 'PyQt5'],
      githubLink: 'https://github.com/OliverGrabner/RevilleRankings'
    }, 
    {
      title: 'Y86-64 Processor Design',
      date: 'March 2025',
      images: ['/y86.png', '/registerfile.png'],
      description: 'I built a 64-bit Y86 processor to better understand the fundamentals of computer architecture. The design implemented six pipelined stages (fetch, decode, execute, memory, write, PC update) with 19 instructions, 15 registers, and a 4 KB memory for variable length instruction fetching. I engineered control logic to handle hazards and jumps, then validated the design by running Y86 assembly programs in both a simulator and my implementation, achieving full functional parity. Overall, this project was really fun and taught me more about a side of computer science I rarely visit',
      technologies: ['Logisim', 'Y86-64 ISA', 'Assembly'],
      githubLink: 'https://github.com/OliverGrabner/Y86-64-Processor-Design'
    },
    {
      title: 'KFW Law Firm Website',
      date: 'July 2024',
      images: ['/kfwlaw.mp4', '/kfwclient.png'],
      description: 'I designed and developed a modern replacement for a local law firm\'s website (700+ monthly visits), redesigning from the ground up to improve usability and increase conversions. As the sole developer, I translated non-techical requirements to a web application with integrated Google Analytics to better understand user behavior and refine the firm\'s online presense',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Netlify', 'Google Analytics 4'],
      demoLink: 'https://kfwlaw.netlify.app/'
    },
    {
      title: 'Personal Portfolio',
      date: 'October 2025',
      images: ['/website.png'],
      description: 'In order to show all my projects, I needed a canvas, so I created a portfolio built with React and TypeScript. It features smooth animations, dynamic routing, and a clean design system. It showcases projects with interactive card carousels and integrates media links. Deployed on GitHub Pages with continuous integration.',
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
