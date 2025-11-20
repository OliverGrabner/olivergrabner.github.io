import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Fakémon Card Simulator',
      date: 'Jan 2025',
      images: ['/fakemon.mp4','/pack_opening.mp4', '/galary.mp4', '/generate_cards.mp4', '/fakemon_diagram.png', '/Loss_training.png', '/dcganarchitecture.png'],
      description: 'I built a <strong>full-stack AI card generator</strong> app that generates Pokémon-like cards by <strong>custom training a Deep Convolutional GAN (DCGAN)</strong> with a unique <strong>96x64 architecture</strong>. I trained the model on <strong>11,000 images</strong>, which is served via a <strong>FastAPI backend</strong>. The RESTful API handles <strong>real-time model inference</strong> and manages a full-stack community gallery. The gallery\'s state is persisted in a <strong>PostgreSQL database optimized with custom SQL indexes</strong> to support "Popular" and "Recent" sorting. I added a comprehensive test suite with <strong> 42 tests </strong> covering unit tests, database, and APIs. The backend is <strong>Dockerized and deployed on Render</strong>, communicating with a Vercel-hosted client that sends an on-load request to <strong>mitigate cold starts</strong>.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'pytest', 'JavaScript', 'Docker', 'Render', 'Vercel'],
      githubLink: 'https://github.com/OliverGrabner/fakemon-card-simulator',
      demoLink: 'https://fakemon-card-simulator.vercel.app'
    },
    {
      title: 'Java Swing POS System',
      date: 'Oct 2025',
      images: ['/manager_gui.png','/sales_report.png', '/order_history.png', '/POSrelationalDatabase.png'],
      description: 'Engineered a POS application with a <strong>Java Swing GUI </strong> and a <strong>cloud-hosted AWS PostgreSQL backend</strong> using JDBC for a local boba shop. \n Designed a <strong>5 table relational database schema</strong> with dynamic updates from the front-end GUI. \n Made a <strong>Python script to seed all 5 tables</strong> and generate <strong>$5M+ in realistic sales data</strong> for testing and validation. \n The manager dashboard calls <strong>15 SQL queries</strong> to generate <strong>visual reports on sales trends and inventory</strong>',
      technologies: ['Java', 'Java Swing', 'JDBC','PostgreSQL', 'AWS RDS', 'Python'],
      githubLink: 'https://github.com/OliverGrabner/boba_pos_system'
    },
    {
      title: '🧋 Full-Stack Web POS Platform',
      date: 'Nov 2025',
      images: ['/web_pos/inventoryq_screen.png', '/web_pos/cashier_screen.png' ,'/web_pos/webpos_login.png', '/web_pos/history_screen.png'],
      description: '<strong>Collaborated in a team using Git workflows and CI/CD</strong> to engineer a full-stack POS system with <strong>TypeScript, React, and Express.js</strong>. \n Built <strong>RESTful API architecture</strong> connected to an <strong>AWS RDS PostgreSQL database</strong> with connection pooling and database transactions for consistency. \n Secured authentication via <strong>Google OAuth 2.0</strong>, enforcing server-side JWT validation and HTTP-only session cookies. \n Deployed with frontend on <strong>Vercel</strong>, backend on <strong>Render</strong>, supporting multi-user concurrent access.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS RDS', 'Google OAuth 2.0', 'Git', 'Vercel', 'Render'],
      githubLink: 'https://github.com/CSCE331-Fall2025-900-911/project3_gang_41',
      demoLink: 'https://project3-gang-41-frontend.vercel.app/'
    },
    {
      title: 'Y86-64 Processor Design',
      date: 'March 2025',
      images: ['/y86.png', '/registerfile.png'],
      description: 'I built a <strong>64-bit Y86 processor</strong> to better understand the fundamentals of computer architecture. The design implemented <strong>six pipelined stages</strong> (fetch, decode, execute, memory, write, PC update) with <strong>19 instructions, 15 registers, and a 4 KB memory</strong> for <strong>variable length instruction fetching</strong>. I engineered <strong>control logic to handle hazards and jumps</strong>, then validated the design by running Y86 assembly programs in both a simulator and my implementation, achieving <strong>full functional parity</strong>. Overall, this project was really fun and taught me more about a side of computer science I rarely visit',
      technologies: ['Logisim', 'Y86-64 ISA', 'Assembly'],
      githubLink: 'https://github.com/OliverGrabner/Y86-64-Processor-Design'
    },
    {
      title: 'KFW Law Firm Website',
      date: 'Sept 2025',
      images: ['/kfwlaw.mp4', '/kfwclient.png'],
      description: 'I designed and developed a <strong>modern replacement</strong> for a local law firm\'s website (<strong>700+ monthly visits</strong>), redesigning from the ground up to improve usability and <strong>increase conversions</strong>. As the <strong>sole developer</strong>, I translated non-technical requirements to a web application with <strong>integrated Google Analytics</strong> to better understand user behavior and refine the firm\'s online presence',
      technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Netlify', 'Google Analytics 4'],
      demoLink: 'https://kfwlaw.netlify.app/'
    },
    {
      title: 'Reville Rankings',
      date: 'Oct 2023',
      images: ['/revrankings.png'],
      description: 'In my <strong>first hackathon</strong>, I built a <strong>python-based data analysis tool</strong> that processes Texas A&M University\'s <strong>public grade distribution data from multiple years</strong>. The tool <strong>ranks top-performing professors by GPA</strong> and provides detailed grade breakdowns for <strong>945 unique courses</strong>. Features an <strong>interactive PyQt5 GUI</strong> with <strong>matplotlib visualizations</strong> for easy interpretation of grade distributions.',
      technologies: ['Python', 'pandas', 'matplotlib', 'PyQt5'],
      githubLink: 'https://github.com/OliverGrabner/RevilleRankings'
    }, 
    {
      title: 'Personal Portfolio',
      date: 'Oct 2025',
      images: ['/website.png'],
      description: 'In order to show all my projects, I needed a canvas, so I created a portfolio built with <strong>React and TypeScript</strong>. It features <strong>smooth animations</strong>, <strong>dynamic routing</strong>, and a <strong>clean design system</strong>. It showcases projects with <strong>interactive card carousels</strong> and integrates media links. <strong>Deployed on GitHub Pages</strong> with <strong>continuous integration</strong>.',
      technologies: ['TypeScript', 'React', 'Vite','Tailwind CSS', 'GitHub Pages'],
      githubLink: 'https://github.com/OliverGrabner/olivergrabner.github.io',
      demoLink: 'https://olivergrabner.com'
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
