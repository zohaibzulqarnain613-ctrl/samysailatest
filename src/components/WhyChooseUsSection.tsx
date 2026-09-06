import * as React from "react"
import { GridBackground } from "@/components/ui/glowing-card"

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-6">
      <GridBackground
        title="Why Choose Us"
        description="Businesses choose SamysAI because we don't offer generic automation — we craft intelligent systems built around your unique goals. Our team blends deep AI expertise with design precision, ensuring that every solution performs flawlessly and scales with your business."
        showAvailability={false}
        className="min-h-[400px]"
      />
    </section>
  )
}
