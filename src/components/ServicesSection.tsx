'use client'

import { useState } from 'react'
import { Sparkles, Heart, Crown, Baby, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  color: string
}

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services: Service[] = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'GENERAL DENTISTRY',
      description: 'Comprehensive oral health care including cleanings, exams, and preventive treatments.',
      features: ['Routine Cleanings', 'Dental Exams', 'Cavity Fillings'],
      color: '#0A8FDC'
    },
    {
      icon: <Crown className="w-10 h-10" />,
      title: 'COSMETIC DENTISTRY',
      description: 'Transform your smile with our advanced cosmetic procedures and whitening treatments.',
      features: ['Teeth Whitening', 'Veneers', 'Smile Makeover'],
      color: '#0A8FDC'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'ORTHODONTICS',
      description: 'Straighten teeth and correct bite issues with traditional braces or clear aligners.',
      features: ['Braces', 'Invisalign', 'Retainers'],
      color: '#0A8FDC'
    },
    {
      icon: <Baby className="w-10 h-10" />,
      title: 'PEDIATRIC CARE',
      description: 'Gentle, specialized dental care for children in a fun and comfortable environment.',
      features: ['Kids Cleanings', 'Fluoride Treatment', 'Sealants'],
      color: '#0A8FDC'
    },
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: 'EMERGENCY SERVICES',
      description: 'Same-day emergency care for dental pain, injuries, and urgent oral health issues.',
      features: ['24/7 Support', 'Same-Day Care', 'Pain Relief'],
      color: '#0A8FDC'
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'IMPLANTS',
      description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
      features: ['Dental Implants', 'Crowns', 'Bridges'],
      color: '#0A8FDC'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A8FDC' }}>
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your unique needs. We offer a full range of services
            to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 cursor-pointer group"
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index ? '0 12px 24px rgba(10, 143, 220, 0.15)' : '0 2px 8px rgba(0,0,0,0.08)',
                border: hoveredIndex === index ? '2px solid #0A8FDC' : '2px solid transparent'
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: hoveredIndex === index ? service.color : '#E8F2FF',
                  color: hoveredIndex === index ? 'white' : service.color
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: service.color }}
                    ></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div
                className="flex items-center gap-2 font-semibold text-sm transition-all duration-300"
                style={{
                  color: hoveredIndex === index ? service.color : '#6C757D',
                  transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)'
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ background: '#0A8FDC' }}
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
