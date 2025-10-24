'use client'

import { Calendar, Phone, Mail, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A8FDC 0%, #4A9FE8 100%)' }}>
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-10 animate-float">
          <Sparkles className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA content */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              READY FOR A NEW SMILE?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and take the first step towards a healthier,
              brighter smile. We're here to help you achieve the smile of your dreams.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse-soft"
              style={{ color: '#0A8FDC' }}
            >
              <Calendar className="w-6 h-6" />
              <span>GET STARTED TODAY</span>
            </Link>
          </div>

          {/* Contact information cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" style={{ color: '#0A8FDC' }} />
              </div>
              <h4 className="font-semibold text-white mb-2">Call Us</h4>
              <p className="text-white/90">(555) 123-SMILE</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" style={{ color: '#0A8FDC' }} />
              </div>
              <h4 className="font-semibold text-white mb-2">Email Us</h4>
              <p className="text-white/90">info@brightsmile.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" style={{ color: '#0A8FDC' }} />
              </div>
              <h4 className="font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-white/90">123 Wellness Avenue</p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center mt-12 text-white/80">
            <p className="text-lg">
              <strong>Office Hours:</strong> Monday-Friday 8AM-6PM | Saturday 9AM-3PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
