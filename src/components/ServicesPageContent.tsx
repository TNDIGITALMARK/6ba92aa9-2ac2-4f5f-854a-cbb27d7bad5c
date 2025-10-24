'use client'

import { useState } from 'react'
import { Sparkles, Heart, Crown, Baby, AlertCircle, ArrowRight, Check, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

interface ServiceDetail {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  process: string[]
  duration: string
  pricing: string
  color: string
}

export default function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState(0)

  const services: ServiceDetail[] = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including routine cleanings, exams, cavity fillings, and preventive treatments to keep your teeth and gums healthy.',
      features: [
        'Routine Dental Cleanings',
        'Comprehensive Oral Exams',
        'Cavity Detection & Fillings',
        'Gum Disease Treatment',
        'Fluoride Treatments',
        'Dental X-Rays & Imaging'
      ],
      process: [
        'Initial consultation and health history review',
        'Comprehensive oral examination',
        'Professional cleaning and polishing',
        'Treatment planning and recommendations',
        'Follow-up care and monitoring'
      ],
      duration: '60-90 minutes',
      pricing: 'Starting at $150',
      color: '#0A8FDC'
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures including whitening, veneers, and complete smile makeovers.',
      features: [
        'Professional Teeth Whitening',
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Design & Makeover',
        'Gum Contouring',
        'Tooth Reshaping'
      ],
      process: [
        'Smile design consultation',
        'Digital smile preview',
        'Custom treatment plan creation',
        'Procedure implementation',
        'Final adjustments and perfection'
      ],
      duration: '1-3 visits',
      pricing: 'Custom pricing',
      color: '#0A8FDC'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Orthodontics',
      description: 'Straighten teeth and correct bite issues with traditional braces, clear aligners, or other orthodontic treatments.',
      features: [
        'Traditional Metal Braces',
        'Clear Ceramic Braces',
        'Invisalign Clear Aligners',
        'Retainers & Maintenance',
        'Bite Correction',
        '3D Treatment Planning'
      ],
      process: [
        'Orthodontic assessment and imaging',
        'Custom treatment plan development',
        'Appliance fitting and placement',
        'Regular adjustment appointments',
        'Retention and long-term care'
      ],
      duration: '12-24 months',
      pricing: 'Starting at $3,500',
      color: '#0A8FDC'
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: 'Pediatric Care',
      description: 'Gentle, specialized dental care for children in a fun, comfortable environment that makes dental visits enjoyable.',
      features: [
        'Children\'s Dental Exams',
        'Cavity Prevention & Treatment',
        'Fluoride Treatments',
        'Dental Sealants',
        'Early Orthodontic Assessment',
        'Habit Counseling'
      ],
      process: [
        'Child-friendly introduction to dentistry',
        'Gentle examination and cleaning',
        'Educational oral health training',
        'Preventive treatments as needed',
        'Parent consultation and guidance'
      ],
      duration: '45-60 minutes',
      pricing: 'Starting at $100',
      color: '#0A8FDC'
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: 'Emergency Services',
      description: 'Same-day emergency care for dental pain, injuries, broken teeth, and other urgent oral health issues.',
      features: [
        '24/7 Emergency Support',
        'Same-Day Appointments',
        'Immediate Pain Relief',
        'Broken Tooth Repair',
        'Lost Filling/Crown Replacement',
        'Abscess Treatment'
      ],
      process: [
        'Immediate triage and assessment',
        'Emergency pain management',
        'Diagnostic imaging as needed',
        'Urgent treatment implementation',
        'Follow-up care scheduling'
      ],
      duration: 'As needed',
      pricing: 'Insurance accepted',
      color: '#0A8FDC'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth for a complete smile restoration.',
      features: [
        'Single Tooth Implants',
        'Multiple Tooth Replacement',
        'Full Arch Restoration',
        'Implant-Supported Dentures',
        'Bone Grafting',
        '3D Surgical Planning'
      ],
      process: [
        'Comprehensive implant consultation',
        'Advanced 3D imaging and planning',
        'Surgical implant placement',
        'Healing and osseointegration period',
        'Final restoration and crown placement'
      ],
      duration: '3-6 months',
      pricing: 'Starting at $2,500',
      color: '#0A8FDC'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C1E8DC 0%, #B8E5D9 50%, #A8DFD0 100%)' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ color: '#0A8FDC' }}>
            OUR SERVICES
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental care tailored to your unique needs. From routine cleanings to complex
            restorations, we offer a full range of services to keep your smile healthy and beautiful.
          </p>
        </div>
      </section>

      {/* Services navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  background: selectedService === index ? '#0A8FDC' : '#F8F9FA',
                  color: selectedService === index ? 'white' : '#6C757D',
                  transform: selectedService === index ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: services[selectedService].color }}
                >
                  {services[selectedService].icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                    {services[selectedService].title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {services[selectedService].description}
                  </p>
                </div>
              </div>

              {/* Quick info */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <Clock className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-800">{services[selectedService].duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                  <DollarSign className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                  <div>
                    <div className="text-sm text-gray-600">Pricing</div>
                    <div className="font-semibold text-gray-800">{services[selectedService].pricing}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {services[selectedService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: '#0A8FDC' }} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Treatment Process</h3>
                <div className="space-y-3">
                  {services[selectedService].process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                        style={{ background: '#0A8FDC' }}
                      >
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Link
                  href="/about"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ background: '#0A8FDC' }}
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  className="flex-1 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
                  style={{ borderColor: '#0A8FDC', color: '#0A8FDC' }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
