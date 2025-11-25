import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-neutral-200/60 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/30 transition-all duration-500">
      <Quote className="w-8 h-8 text-neutral-200 mb-6" strokeWidth={1.5} />
      <p className="text-[15px] text-neutral-600 leading-[1.8] mb-8">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <img src={image || "/placeholder.svg"} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-medium text-neutral-900 text-[15px]">{author}</div>
          <div className="text-[13px] text-neutral-500">{role}</div>
        </div>
      </div>
    </div>
  )
}
