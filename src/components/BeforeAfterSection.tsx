'use client'

import { useState } from 'react'

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Before/After slider */}
          <div className="order-2 md:order-1">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
              style={{ aspectRatio: '2/1' }}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before/After image */}
              <img
                src="/generated/before-after.jpg"
                alt="Before and after teeth whitening comparison"
                className="w-full h-full object-cover"
              />

              {/* Overlay for after portion */}
              <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/generated/before-after.jpg"
                  alt="After teeth whitening"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider line and handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white"
                style={{ left: `${sliderPosition}%`, boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing"
                  style={{ border: '3px solid #0A8FDC' }}
                >
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-gray-400"></div>
                    <div className="w-1 h-4 bg-gray-400"></div>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-800">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold" style={{ color: '#0A8FDC' }}>
                AFTER
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#0A8FDC' }}>
              BEFORE & AFTER
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              See the incredible transformations we've achieved for our patients. Our advanced
              cosmetic dentistry techniques deliver stunning, natural-looking results that boost
              confidence and improve oral health.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold mt-1" style={{ background: '#0A8FDC' }}>
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Professional Whitening</h4>
                  <p className="text-gray-600">Achieve a brighter smile up to 8 shades lighter in just one visit.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold mt-1" style={{ background: '#0A8FDC' }}>
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Safe & Effective</h4>
                  <p className="text-gray-600">FDA-approved treatments with no damage to enamel or sensitivity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold mt-1" style={{ background: '#0A8FDC' }}>
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Long-lasting Results</h4>
                  <p className="text-gray-600">Maintain your beautiful smile with simple at-home care.</p>
                </div>
              </div>
            </div>

            <button
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: '#0A8FDC' }}
            >
              See More Transformations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
