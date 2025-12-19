import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaGoogleScholar } from "react-icons/fa6";

interface ImageSlide {
  image: string;
  blackText: string;
  orangeText: string;
}

export default function Hero() {
  const slides: ImageSlide[] = [
    {
      image: '/prof_headshot.jpg',
      blackText: "Hi! I'm Oliver. I am currently pursuing a BS in Computer Science at Texas A&M.",
      orangeText: 'Full Stack | API | Backend | ML'
    },
    {
      image: '/nature.jpg',
      blackText: "I love nature and taking pictures of nature. Recently I got the chance to hike in Seattle!",
      orangeText: 'Seattle, Washington, USA'
    },
    {
      image: '/lucky.jpeg',
      blackText: "Here is my dog named Lucky! He is a 7 year old labradoodle who barks if you don't walk him early enough.",
      orangeText: 'Austin, Texas, USA'
    },
    {
      image: '/chicken.jpeg',
      blackText: "I love to cook! I'm best at making Tacos, Steak, Burgers, Hummus, Breakfast Burritos, etc..",
      orangeText: 'Los Gatos, California, USA'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch/swipe handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  };

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
              {slides[currentSlide].blackText}
            </p>
            <p className="text-sm md:text-base font-medium tracking-wide" style={{ color: '#C15F3C' }}>
              {slides[currentSlide].orangeText}
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
              className="transition-all duration-300 hover:scale-125"
              style={{ color: '#C15F3C' }}
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:olivergrabner.cs@gmail.com"
              className="transition-all duration-300 hover:scale-125"
              style={{ color: '#C15F3C' }}
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/olivergrabner/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125"
              style={{ color: '#C15F3C' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=k3QsYgoAAAAJ&view_op=list_works&citft=1&citft=2&email_for_op=oliver.charles.rene.grabner%40gmail.com&gmla=AKzYXQ0XilqjRC0MVaN2uLWqpk8zzjDII_UhIKkWewQ2z3RiYBIgG2jqEvo1Vs_P0CntWWXHV1pIMJ-s8n-AdjjCdvn6PuU-lR5HeV4bfxtbItlLxJAKytxpJRAGiwxCVhv1o5tsviYvojE7mlUsVkw1vEG-59HwI7VCzLMkWgSU8yHRWM4MuyqiIaxsvAXFO0EWj5T3XAiuNBvBePQWY2s37j7KYooeuTEK71CGtp6QsUKaUwG1gBwvNGHJYT2gJE9kyg8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125"
              style={{ color: '#C15F3C' }}
              aria-label="Google Scholar"
            >
              <FaGoogleScholar size={28} />
            </a>
          </div>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="flex flex-col items-center animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <div
            className="relative select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <img
              src={slides[currentSlide].image}
              alt="Oliver Grabner"
              className="w-56 sm:w-64 h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={previousSlide}
              className="bg-white hover:bg-gray-50 active:bg-gray-100 border-2 text-gray-800 rounded-full w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center transition-all duration-200 shadow-sm"
              style={{ borderColor: '#C15F3C' }}
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-3 h-3 sm:w-2.5 sm:h-2.5" />
            </button>

            <div className="flex gap-2 sm:gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: idx === currentSlide ? '#C15F3C' : 'rgba(193, 95, 60, 0.3)',
                    transform: idx === currentSlide ? 'scale(1.3)' : 'scale(1)'
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 active:bg-gray-100 border-2 text-gray-800 rounded-full w-9 h-9 sm:w-7 sm:h-7 flex items-center justify-center transition-all duration-200 shadow-sm"
              style={{ borderColor: '#C15F3C' }}
              aria-label="Next image"
            >
              <FaChevronRight className="w-3 h-3 sm:w-2.5 sm:h-2.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
