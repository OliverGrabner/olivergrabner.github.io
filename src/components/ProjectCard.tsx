import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    <div className="mb-16 pb-16 border-b last:border-b-0" style={{ borderColor: 'rgba(193, 95, 60, 0.15)' }}>
      <div className="flex items-baseline justify-between mb-6">
        <div className="flex items-baseline gap-4">
          <span className="text-2xl font-bold" style={{ color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}>
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
        <div className="md:col-span-2 relative group" style={{ perspective: '1000px' }}>
          <div className="relative" style={{ paddingTop: '16px', paddingLeft: '16px' }}>
            {images.map((img, idx) => {
              const offset = idx - currentImageIndex;
              const isVisible = idx >= currentImageIndex && idx < currentImageIndex + 3;
              const stackIndex = idx - currentImageIndex;

              return (
                <div
                  key={idx}
                  className="absolute top-0 left-0 w-full transition-all duration-500 ease-out"
                  style={{
                    transform: isVisible
                      ? `translate(${-stackIndex * 8}px, ${stackIndex * 8}px) scale(${1 - stackIndex * 0.03})`
                      : offset < 0
                        ? 'translate(-100%, 0) rotate(-10deg) scale(0.8)'
                        : 'translate(120%, 0) rotate(10deg) scale(0.8)',
                    opacity: isVisible ? 1 - stackIndex * 0.3 : 0,
                    zIndex: images.length - idx,
                    pointerEvents: idx === currentImageIndex ? 'auto' : 'none',
                    filter: stackIndex > 0 ? 'brightness(0.85)' : 'brightness(1)'
                  }}
                >
                  <img
                    src={img}
                    alt={`${title} - Image ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-sm"
                    style={{
                      boxShadow: stackIndex === 0
                        ? '0 8px 24px rgba(0, 0, 0, 0.15)'
                        : '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </div>
              );
            })}

            <img
              src={images[0]}
              alt=""
              className="w-full h-auto object-cover rounded-sm invisible"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                disabled={currentImageIndex === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed z-50"
                style={{ backdropFilter: 'blur(4px)' }}
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
              </button>

              <button
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed z-50"
                style={{ backdropFilter: 'blur(4px)' }}
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
              </button>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: idx === currentImageIndex ? '#C15F3C' : 'rgba(193, 95, 60, 0.3)',
                      transform: idx === currentImageIndex ? 'scale(1.3)' : 'scale(1)'
                    }}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="md:col-span-3 flex flex-col">
          <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Lora, serif', fontSize: '15px' }}>
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-auto">
              {technologies.map((tech, idx) => (
                <TechIcon key={idx} tech={tech} />
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-6 mt-4 border-t" style={{ borderColor: 'rgba(193, 95, 60, 0.1)' }}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A54F32'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C15F3C'}
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A54F32'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C15F3C'}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
