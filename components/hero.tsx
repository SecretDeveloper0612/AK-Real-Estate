import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-slow"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 md:px-6 lg:px-12 mt-10 md:mt-0">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-200 animate-pulse" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-amber-100/90 font-medium">
                Premium Real Estate
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 animate-fade-up-delay-1 drop-shadow-lg">
            <span className="italic font-light text-neutral-200 block mb-2">
              Exquisite Living
            </span>
            <span className="font-medium block">Where Luxury</span>
            <span className="font-medium block text-white/90">
              Meets Legacy
            </span>
          </h1>

          <p className="text-base md:text-xl text-neutral-200 mb-8 md:mb-12 max-w-xl leading-relaxed font-light animate-fade-up-delay-2 drop-shadow-md">
            Discover a curated collection of the world's most extraordinary
            homes. Designed for those who seek the exceptional.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 animate-fade-up-delay-2">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-950 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all duration-300 group w-full sm:w-auto"
            >
              Explore Collection
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              Book a Private Tour
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
          Scroll
        </span>
        <div className="w-px h-8 md:h-12 bg-linear-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  );
}
