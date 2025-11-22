import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(193, 95, 60, 0.15)', fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex justify-between items-center md:justify-end">
          {/* Logo/Name on mobile */}
          <Link to="/" className="md:hidden text-xl font-bold" style={{ color: '#C15F3C' }}>
            OG
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 hover:text-[#C15F3C] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C15F3C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C15F3C] after:transition-all hover:after:w-full">
                Home
              </span>
            </Link>
            <Link
              to="/projects"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C15F3C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C15F3C] after:transition-all hover:after:w-full">
                Projects
              </span>
            </Link>
            <Link
              to="/research"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C15F3C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C15F3C] after:transition-all hover:after:w-full">
                Research
              </span>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium transition-colors"
              style={{ color: '#000000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C15F3C'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#000000'}
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C15F3C] after:transition-all hover:after:w-full">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
            style={{ top: '73px' }}
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div
            className="fixed left-0 right-0 md:hidden shadow-lg"
            style={{ backgroundColor: '#FAF7F2', top: '73px' }}
          >
            <div className="flex flex-col py-4">
              <Link
                to="/"
                onClick={closeMenu}
                className="px-6 py-3 text-lg font-medium transition-colors border-l-4 border-transparent hover:border-[#C15F3C] hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="px-6 py-3 text-lg font-medium transition-colors border-l-4 border-transparent hover:border-[#C15F3C] hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                Projects
              </Link>
              <Link
                to="/research"
                onClick={closeMenu}
                className="px-6 py-3 text-lg font-medium transition-colors border-l-4 border-transparent hover:border-[#C15F3C] hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                Research
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="px-6 py-3 text-lg font-medium transition-colors border-l-4 border-transparent hover:border-[#C15F3C] hover:bg-gray-50"
                style={{ color: '#000000' }}
              >
                Resume
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
