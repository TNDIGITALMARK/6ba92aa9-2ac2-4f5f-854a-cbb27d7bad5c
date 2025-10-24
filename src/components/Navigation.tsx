'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT & CONTACT' }
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: '#0A8FDC' }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight" style={{ color: '#0A8FDC' }}>
                SMART DENTAL CARE
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-sm transition-colors duration-300 relative group"
                style={{
                  color: pathname === link.href ? '#0A8FDC' : '#6C757D'
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ background: '#0A8FDC' }}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-gray-100"
              style={{ color: '#0A8FDC' }}
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-SMILE</span>
            </a>
            <Link
              href="/about"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: '#0A8FDC' }}
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#0A8FDC' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-semibold py-2 transition-colors"
                  style={{
                    color: pathname === link.href ? '#0A8FDC' : '#6C757D'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <a
                  href="tel:5551234567"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-300"
                  style={{ borderColor: '#0A8FDC', color: '#0A8FDC' }}
                >
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-SMILE</span>
                </a>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300"
                  style={{ background: '#0A8FDC' }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK NOW</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
