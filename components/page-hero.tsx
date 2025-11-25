import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
  label?: string
  title: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
  showCta?: boolean
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function PageHero({
  label,
  title,
  description,
  breadcrumbs,
  showCta = false,
  ctaText = "Get in Touch",
  ctaHref = "/contact",
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-neutral-950 overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title ?? "Background"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900" />
      )}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-32 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-8">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className="text-[13px] text-neutral-500 hover:text-white transition-colors tracking-wide"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="text-neutral-700">/</span>}
              </span>
            ))}
          </nav>
        )}

        {label && (
          <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 mb-6 block font-medium">
            {label}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.1] text-balance font-medium max-w-4xl mx-auto">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light">
            {description}
          </p>
        )}

        {showCta && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-white text-neutral-900 rounded-full text-[14px] font-medium hover:bg-neutral-100 transition-all duration-300 group"
          >
            {ctaText}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </section>
  )
}
