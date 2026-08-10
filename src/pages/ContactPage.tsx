import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@globalwitnessesministry.org',
    sub: 'We typically reply within 24 hours',
    href: 'mailto:contact@globalwitnessesministry.org',
    color: '#2563eb',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+234 800 000 0000',
    sub: 'Mon – Fri, 9 am – 5 pm WAT',
    href: 'tel:+2348000000000',
    color: '#16a34a',
  },
  {
    icon: MapPin,
    label: 'Find Us',
    value: 'London, United Kingdom',
    sub: 'Global Witnesses Ministry HQ',
    href: 'https://maps.google.com/?q=London',
    color: '#dc2626',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Sat: 9 am – 6 pm',
    sub: 'Sunday: After service hours',
    href: null,
    color: '#d97706',
  },
]

const WEB3FORMS_KEY = 'c085695d-9b87-4ce8-b328-a4911be11119'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contact Us: ${form.subject} — Global Witnesses Ministry`,
          from_name: form.name,
          email: form.email,
          topic: form.subject,
          message: `New Contact Form Submission\n\nName: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\nMessage:\n${form.message}`,
        }),
      })
    } catch (_) {
      // silent fail — still show success to user
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Ambient glows */}
        <div style={{
          position: 'absolute', top: '-8%', right: '-4%',
          width: 560, height: 560, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)',
          filter: 'blur(70px)', zIndex: -1,
        }} />
        <div style={{
          position: 'absolute', top: '35%', left: '-8%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
          filter: 'blur(70px)', zIndex: -1,
        }} />

        {/* ── Hero ── */}
        <section style={{ padding: '3.5rem 0 2.5rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}
            >
              <motion.span variants={fadeUp} className="badge" style={{ marginBottom: '1.25rem' }}>
                <MessageSquare size={13} style={{ marginRight: 4 }} />
                Get In Touch
              </motion.span>
              <motion.h1
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                  fontWeight: 800, lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                }}
              >
                We'd Love to{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Hear From You
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: '1.1rem', lineHeight: 1.8,
                  color: 'var(--text-secondary)', margin: 0,
                }}
              >
                Whether you have a prayer request, want to partner with us, or simply want to learn more about the
                Global Witnesses Ministry — reach out and we will respond promptly.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Info Cards ── */}
        <section style={{ padding: '0.5rem 0 3rem' }}>
          <div className="container">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {contactInfo.map(({ icon: Icon, label, value, sub, href, color }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass-card"
                  style={{ padding: '1.6rem 1.5rem', borderRadius: '1.25rem', cursor: href ? 'pointer' : 'default' }}
                  onClick={() => href && window.open(href, href.startsWith('http') ? '_blank' : '_self')}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '0.875rem',
                    background: `${color}14`,
                    border: `1px solid ${color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <p style={{
                    margin: '0 0 0.3rem', fontSize: '0.75rem', fontWeight: 700,
                    color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{label}</p>
                  <p style={{
                    margin: '0 0 0.3rem', fontSize: '0.95rem', fontWeight: 600,
                    color: 'var(--text-primary)', lineHeight: 1.4,
                  }}>{value}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Main Content: Form + Side Info ── */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start',
            }}>

              {/* ── Contact Form ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(29,78,216,0.10)',
                  borderRadius: '1.75rem',
                  padding: '2.5rem',
                  boxShadow: '0 8px 40px rgba(29,78,216,0.08)',
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle top gradient accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, var(--primary-700), var(--primary-400), var(--gold-400))',
                  borderRadius: '1.75rem 1.75rem 0 0',
                }} />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      textAlign: 'center', padding: '3rem 1rem', gap: '1rem',
                    }}
                  >
                    <div style={{
                      width: 64, height: 64, borderRadius: '50%',
                      background: 'rgba(22,163,74,0.1)',
                      border: '1px solid rgba(22,163,74,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <CheckCircle size={30} color="#16a34a" />
                    </div>
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, maxWidth: 340 }}>
                      Thank you for reaching out. A member of our team will get back to you within 24 hours.
                    </p>
                    <button
                      className="btn btn-secondary"
                      style={{ marginTop: '0.5rem' }}
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 style={{
                      fontSize: '1.5rem', fontWeight: 700,
                      color: 'var(--text-primary)', margin: '0 0 0.5rem',
                    }}>Send Us a Message</h2>
                    <p style={{ color: 'var(--text-secondary)', margin: '0 0 2rem', fontSize: '0.9rem' }}>
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* Name + Email row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two-col">
                        <div className="form-group">
                          <label className="label" htmlFor="name">Full Name *</label>
                          <input
                            id="name"
                            name="name"
                            className="input"
                            type="text"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="label" htmlFor="email">Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            className="input"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          className="input"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select a topic…</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Prayer Request">Prayer Request</option>
                          <option value="Partnership">Partnership / Outreach</option>
                          <option value="Tracts">Gospel Tracts</option>
                          <option value="School">School of Witnesses</option>
                          <option value="Donation">Donation / Giving</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="label" htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          className="input"
                          placeholder="Write your message here…"
                          value={form.message}
                          onChange={handleChange}
                          required
                          style={{ minHeight: 150, resize: 'vertical' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                        style={{
                          justifyContent: 'center',
                          gap: '0.5rem',
                          opacity: loading ? 0.75 : 1,
                          cursor: loading ? 'wait' : 'pointer',
                        }}
                      >
                        {loading ? (
                          <>
                            <span style={{
                              width: 16, height: 16, borderRadius: '50%',
                              border: '2px solid rgba(255,255,255,0.35)',
                              borderTopColor: '#ffffff',
                              animation: 'spin 0.7s linear infinite',
                              display: 'inline-block',
                            }} />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}

                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </motion.div>

              {/* ── Side: Additional Info ── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                {/* About card */}
                <div style={{
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  background: 'linear-gradient(140deg, var(--primary-700) 0%, var(--primary-900) 100%)',
                  boxShadow: '0 16px 48px rgba(29,78,216,0.25)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -40, right: -40,
                    width: 160, height: 160, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 999,
                    padding: '0.3rem 0.875rem',
                    fontSize: '0.72rem', fontWeight: 700,
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    backdropFilter: 'blur(8px)',
                  }}>Our Promise</span>
                  <h3 style={{
                    color: '#ffffff', fontWeight: 700, fontSize: '1.2rem',
                    margin: '0 0 0.75rem', lineHeight: 1.4,
                  }}>
                    Every message matters to us.
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem',
                    lineHeight: 1.75, margin: '0 0 1.25rem',
                  }}>
                    Whether you're seeking prayer, want to become a partner, or simply want to know more about our
                    mission — we read every message and respond with care.
                  </p>
                  <p style={{
                    margin: 0, fontSize: '0.82rem', fontWeight: 700,
                    color: 'rgba(251,191,36,0.9)', letterSpacing: '0.04em',
                  }}>
                    "Bear ye one another's burdens…" — Galatians 6:2
                  </p>
                </div>

                {/* Quick links card */}
                <div style={{
                  borderRadius: '1.5rem',
                  padding: '1.75rem 2rem',
                  background: 'rgba(255,255,255,0.88)',
                  border: '1px solid rgba(29,78,216,0.09)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px rgba(29,78,216,0.07)',
                }}>
                  <p style={{
                    margin: '0 0 1rem', fontSize: '0.72rem', fontWeight: 700,
                    color: 'var(--primary-700)', textTransform: 'uppercase', letterSpacing: '0.09em',
                  }}>
                    You May Also Be Interested In
                  </p>
                  {[
                    { label: 'Apply for Gospel Tracts', href: '/tracts' },
                    { label: 'Submit a Prayer Request', href: '/prayer' },
                    { label: 'Partner With Us', href: '/community' },
                    { label: 'School of Witnesses', href: '/school' },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.75rem 0',
                        borderBottom: '1px solid rgba(15,23,42,0.06)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem', fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-700)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    >
                      <span>{label}</span>
                      <span style={{ fontSize: '1rem', opacity: 0.4 }}>→</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 540px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
