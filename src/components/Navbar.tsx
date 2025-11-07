import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8EAED', fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-end items-center">
          {/* Navigation Links */}
          <div className="flex gap-8 items-center">
            <Link
              to="/"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4285F4'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4285F4] after:transition-all hover:after:w-full">
                Home
              </span>
            </Link>
            <Link
              to="/projects"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#EA4335'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EA4335] after:transition-all hover:after:w-full">
                Projects
              </span>
            </Link>
            <Link
              to="/research"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FBBC04'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FBBC04] after:transition-all hover:after:w-full">
                Research
              </span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#34A853'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#34A853] after:transition-all hover:after:w-full">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
