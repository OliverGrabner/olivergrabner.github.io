interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  // Original orange shades organized by category
  const techCategories: Record<string, string> = {
    // languages - Base orange (main Anthropic color)
    'Python': '#C15F3C',
    'Java': '#C15F3C',
    'TypeScript': '#C15F3C',
    'JavaScript': '#C15F3C',

    // ml 
    'PyTorch': '#C15F3C',
    'pandas': '#C15F3C',
    'matplotlib': '#C15F3C',

    // Backend/APIs - Darker orange
    'FastAPI': '#93462aff',
    'JDBC': '#93462aff',
    'SQLAlchemy': '#93462aff',

    // Frontend/UI - Lighter orange
    'React': '#df7a61ff',
    'Tailwind CSS': '#df7a61ff',
    'Vite': '#df7a61ff',
    'Java Swing': '#df7a61ff',
    'PyQt5': '#df7a61ff',
    'Google Analytics 4': '#df7a61ff',
    'HTML': '#df7a61ff',
    'CSS': '#df7a61ff',


    // Databases - Even darker
    'PostgreSQL': '#c77700ff',
    'AWS': '#c77700ff',

    // Testing - Dark orange
    'pytest': '#c77700ff',

    // DevOps/Infrastructure - Mid-light
    'Docker': '#c48a35ff',
    'Render': '#c48a35ff',
    'Vercel': '#c48a35ff',
    'Netlify': '#c48a35ff',
    'GitHub Pages': '#c48a35ff',

    // Hardware/Low-level - Very dark
    'Logisim': '#8F3F28',
    'Y86-64 ISA': '#8F3F28',
    'Assembly': '#8F3F28',

    // Analytics/Monitoring - Light
  };

  // Fallback color for uncategorized techs
  const backgroundColor = techCategories[tech] || '#CC6540';

  return (
    <span
      className="px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-200 hover:shadow-md"
      style={{
        backgroundColor,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {tech}
    </span>
  );
}
