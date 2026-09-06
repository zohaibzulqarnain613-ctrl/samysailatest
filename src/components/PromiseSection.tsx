import * as React from "react"
import { GridBackground } from "@/components/ui/glowing-card"

export function PromiseSection() {
  return (
    <section className="py-20 px-6">
      <GridBackground
        title="Our Promise"
        description="Our promise is simple — we deliver solutions that work, evolve, and grow with you. From the first consultation to post-launch optimization, we stay committed to your success every step of the way."
        showAvailability={true}
        className="min-h-[400px]"
      />
    </section>
  )
}
