import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-28 md:py-36 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-6 block font-medium">
            Visit AK Tower
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-white leading-[1.1] mb-7 text-balance font-medium">
            Homes for Haldwani Families Since 2003
          </h2>
          <p className="text-lg text-neutral-400 mb-12 leading-relaxed font-light max-w-xl mx-auto">
            Drop by between 9AM-1PM or 4PM-7PM to review current villas and flats with Anil Singh&apos;s on-site team at
            AK Tower, Durga City Centre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 text-sm px-8 rounded-full font-medium tracking-wide"
            >
              <Link href="/contact">
                Book an Office Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 text-sm px-8 bg-transparent rounded-full font-medium tracking-wide"
            >
              <Link href="/properties">View Villas &amp; Flats</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
