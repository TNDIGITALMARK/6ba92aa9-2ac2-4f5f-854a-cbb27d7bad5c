'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  treatment: string
  content: string
  rating: number
  image: string
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Lee',
      treatment: 'General Dentistry',
      content: 'Everything was amazing! I was very comfortable during my visit and the staff made me feel welcome.',
      rating: 5,
      image: '/generated/team-sarah.jpg'
    },
    {
      id: 2,
      name: 'Sarah M.',
      treatment: 'Cosmetic Dentistry',
      content: 'I can completely changed my life! Dr. Johnson and her team were professional and caring throughout the entire process.',
      rating: 5,
      image: '/generated/team-michael.jpg'
    },
    {
      id: 3,
      name: 'Michael P.',
      treatment: 'Orthodontics',
      content: 'Their family care this facility! The pediatric dentist was wonderful with my children and made them feel at ease.',
      rating: 5,
      image: '/generated/team-lisa.jpg'
    }
  ]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #E8F2FF 0%, #F8F9FA 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A8FDC' }}>
            WHAT OUR PATIENTS SAY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experiences
            at Bright Smile Dental Clinic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial card */}
          <div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24" style={{ color: '#0A8FDC' }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                {/* Profile image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and rating */}
                <div className="text-center md:text-left flex-grow">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-2">{testimonials[currentIndex].treatment}</p>
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={goToPrevious}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Dots indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        background: index === currentIndex ? '#0A8FDC' : '#D1D5DB',
                        width: index === currentIndex ? '24px' : '8px'
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
