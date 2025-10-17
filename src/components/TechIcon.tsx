interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  // Different shades of orange for each technology
  const orangeShades = [
    '#C15F3C', // Base orange
    '#D16D47', // Lighter
    '#B15534', // Darker
    '#E07B51', // Even lighter
    '#A14B2C', // Even darker
    '#C96A42', // Mid-light
    '#B8593A', // Mid-dark
    '#D87F55', // Light
    '#99442A', // Dark
    '#E89264', // Very light
    '#8F3F28', // Very dark
    '#CC6540', // Mid
    '#A85030', // Mid-dark2
  ];

  // Get a consistent color for each tech by hashing the tech name
  const getColorForTech = (techName: string) => {
    let hash = 0;
    for (let i = 0; i < techName.length; i++) {
      hash = techName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return orangeShades[Math.abs(hash) % orangeShades.length];
  };

  const backgroundColor = getColorForTech(tech);

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
