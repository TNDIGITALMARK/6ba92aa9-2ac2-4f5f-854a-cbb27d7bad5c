export const dynamic = 'force-dynamic'

import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
