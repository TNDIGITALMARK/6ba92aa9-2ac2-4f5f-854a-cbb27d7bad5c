'use client'

import { useEffect, useState, useRef } from 'react'
import { Users, Award, Clock, Star } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  color: string
}

export default function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats: Stat[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 5000,
      suffix: '+',
      label: 'Happy Patients',
      color: '#0A8FDC'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 15,
      suffix: ' Years',
      label: 'Experience',
      color: '#0A8FDC'
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      color: '#0A8FDC'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 1,
      suffix: ' Day',
      label: 'Same-Day Available',
      color: '#0A8FDC'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 60
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, 30)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ background: '#F8F9FA' }}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                  style={{ background: stat.color }}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
