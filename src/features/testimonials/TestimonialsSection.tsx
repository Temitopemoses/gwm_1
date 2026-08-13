import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Okafor',
    role: 'Campus Fellowship Leader',
    location: 'University of Nigeria, Nsukka',
    text: 'I attended the School of Witnesses and it completely transformed how I see my purpose. I went from knowing the Gospel to living it boldly every single day. Our campus has seen over 40 salvations since I returned.',
    rating: 5,
  },
  {
    name: 'Emmanuel Tunde',
    role: 'Church Outreach Coordinator',
    location: 'Redeemed Christian Church, Ibadan',
    text: 'We requested 200 gospel tracts through the GWM platform. Within a week, they were delivered. The quality is excellent and the response from our community has been overwhelming. Two families gave their lives to Christ last Sunday.',
    rating: 5,
  },
  {
    name: 'Patience Dankwa',
    role: 'Street Evangelist',
    location: 'Accra, Ghana',
    text: 'The Community Witness program gave me a team. I no longer go out alone. We have a strategy, we have accountability, and most importantly — we have results. Revival is happening in our streets.',
    rating: 5,
  },
  {
    name: 'Joshua Bamidele',
    role: 'Youth Pastor',
    location: 'Living Faith Church, Abuja',
    text: 'The Revival Moment Network is unlike anything I\'ve experienced. The prayer atmosphere, the expectation, the hunger for God — you can feel it. Every gathering changes you.',
    rating: 5,
  },
  {
    name: 'Ngozi Eze',
    role: 'Marketplace Minister',
    location: 'Lagos, Nigeria',
    text: 'As a professional in the marketplace, I struggled with sharing my faith at work. GWM\'s training gave me tools and confidence. I\'ve shared the Gospel with 12 colleagues — 5 are now in church.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(190, 18, 60,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Testimonials</span>
          <h2>
            Lives <span className="gradient-text">Transformed</span>
          </h2>
          <p>Real stories from real people. The Gospel is still the power of God for salvation.</p>
        </motion.div>

        {/* Main testimonial carousel */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-3xl)',
            padding: '3rem',
            minHeight: 280,
            position: 'relative',
            boxShadow: 'var(--shadow-card)',
          }}>
            <Quote size={32} color="var(--primary-700)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                }}>
                  "{testimonials[current].text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary-700), var(--primary-500))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'white',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(190, 18, 60,0.25)',
                  }}>
                    {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                      {testimonials[current].role} · {testimonials[current].location}
                    </div>
                    <div style={{ display: 'flex', gap: '2px', marginTop: '0.25rem' }}>
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} size={12} color="#d97706" fill="#d97706" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <button
              onClick={prev}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(15,23,42,0.04)',
                border: '1px solid var(--border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.04)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === current ? 'var(--primary-700)' : 'rgba(15,23,42,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(15,23,42,0.04)',
                border: '1px solid var(--border-default)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(15,23,42,0.04)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
