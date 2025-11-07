interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  // Google colors palette
  const googleColors = [
    '#4285F4', // Google Blue
    '#EA4335', // Google Red
    '#FBBC04', // Google Yellow
    '#34A853', // Google Green
    '#1967D2', // Darker Blue
    '#D33B27', // Darker Red
    '#F9AB00', // Darker Yellow
    '#0D652D', // Darker Green
    '#669DF7', // Light Blue
    '#F28B82', // Light Red
    '#FDD663', // Light Yellow
    '#81C995', // Light Green
  ];

  // Get a consistent color for each tech by hashing the tech name
  const getColorForTech = (techName: string) => {
    let hash = 0;
    for (let i = 0; i < techName.length; i++) {
      hash = techName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return googleColors[Math.abs(hash) % googleColors.length];
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
