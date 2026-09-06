import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-white/10 to-white/5",
        "border-white/20 backdrop-blur-sm",
        "p-4 text-start sm:p-6",
        "hover:from-white/20 hover:to-white/10",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300 hover:scale-105",
        "shadow-lg hover:shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 ring-2 ring-white/20">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-sm text-gray-300">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-200 leading-relaxed">
        {text}
      </p>
    </Card>
  )
}