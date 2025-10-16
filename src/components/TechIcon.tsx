import * as simpleIcons from 'simple-icons';

interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  // Map common tech names to simple-icons slugs
  const techMap: { [key: string]: string } = {
    'Python': 'python',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'React': 'react',
    'Node.js': 'nodedotjs',
    'TensorFlow': 'tensorflow',
    'FastAPI': 'fastapi',
    'Docker': 'docker',
    'Go': 'go',
    'Kafka': 'apachekafka',
    'Redis': 'redis',
    'PostgreSQL': 'postgresql',
    'Kubernetes': 'kubernetes',
    'gRPC': 'grpc',
    'MongoDB': 'mongodb',
    'Java': 'java',
    'C++': 'cplusplus',
    'Rust': 'rust',
    'AWS': 'amazonaws',
    'Next.js': 'nextdotjs',
    'Vue': 'vuedotjs',
    'Angular': 'angular',
    'Django': 'django',
    'Flask': 'flask',
    'GraphQL': 'graphql',
    'MySQL': 'mysql',
    'Git': 'git',
    'GitHub': 'github',
    'GitLab': 'gitlab',
    'Tailwind': 'tailwindcss',
    'Firebase': 'firebase',
    'Vite': 'vite',
  };

  const iconSlug = techMap[tech] || tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');
  const icon = simpleIcons[`si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}` as keyof typeof simpleIcons];

  if (!icon) {
    // Fallback to text badge if icon not found
    return (
      <span className="px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg">
        {tech}
      </span>
    );
  }

  return (
    <div className="group relative flex items-center gap-1">
      <div
        className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
        title={tech}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill={`#${icon.hex}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon.path} />
        </svg>
      </div>
      <span className="text-xs text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-9 whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded z-10">
        {tech}
      </span>
    </div>
  );
}
