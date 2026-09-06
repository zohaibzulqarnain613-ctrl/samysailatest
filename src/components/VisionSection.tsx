import * as React from "react"
import { GridBackground } from "@/components/ui/glowing-card"

export function VisionSection() {
  return (
    <section className="py-20 px-6">
      <GridBackground
        title="Our Vision"
        description="Our vision is to lead the global transformation of modern business through AI that feels natural, learns continuously, and scales effortlessly. We aim to create a world where technology and people work together in perfect harmony to achieve limitless growth and creativity."
        showAvailability={false}
        className="min-h-[400px]"
      />
    </section>
  )
}
