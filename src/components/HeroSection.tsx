'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, Check, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #C1E8DC 0%, #B8E5D9 50%, #A8DFD0 100%)' }}>
      {/* Floating decorative tooth elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-16 h-16 bg-white rounded-full" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-float">
          <div className="w-12 h-12 bg-white rounded-full" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-20 animate-float">
          <div className="w-20 h-20 bg-white rounded-full" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-10 animate-float">
          <div className="w-24 h-24 bg-white rounded-full" style={{ animationDelay: '1.5s' }}></div>
        </div>
        {/* Sparkle icons */}
        <Sparkles className="absolute top-24 right-1/4 text-white opacity-30 w-8 h-8 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-40 right-1/3 text-white opacity-25 w-6 h-6 animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-1/2 left-20 text-white opacity-30 w-7 h-7 animate-pulse-soft" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-6 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Smart Dental Care</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{ color: '#0A8FDC' }}>
              ACHIEVE YOUR<br />
              <span className="text-gray-800">BRIGHTEST SMILE</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Experience compassionate, cutting-edge dental care that puts your comfort first.
              We combine modern technology with a gentle touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 animate-pulse-soft shadow-lg"
                style={{ background: '#0A8FDC' }}
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center" style={{ border: '2px solid #0A8FDC' }}>
                    <Check className="w-4 h-4" style={{ color: '#0A8FDC' }} />
                  </div>
                  <span className="text-gray-700 font-medium">Same Day</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center" style={{ border: '2px solid #0A8FDC' }}>
                    <Check className="w-4 h-4" style={{ color: '#0A8FDC' }} />
                  </div>
                  <span className="text-gray-700 font-medium">Flexible Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className={`relative ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/generated/hero-smile.jpg"
                  alt="Beautiful smile - Bright Smile Dental Clinic"
                  className="w-full h-full object-cover"
                />
                {/* Floating decorative elements on image */}
                <div className="absolute top-8 right-8 animate-float">
                  <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#0A8FDC' }}>
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
