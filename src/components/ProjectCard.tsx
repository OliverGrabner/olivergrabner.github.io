import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TechIcon from './TechIcon';
import ImageLightbox from './ImageLightbox';

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Touch/swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next image
        nextImage();
      } else {
        // Swiped right - previous image
        previousImage();
      }
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const previousLightboxImage = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <div className="mb-16 pb-16 border-b last:border-b-0" style={{ borderColor: 'rgba(193, 95, 60, 0.15)' }}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6 gap-2">
        <div className="flex items-baseline gap-4">
          <span className="text-xl sm:text-2xl font-bold" style={{ color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}>
            {projectNumber}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
            {title}
          </h3>
        </div>
        <span className="text-sm sm:text-base text-gray-500 font-medium sm:ml-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          {date}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-sm select-none"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                touchAction: 'pan-y'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((img, idx) => {
                const offset = idx - currentImageIndex;
                const isVideo = img.endsWith('.mp4') || img.endsWith('.webm');

                // Simpler mobile animation, keep desktop rotation
                const isMobile = window.innerWidth < 768;
                const transformStyle = offset === 0
                  ? 'translate(0, 0) rotate(0deg) scale(1)'
                  : offset < 0
                    ? isMobile
                      ? 'translate(-120%, 0) scale(0.9)'
                      : 'translate(-120%, 0) rotate(-15deg) scale(0.8)'
                    : isMobile
                      ? 'translate(120%, 0) scale(0.9)'
                      : 'translate(120%, 0) rotate(15deg) scale(0.8)';

                return (
                  <div
                    key={idx}
                    className={`${idx === currentImageIndex ? 'relative' : 'absolute top-0 left-0'} w-full transition-all duration-500 ease-out cursor-pointer`}
                    style={{
                      transform: transformStyle,
                      opacity: offset === 0 ? 1 : 0,
                      zIndex: offset === 0 ? 10 : 0,
                      pointerEvents: offset === 0 ? 'auto' : 'none',
                      visibility: idx === currentImageIndex || offset === 0 ? 'visible' : 'hidden'
                    }}
                    onClick={() => !isSwiping && openLightbox(idx)}
                  >
                    {isVideo ? (
                      <video
                        src={img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload={idx === currentImageIndex ? 'auto' : 'none'}
                        onError={() => {
                          const nextIdx = images.findIndex((m, i) =>
                            i > idx && !m.endsWith('.mp4') && !m.endsWith('.webm')
                          );
                          if (nextIdx !== -1) setCurrentImageIndex(nextIdx);
                        }}
                        className="w-full h-auto object-cover block"
                      />
                    ) : (
                      <img
                        src={img}
                        alt={`${title} - Image ${idx + 1}`}
                        loading="lazy"
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
                className="bg-white hover:bg-gray-50 active:bg-gray-100 border-2 text-gray-800 rounded-full w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-200 shadow-sm"
                style={{ borderColor: '#C15F3C' }}
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              </button>

              <div className="flex gap-2 sm:gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: idx === currentImageIndex ? '#C15F3C' : 'rgba(193, 95, 60, 0.3)',
                      transform: idx === currentImageIndex ? 'scale(1.3)' : 'scale(1)'
                    }}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="bg-white hover:bg-gray-50 active:bg-gray-100 border-2 text-gray-800 rounded-full w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-200 shadow-sm"
                style={{ borderColor: '#C15F3C' }}
                aria-label="Next image"
              >
                <FaChevronRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="md:col-span-3 flex flex-col">
          <p
            className="text-gray-700 leading-relaxed mb-4"
            style={{ fontFamily: 'Inter, serif', fontSize: '15px', whiteSpace: 'pre-line' }}
            dangerouslySetInnerHTML={{ __html: description }}
          />

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
                style={{ color: '#C15F3C', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#A54F32'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#C15F3C'}
              >
                <FaExternalLinkAlt size={28} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextLightboxImage}
          onPrevious={previousLightboxImage}
          projectTitle={title}
        />
      )}
    </div>
  );
}
