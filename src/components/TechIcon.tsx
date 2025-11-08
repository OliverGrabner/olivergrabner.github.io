interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  // Original orange shades organized by category
  const techCategories: Record<string, string> = {
    // AI/ML/Data Science - Base orange (main Anthropic color)
    'Python': '#C15F3C',
    'PyTorch': '#C15F3C',
    'pandas': '#C15F3C',
    'matplotlib': '#C15F3C',

    // Backend/APIs - Darker orange
    'FastAPI': '#93462aff',
    'Java': '#93462aff',
    'JDBC': '#93462aff',
    'SQLAlchemy': '#93462aff',

    // Frontend/UI - Lighter orange
    'React': '#e67d53ff',
    'TypeScript': '#e67d53ff',
    'JavaScript': '#e67d53ff',
    'Tailwind CSS': '#e67d53ff',
    'Vite': '#e67d53ff',
    'Java Swing': '#e67d53ff',
    'PyQt5': '#e67d53ff',
    'Google Analytics 4': '#e67d53ff',


    // Databases - Even darker
    'PostgreSQL': '#8d4125ff',
    'AWS': '#8d4125ff',

    // DevOps/Infrastructure - Mid-light
    'Docker': '#C96A42',
    'Render': '#C96A42',
    'Vercel': '#C96A42',
    'Netlify': '#C96A42',
    'GitHub Pages': '#C96A42',

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
