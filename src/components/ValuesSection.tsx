import * as React from "react"
import { GridBackground } from "@/components/ui/glowing-card"

export function ValuesSection() {
  return (
    <section className="py-20 px-6">
      <GridBackground
        title="Our Values"
        description="At SamysAI, our values guide every decision we make. Innovation – We push boundaries to create intelligent, adaptive solutions. Integrity – We believe in transparency, honesty, and long-term partnerships. Excellence – Every project we deliver reflects precision and performance. Empowerment – We use AI to enhance human creativity, not replace it."
        showAvailability={false}
        className="min-h-[400px]"
      />
    </section>
  )
}
