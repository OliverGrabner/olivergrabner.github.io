import { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  projectTitle: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  projectTitle
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNext();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, images.length, onClose, onNext, onPrevious]);

  const currentImage = images[currentIndex];
  const isVideo = currentImage.endsWith('.mp4') || currentImage.endsWith('.webm');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn"
      style={{
        backdropFilter: 'blur(4px) saturate(180%)',
        backgroundColor: 'rgba(250, 247, 242, 0.6)',
        WebkitBackdropFilter: 'blur(4px) saturate(180%)'
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 transition-colors z-50"
        aria-label="Close lightbox"
      >
        <FaTimes size={32} />
      </button>

      {/* Media display */}
      <div
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center" style={{ minHeight: '70vh', maxHeight: '70vh' }}>
          {isVideo ? (
            <video
              src={currentImage}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-7xl max-h-[70vh] object-contain rounded-lg shadow-2xl"
              style={{ display: 'block' }}
            />
          ) : (
            <img
              src={currentImage}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              className="max-w-7xl max-h-[70vh] object-contain rounded-lg shadow-2xl"
              style={{ display: 'block' }}
            />
          )}
        </div>

        {/* Carousel controls - same style as original */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              disabled={currentIndex === 0}
              className="bg-white hover:bg-gray-50 border-2 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: '#C15F3C' }}
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    const diff = idx - currentIndex;
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) onNext();
                    } else if (diff < 0) {
                      for (let i = 0; i < -diff; i++) onPrevious();
                    }
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: idx === currentIndex ? '#C15F3C' : 'rgba(193, 95, 60, 0.3)',
                    transform: idx === currentIndex ? 'scale(1.3)' : 'scale(1)'
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              disabled={currentIndex === images.length - 1}
              className="bg-white hover:bg-gray-50 border-2 text-gray-800 rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: '#C15F3C' }}
              aria-label="Next image"
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
