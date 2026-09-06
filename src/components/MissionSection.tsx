import * as React from "react"
import { GridBackground } from "@/components/ui/glowing-card"

export function MissionSection() {
  return (
    <section className="py-20 px-6">
      <GridBackground
        title="Our Mission"
        description="At SamysAI, our mission is to empower every business with intelligent systems that handle repetitive work, enhance communication, and create space for innovation. We build automation that amplifies human potential and makes technology feel seamless, efficient, and human-centered."
        showAvailability={false}
        className="min-h-[400px]"
      />
    </section>
  )
}
