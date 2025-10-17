import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">

        {/* Left Side - Info */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left">
          {/* Title - fades in first - SINGLE LINE */}
          <div className="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 whitespace-nowrap" style={{ color: '#000000', fontFamily: 'Inter, sans-serif' }}>
              Oliver Grabner
            </h1>
          </div>

          {/* Middle text - fades in second */}
          <div className="animate-[fadeIn_0.8s_ease-out_0.6s_both]">
            <p className="text-base md:text-lg mb-4 leading-relaxed" style={{ color: '#000000' }}>
              Hi! I'm Oliver. I am currently pursuing a BS in Computer Science at Texas A&M.
            </p>
            <p className="text-sm md:text-base font-medium tracking-wide" style={{ color: '#C15F3C' }}>
              XYZ
            </p>
          </div>

          <div className="flex gap-3 pt-4 animate-[fadeIn_0.8s_ease-out_1s_both]">
            <Link
              to="/projects"
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A54F32'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C15F3C'}
            >
              View Projects
            </Link>
            <Link
              to="/research"
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300"
              style={{ borderColor: '#C15F3C', color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C15F3C';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#C15F3C';
              }}
            >
              Research
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-2 animate-[fadeIn_0.8s_ease-out_1.4s_both]">
            <a
              href="https://github.com/OliverGrabner"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#C15F3C' }}
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:olivergrabner.cs@gmail.com"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#C15F3C' }}
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/olivergrabner/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#C15F3C' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Side - Headshot (Smaller) */}
        <div className="flex justify-center animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <img
            src="/Headshot.png"
            alt="Oliver Grabner"
            className="w-64 h-auto rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
