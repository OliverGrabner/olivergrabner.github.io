import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TechIcon from './TechIcon';

interface ProjectCardProps {
  title: string;
  date: string;
  images: string[];
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  date,
  images,
  description,
  technologies = [],
  githubLink,
  demoLink,
  index
}: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, '0');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-16 pb-16 border-b last:border-b-0" style={{ borderColor: '#E8EAED' }}>
      <div className="flex items-baseline justify-between mb-6">
        <div className="flex items-baseline gap-4">
          <span className="text-2xl font-bold" style={{ color: '#5F6368', fontFamily: 'Inter, sans-serif' }}>
            {projectNumber}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            {title}
          </h3>
        </div>
        <span className="text-base text-gray-500 font-medium ml-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          {date}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              {images.map((img, idx) => {
                const offset = idx - currentImageIndex;
                const isVideo = img.endsWith('.mp4') || img.endsWith('.webm');

                return (
                  <div
                    key={idx}
                    className={`${idx === 0 ? 'relative' : 'absolute top-0 left-0'} w-full transition-all duration-500 ease-out`}
                    style={{
                      transform: offset === 0
                        ? 'translate(0, 0) rotate(0deg) scale(1)'
                        : offset < 0
                          ? 'translate(-120%, 0) rotate(-15deg) scale(0.8)'
                          : 'translate(120%, 0) rotate(15deg) scale(0.8)',
                      opacity: offset === 0 ? 1 : 0,
                      zIndex: offset === 0 ? 10 : 0,
                      pointerEvents: offset === 0 ? 'auto' : 'none',
                      visibility: idx === 0 || offset === 0 ? 'visible' : 'hidden'
                    }}
                  >
                    {isVideo ? (
                      <video
                        src={img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover block"
                      />
                    ) : (
                      <img
                        src={img}
                        alt={`${title} - Image ${idx + 1}`}
                        className="w-full h-auto object-cover block"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                onClick={previousImage}
                disabled={currentImageIndex === 0}
                className="bg-white hover:bg-gray-50 border-2 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#5F6368' }}
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>

              <div className="flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: idx === currentImageIndex ? '#5F6368' : 'rgba(95, 99, 104, 0.3)',
                      transform: idx === currentImageIndex ? 'scale(1.3)' : 'scale(1)'
                    }}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                className="bg-white hover:bg-gray-50 border-2 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: '#5F6368' }}
                aria-label="Next image"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="md:col-span-3 flex flex-col">
          <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Lora, serif', fontSize: '15px', whiteSpace: 'pre-line' }}>
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-auto">
              {technologies.map((tech, idx) => (
                <TechIcon key={idx} tech={tech} />
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-6 mt-4 border-t" style={{ borderColor: 'rgba(95, 99, 104, 0.1)' }}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#5F6368', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#202124'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5F6368'}
              >
                <FaGithub size={28} />
                <span>GitHub</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#5F6368', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#202124'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#5F6368'}
              >
                <FaExternalLinkAlt size={28} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
