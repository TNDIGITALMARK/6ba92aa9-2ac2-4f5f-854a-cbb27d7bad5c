'use client'

import { useState } from 'react'
import { Award, Heart, Users, Clock, Mail, Phone, MapPin, Calendar, Send } from 'lucide-react'
import Link from 'next/link'

interface TeamMember {
  name: string
  role: string
  specialty: string
  experience: string
  image: string
  bio: string
}

export default function AboutPageContent() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Dentist',
      specialty: 'Cosmetic Dentistry Specialist',
      experience: '12 years experience',
      image: '/generated/team-sarah.jpg',
      bio: 'Dr. Johnson is passionate about creating beautiful smiles through advanced cosmetic dentistry techniques. She specializes in veneers, smile makeovers, and aesthetic restorations.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'General Dentist',
      specialty: 'Pediatric Care Focus',
      experience: '8 years experience',
      image: '/generated/team-michael.jpg',
      bio: 'Dr. Chen brings a gentle, patient-centered approach to dentistry, with special expertise in working with children and families. He believes in making dental visits comfortable and stress-free.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Dental Hygienist',
      specialty: 'Preventive Care Expert',
      experience: '10 years experience',
      image: '/generated/team-lisa.jpg',
      bio: 'Lisa is dedicated to helping patients maintain optimal oral health through preventive care and education. Her thorough cleanings and gentle technique make every visit pleasant.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your appointment request! We will contact you shortly.')
  }

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C1E8DC 0%, #B8E5D9 50%, #A8DFD0 100%)' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ color: '#0A8FDC' }}>
            ABOUT US
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Meet the caring professionals dedicated to your smile. At Bright Smile Dental Clinic,
            we combine expertise with compassion to deliver exceptional dental care.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#0A8FDC' }}>
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At Bright Smile Dental Clinic, our mission is to provide compassionate, cutting-edge
                  dental care that transforms lives through healthier, more beautiful smiles.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that everyone deserves access to quality dental care in a comfortable,
                  welcoming environment. Our team is committed to staying at the forefront of dental
                  technology while never losing sight of the personal touch that makes each patient feel valued.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Users className="w-10 h-10 mx-auto mb-3" style={{ color: '#0A8FDC' }} />
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0A8FDC' }}>5000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Award className="w-10 h-10 mx-auto mb-3" style={{ color: '#0A8FDC' }} />
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0A8FDC' }}>15</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Heart className="w-10 h-10 mx-auto mb-3" style={{ color: '#0A8FDC' }} />
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0A8FDC' }}>98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <Clock className="w-10 h-10 mx-auto mb-3" style={{ color: '#0A8FDC' }} />
                  <div className="text-3xl font-bold mb-1" style={{ color: '#0A8FDC' }}>Same</div>
                  <div className="text-sm text-gray-600">Day Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0A8FDC' }}>
              MEET OUR TEAM
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with the highest quality
              dental care in a comfortable, friendly environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                {/* Front of card */}
                <div className="relative" style={{ aspectRatio: '1/1' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>

                {/* Back of card - shows on click */}
                <div
                  className="p-6 transition-all duration-300"
                  style={{
                    maxHeight: selectedMember === index ? '500px' : '150px',
                    overflow: 'hidden'
                  }}
                >
                  <div className="mb-3">
                    <div className="font-semibold text-gray-800">{member.specialty}</div>
                    <div className="text-sm text-gray-600">{member.experience}</div>
                  </div>

                  {selectedMember === index && (
                    <p className="text-gray-600 leading-relaxed animate-fade-in">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact information */}
              <div>
                <h2 className="text-4xl font-bold mb-8" style={{ color: '#0A8FDC' }}>
                  GET IN TOUCH
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#E8F2FF' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                      <p className="text-gray-600">123 Wellness Avenue<br />Downtown Medical District</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#E8F2FF' }}>
                      <Phone className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                      <p className="text-gray-600">(555) 123-SMILE<br />Available Mon-Sat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#E8F2FF' }}>
                      <Mail className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                      <p className="text-gray-600">info@brightsmile.com<br />We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#E8F2FF' }}>
                      <Clock className="w-6 h-6" style={{ color: '#0A8FDC' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday-Friday: 8AM-6PM<br />Saturday: 9AM-3PM</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg" style={{ height: '300px', background: '#E8F2FF' }}>
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: '#0A8FDC' }} />
                      <p>Interactive Map</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking form */}
              <div>
                <h2 className="text-4xl font-bold mb-8" style={{ color: '#0A8FDC' }}>
                  BOOK APPOINTMENT
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select Service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="pediatric">Pediatric Care</option>
                        <option value="emergency">Emergency</option>
                        <option value="implants">Dental Implants</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your dental needs or concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ background: '#0A8FDC' }}
                  >
                    <Send className="w-5 h-5" />
                    <span>Request Appointment</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll confirm your appointment within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
