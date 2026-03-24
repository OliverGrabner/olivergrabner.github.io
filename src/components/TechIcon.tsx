import StackIcon from 'tech-stack-icons';
import { SiFastapi } from 'react-icons/si';
import type { IconType } from 'react-icons';

interface TechIconProps {
  tech: string;
  small?: boolean;
}

// tech-stack-icons icon IDs
const stackIconNames: Record<string, string> = {
  'react': 'react',
  'python': 'python',
  'typescript': 'typescript',
  'javascript': 'js',
  'java': 'java',
  'postgresql': 'postgresql',
  'docker': 'docker',
  'kubernetes': 'kubernetes',
  'pytorch': 'pytorch',
  'html': 'html5',
  'css': 'css3',
  'node.js': 'nodejs',
  'express': 'expressjs',
  'next.js': 'nextjs',
  'tailwind css': 'tailwindcss',
  'tailwind': 'tailwindcss',
  'vite': 'vitejs',
  'git': 'git',
  'spring boot': 'spring',
  'vercel': 'vercel',
  'aws': 'aws',
  'aws rds': 'aws',
  'render': 'render',
  'netlify': 'netlify',
  'pandas': 'pandas',
  'sqlalchemy': 'sqlalchemy',
  'google analytics': 'analytics',
  'google analytics 4': 'analytics',
  'analytics': 'analytics',
  'oauth 2.0': 'oauth',
  'google oauth 2.0': 'oauth',
  'pytest': 'pytest',
  'google gemini': 'gemini',
  'gemini': 'gemini',
  'github pages': 'github',
  'mcp': 'anthropic',
};

// react-icons fallback
const siIconFallbacks: Record<string, IconType> = {
  'fastapi': SiFastapi,
};

// Brand colors for react-icons fallbacks and letter avatars
const techColors: Record<string, string> = {
  'fastapi': '#009688',
  'logisim': '#8F3F28',
  'y86-64 isa': '#8F3F28',
  'assembly': '#624FE8',
  'dcgan': '#EE4C2C',
  'sse': '#C15F3C',
  'ci/cd': '#C15F3C',
};

export default function TechIcon({ tech, small }: TechIconProps) {
  const key = tech.toLowerCase();
  const iconSize = small ? 14 : 16;

  const renderIcon = () => {
    // Try tech-stack-icons
    const stackName = stackIconNames[key];
    if (stackName) {
      return (
        <div className="flex-shrink-0 flex items-center justify-center" style={{ width: iconSize, height: iconSize }}>
          <StackIcon name={stackName as any} style={{ width: iconSize, height: iconSize, display: 'block' }} />
        </div>
      );
    }

    // Try react-icons fallback
    const FallbackIcon = siIconFallbacks[key];
    if (FallbackIcon) {
      const color = techColors[key] || '#C15F3C';
      return <FallbackIcon size={iconSize} style={{ color }} className="flex-shrink-0" />;
    }

    // No icon available
    return null;
  };

  const icon = renderIcon();

  return (
    <div
      className={`inline-flex items-center ${icon ? 'gap-1.5' : ''} ${small ? 'px-2 py-0.5' : 'px-2.5 py-1'}`}
      style={{
        borderRadius: '6px',
        backgroundColor: 'rgba(193, 95, 60, 0.07)',
        border: '1px solid rgba(193, 95, 60, 0.15)',
      }}
    >
      {icon}
      <span
        className="text-gray-700 font-medium whitespace-nowrap leading-none"
        style={{
          fontSize: small ? '11px' : '12px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {tech}
      </span>
    </div>
  );
}
