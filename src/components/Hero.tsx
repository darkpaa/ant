import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const SWIPE_THRESHOLD = 60;

const Hero: React.FC = () => {
  const { t } = useLang();
  const slides = t.hero.slides;

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const trackWidth = useRef<number>(0);
  const isPaused = useRef<boolean>(false);

  useEffect(() => {
    setCurrentSlide((c) => Math.min(c, slides.length - 1));
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number): void => {
      setCurrentSlide(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const nextSlide = useCallback((): void => {
    setCurrentSlide((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback((): void => {
    setCurrentSlide((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setCurrentSlide((c) => (c + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragStartX.current = e.clientX;
    trackWidth.current = trackRef.current.offsetWidth;
    setIsDragging(true);
    isPaused.current = true;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartX.current === null) return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
      if (dragOffset < 0) nextSlide();
      else prevSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
    dragStartX.current = null;
    window.setTimeout(() => {
      isPaused.current = false;
    }, 800);
  };

  const dragPercent =
    isDragging && trackWidth.current
      ? (dragOffset / trackWidth.current) * 100
      : 0;
  const translatePercent = -currentSlide * 100 + dragPercent;

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden select-none"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />

        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-400/5 rounded-full blur-2xl animate-float delay-500" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div
          ref={trackRef}
          className="overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          <div
            className={`flex ${
              isDragging ? '' : 'transition-transform duration-700 ease-out'
            }`}
            style={{ transform: `translateX(${translatePercent}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full shrink-0 pr-6"
                aria-hidden={index !== currentSlide}
              >
                <div className="max-w-5xl space-y-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2">
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-sm font-medium">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                    {slide.headline}
                    <span className="bg-gradient-to-r from-accent-400 to-amber-300 bg-clip-text text-transparent">
                      {slide.highlightedWord}
                    </span>
                    {slide.headlineEnd.split('\n').map((line, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </h1>

                  <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
                    {slide.subHeadline}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#hizmetlerimiz"
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 shadow-2xl shadow-accent-400/25 hover:shadow-accent-400/40 hover:-translate-y-1"
                    >
                      {t.hero.ctaServices}
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                      href="/iletisim"
                      className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:-translate-y-1"
                    >
                      <PhoneCall className="w-5 h-5" />
                      {t.hero.ctaContact}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`${index + 1}`}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? 'w-10 h-3 bg-accent-400'
                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label={t.hero.prevSlide}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label={t.hero.nextSlide}
              className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
